#!/usr/bin/env node
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable babel/camelcase */
/* eslint-disable one-var */
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import * as util from 'util'
import {readdir} from 'fs'
import path from 'path'
import * as contentful from 'contentful-management'
import * as runMigration from 'contentful-migration/built/bin/cli'

const readdirAsync = util.promisify(readdir)

require('dotenv').config()

async function migrate(): Promise<string> {
  try {
    // utility fns
    const getVersionOfFile = (file: string) =>
      file.replace('.js', '').replace(/_/g, '.')
    const getFileOfVersion = (version: string) =>
      `${version.replace(/\./g, '_')}.js`

    //
    // Configuration variables
    //
    const {
      CONTENTFUL_SPACE_ID,
      CONTENTFUL_ENVIRONMENT,
      CONTENTFUL_CMA_TOKEN,
    } = process.env
    const MIGRATIONS_DIR = path.join('.', 'migrations')

    const client = contentful.createClient({
      accessToken: 'CFPAT-LCVgqVx98eSvfRUJV5XjLeB92glOc3dcXfguWzgCFnY',
    })
    const space = await client.getSpace(CONTENTFUL_SPACE_ID)

    let environment
    console.log('Running with the following configuration')
    console.log(`CONTENTFUL_SPACE_ID: ${CONTENTFUL_SPACE_ID}`)
    console.log(`CONTENTFUL_ENVIRONMENT: ${CONTENTFUL_ENVIRONMENT}`)

    // ---------------------------------------------------------------------------
    console.log(
      `Checking for existing versions of environment: ${CONTENTFUL_ENVIRONMENT}`,
    )

    try {
      environment = await space.getEnvironment(CONTENTFUL_ENVIRONMENT)
      if (CONTENTFUL_ENVIRONMENT != 'master') {
        await environment.delete()
        console.log('Environment deleted')
      }
    } catch (e) {
      console.log('Environment not found')
    }

    // ---------------------------------------------------------------------------
    if (CONTENTFUL_ENVIRONMENT != 'master') {
      console.log(`Creating environment ${CONTENTFUL_ENVIRONMENT}`)
      environment = await space.createEnvironmentWithId(
        CONTENTFUL_ENVIRONMENT,
        {
          name: CONTENTFUL_ENVIRONMENT,
        },
      )
    }
    // ---------------------------------------------------------------------------
    const DELAY = 3000
    const MAX_NUMBER_OF_TRIES = 10
    let count = 0

    console.log('Waiting for environment processing...')

    while (count < MAX_NUMBER_OF_TRIES) {
      const status = (await space.getEnvironment(environment.sys.id)).sys.status
        .sys.id

      if (status === 'ready' || status === 'failed') {
        if (status === 'ready') {
          console.log(
            `Successfully processed new environment (${CONTENTFUL_ENVIRONMENT})`,
          )
        } else {
          console.log('Environment creation failed')
        }
        break
      }

      await new Promise(resolve => setTimeout(resolve, DELAY))
      count++
    }

    // ---------------------------------------------------------------------------
    console.log('Update API Keys to allow access to new environment')
    const newEnv = {
      sys: {
        type: 'Link',
        linkType: 'Environment',
        id: CONTENTFUL_ENVIRONMENT,
      },
    }

    const {items: keys} = await space.getApiKeys()
    await Promise.all(
      keys.map(key => {
        console.log(`Updating - ${key.sys.id}`)
        key.environments.push(newEnv)
        return key.update()
      }),
    )

    // ---------------------------------------------------------------------------
    console.log('Set default locale to new environment')
    const defaultLocale = (await environment.getLocales()).items.find(
      locale => locale.default,
    ).code

    // ---------------------------------------------------------------------------
    console.log('Read all the available migrations from the file system')
    const availableMigrations = (await readdirAsync(MIGRATIONS_DIR))
      .filter(file => /^\d+?\.js$/.test(file))
      .map(file => getVersionOfFile(file))

    // ---------------------------------------------------------------------------
    console.log('Figure out latest ran migration of the contentful space')
    const {items: versions} = await environment.getEntries({
      content_type: 'versionTracking',
    })

    if (!versions.length || versions.length > 1) {
      throw new Error(
        "There should only be one entry of type 'versionTracking'",
      )
    }

    let storedVersionEntry = versions[0]
    const currentVersionString =
      storedVersionEntry.fields.version[defaultLocale]

    // ---------------------------------------------------------------------------
    console.log('Evaluate which migrations to run')
    const currentMigrationIndex = availableMigrations.indexOf(
      currentVersionString,
    )

    if (currentMigrationIndex === -1) {
      throw new Error(
        `Version ${currentVersionString} is not matching with any known migration`,
      )
    }
    const migrationsToRun = availableMigrations.slice(currentMigrationIndex + 1)
    const migrationOptions = {
      spaceId: CONTENTFUL_SPACE_ID,
      environmentId: CONTENTFUL_ENVIRONMENT,
      accessToken: CONTENTFUL_CMA_TOKEN,
      yes: true,
    }

    // ---------------------------------------------------------------------------
    console.log('Run migrations and update version entry')
    let migrationToRun
    while ((migrationToRun = migrationsToRun.shift())) {
      const filePath = path.join(
        __dirname,
        '..',
        'migrations',
        getFileOfVersion(migrationToRun),
      )
      console.log(`Running ${filePath}`)
      await runMigration(
        Object.assign(migrationOptions, {
          filePath,
        }),
      )
      console.log(`${migrationToRun} succeeded`)

      storedVersionEntry.fields.version[defaultLocale] = migrationToRun
      storedVersionEntry = await storedVersionEntry.update()
      storedVersionEntry = await storedVersionEntry.publish()

      console.log(`Updated version entry to ${migrationToRun}`)
    }

    console.log('All done!')
    return Promise.resolve('All done!')
  } catch (e) {
    console.error(e)
    // eslint-disable-next-line no-process-exit
    process.exit(1)
    return Promise.resolve(e)
  }
}

;(async () => {
  await migrate()
})()
