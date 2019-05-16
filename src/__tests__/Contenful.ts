import {createContentful} from '../test-helper'

const client = createContentful()

test('should have the correct post content type', async () => {
  const post = await client.getContentType('post')
  expect(post.name).toBe('Post')
  expect(post.displayField).toBe('title')
  expect(post.description).toBe('')
  expect(post.fields).toMatchInlineSnapshot(`
    Array [
      Object {
        "disabled": false,
        "id": "title",
        "localized": false,
        "name": "Title",
        "omitted": false,
        "required": true,
        "type": "Symbol",
      },
      Object {
        "disabled": false,
        "id": "slug",
        "localized": false,
        "name": "Slug",
        "omitted": false,
        "required": true,
        "type": "Symbol",
      },
      Object {
        "disabled": false,
        "id": "publishDate",
        "localized": false,
        "name": "Publish Date",
        "omitted": false,
        "required": true,
        "type": "Date",
      },
      Object {
        "disabled": false,
        "id": "heroImage",
        "linkType": "Asset",
        "localized": false,
        "name": "Hero Image",
        "omitted": false,
        "required": true,
        "type": "Link",
      },
      Object {
        "disabled": false,
        "id": "body",
        "localized": false,
        "name": "Body",
        "omitted": false,
        "required": true,
        "type": "Text",
      },
      Object {
        "disabled": false,
        "id": "tags",
        "items": Object {
          "linkType": "Entry",
          "type": "Link",
          "validations": Array [
            Object {
              "linkContentType": Array [
                "tag",
              ],
            },
          ],
        },
        "localized": false,
        "name": "Tags",
        "omitted": false,
        "required": false,
        "type": "Array",
      },
      Object {
        "disabled": false,
        "id": "metaDescription",
        "localized": false,
        "name": "Meta Description",
        "omitted": false,
        "required": false,
        "type": "Text",
      },
      Object {
        "disabled": false,
        "id": "author",
        "localized": false,
        "name": "author",
        "omitted": false,
        "required": false,
        "type": "Symbol",
      },
    ]
  `)
})

test('should have the correct page content type', async () => {
  const page = await client.getContentType('page')
  expect(page.name).toBe('Page')
  expect(page.displayField).toBe('title')
  expect(page.description).toBe('')
  expect(page.fields).toMatchInlineSnapshot(`
            Array [
              Object {
                "disabled": false,
                "id": "title",
                "localized": false,
                "name": "Title",
                "omitted": false,
                "required": true,
                "type": "Symbol",
              },
              Object {
                "disabled": false,
                "id": "slug",
                "localized": false,
                "name": "Slug",
                "omitted": false,
                "required": true,
                "type": "Symbol",
              },
              Object {
                "disabled": false,
                "id": "body",
                "localized": false,
                "name": "Body",
                "omitted": false,
                "required": true,
                "type": "Text",
              },
              Object {
                "disabled": false,
                "id": "metaDescription",
                "localized": false,
                "name": "Meta Description",
                "omitted": false,
                "required": false,
                "type": "Text",
              },
            ]
      `)
})

test('should have the correct tag content type', async () => {
  const tag = await client.getContentType('tag')
  expect(tag.name).toBe('Tag')
  expect(tag.displayField).toBe('title')
  expect(tag.description).toBe('')
  expect(tag.fields).toMatchInlineSnapshot(`
            Array [
              Object {
                "disabled": false,
                "id": "title",
                "localized": false,
                "name": "Title",
                "omitted": false,
                "required": true,
                "type": "Symbol",
              },
              Object {
                "disabled": false,
                "id": "slug",
                "localized": false,
                "name": "Slug",
                "omitted": false,
                "required": true,
                "type": "Symbol",
              },
            ]
      `)
})
