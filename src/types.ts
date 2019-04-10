import {ContentfulFluid, Maybe} from './graphql'

export type Fluid = Maybe<
  Pick<
    ContentfulFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >
>
