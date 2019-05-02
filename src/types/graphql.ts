export type Maybe<T> = T | undefined
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type ContentfulAsset = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  contentful_id?: Maybe<Scalars['String']>
  file?: Maybe<ContentfulAssetFile>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  node_locale?: Maybe<Scalars['String']>
  fixed?: Maybe<ContentfulFixed>
  resolutions?: Maybe<ContentfulResolutions>
  fluid?: Maybe<ContentfulFluid>
  sizes?: Maybe<ContentfulSizes>
  resize?: Maybe<ContentfulResize>
}

export type ContentfulAssetFixedArgs = {
  width: Scalars['Int']
  height?: Maybe<Scalars['Int']>
  quality: Scalars['Int']
  toFormat: ContentfulImageFormat
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus: ContentfulImageCropFocus
  background: Scalars['String']
}

export type ContentfulAssetResolutionsArgs = {
  width: Scalars['Int']
  height?: Maybe<Scalars['Int']>
  quality: Scalars['Int']
  toFormat: ContentfulImageFormat
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus: ContentfulImageCropFocus
  background: Scalars['String']
}

export type ContentfulAssetFluidArgs = {
  maxWidth: Scalars['Int']
  maxHeight?: Maybe<Scalars['Int']>
  quality: Scalars['Int']
  toFormat: ContentfulImageFormat
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus: ContentfulImageCropFocus
  background: Scalars['String']
  sizes?: Maybe<Scalars['String']>
}

export type ContentfulAssetSizesArgs = {
  maxWidth: Scalars['Int']
  maxHeight?: Maybe<Scalars['Int']>
  quality: Scalars['Int']
  toFormat: ContentfulImageFormat
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus: ContentfulImageCropFocus
  background: Scalars['String']
  sizes?: Maybe<Scalars['String']>
}

export type ContentfulAssetResizeArgs = {
  width: Scalars['Int']
  height?: Maybe<Scalars['Int']>
  quality: Scalars['Int']
  jpegProgressive: Scalars['Boolean']
  resizingBehavior?: Maybe<ImageResizingBehavior>
  toFormat: ContentfulImageFormat
  cropFocus: ContentfulImageCropFocus
  background: Scalars['String']
}

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulAssetEdge>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulAssetGroupConnection>
}

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>
  node: ContentfulAsset
  previous?: Maybe<ContentfulAsset>
}

export type ContentfulAssetFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentful_id'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>
  details?: Maybe<ContentfulAssetFileDetails>
  fileName?: Maybe<Scalars['String']>
  contentType?: Maybe<Scalars['String']>
}

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>
  image?: Maybe<ContentfulAssetFileDetailsImage>
}

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>
}

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
}

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
}

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>
  fileName?: Maybe<StringQueryOperatorInput>
  contentType?: Maybe<StringQueryOperatorInput>
}

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  file?: Maybe<ContentfulAssetFileFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  fixed?: Maybe<ContentfulFixedFilterInput>
  resolutions?: Maybe<ContentfulResolutionsFilterInput>
  fluid?: Maybe<ContentfulFluidFilterInput>
  sizes?: Maybe<ContentfulSizesFilterInput>
  resize?: Maybe<ContentfulResizeFilterInput>
}

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulAssetEdge>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulContentType = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  name?: Maybe<Scalars['String']>
  displayField?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulContentTypeEdge>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulContentTypeGroupConnection>
}

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>
  node: ContentfulContentType
  previous?: Maybe<ContentfulContentType>
}

export type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description'

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  displayField?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
}

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulContentTypeEdge>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  srcSet?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
}

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
}

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  srcSet?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
}

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
}

export type ContentfulImageCropFocus =
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACES'
  | 'CENTER'

export type ContentfulImageFormat = 'NO_CHANGE' | 'JPG' | 'PNG' | 'WEBP'

export type ContentfulPage = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  body?: Maybe<ContentfulPageBodyTextNode>
  metaDescription?: Maybe<ContentfulPageMetaDescriptionTextNode>
  contentful_id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  node_locale?: Maybe<Scalars['String']>
  childContentfulPageBodyTextNode?: Maybe<ContentfulPageBodyTextNode>
  childContentfulPageMetaDescriptionTextNode?: Maybe<
    ContentfulPageMetaDescriptionTextNode
  >
}

export type ContentfulPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulPageBodyTextNode = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  body?: Maybe<Scalars['String']>
  childMarkdownRemark?: Maybe<MarkdownRemark>
}

export type ContentfulPageBodyTextNodeConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPageBodyTextNodeEdge>
  nodes: Array<ContentfulPageBodyTextNode>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulPageBodyTextNodeGroupConnection>
}

export type ContentfulPageBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulPageBodyTextNodeFieldsEnum
}

export type ContentfulPageBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulPageBodyTextNodeFieldsEnum
}

export type ContentfulPageBodyTextNodeEdge = {
  next?: Maybe<ContentfulPageBodyTextNode>
  node: ContentfulPageBodyTextNode
  previous?: Maybe<ContentfulPageBodyTextNode>
}

export type ContentfulPageBodyTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'body'

export type ContentfulPageBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  body?: Maybe<StringQueryOperatorInput>
}

export type ContentfulPageBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPageBodyTextNodeEdge>
  nodes: Array<ContentfulPageBodyTextNode>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPageBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageBodyTextNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulPageConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPageEdge>
  nodes: Array<ContentfulPage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulPageGroupConnection>
}

export type ContentfulPageConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum
}

export type ContentfulPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulPageFieldsEnum
}

export type ContentfulPageEdge = {
  next?: Maybe<ContentfulPage>
  node: ContentfulPage
  previous?: Maybe<ContentfulPage>
}

export type ContentfulPageFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'slug'
  | 'body___id'
  | 'body___parent___id'
  | 'body___parent___parent___id'
  | 'body___parent___parent___children'
  | 'body___parent___children'
  | 'body___parent___children___id'
  | 'body___parent___children___children'
  | 'body___parent___internal___content'
  | 'body___parent___internal___contentDigest'
  | 'body___parent___internal___description'
  | 'body___parent___internal___fieldOwners'
  | 'body___parent___internal___ignoreType'
  | 'body___parent___internal___mediaType'
  | 'body___parent___internal___owner'
  | 'body___parent___internal___type'
  | 'body___children'
  | 'body___children___id'
  | 'body___children___parent___id'
  | 'body___children___parent___children'
  | 'body___children___children'
  | 'body___children___children___id'
  | 'body___children___children___children'
  | 'body___children___internal___content'
  | 'body___children___internal___contentDigest'
  | 'body___children___internal___description'
  | 'body___children___internal___fieldOwners'
  | 'body___children___internal___ignoreType'
  | 'body___children___internal___mediaType'
  | 'body___children___internal___owner'
  | 'body___children___internal___type'
  | 'body___internal___content'
  | 'body___internal___contentDigest'
  | 'body___internal___description'
  | 'body___internal___fieldOwners'
  | 'body___internal___ignoreType'
  | 'body___internal___mediaType'
  | 'body___internal___owner'
  | 'body___internal___type'
  | 'body___body'
  | 'metaDescription___id'
  | 'metaDescription___parent___id'
  | 'metaDescription___parent___parent___id'
  | 'metaDescription___parent___parent___children'
  | 'metaDescription___parent___children'
  | 'metaDescription___parent___children___id'
  | 'metaDescription___parent___children___children'
  | 'metaDescription___parent___internal___content'
  | 'metaDescription___parent___internal___contentDigest'
  | 'metaDescription___parent___internal___description'
  | 'metaDescription___parent___internal___fieldOwners'
  | 'metaDescription___parent___internal___ignoreType'
  | 'metaDescription___parent___internal___mediaType'
  | 'metaDescription___parent___internal___owner'
  | 'metaDescription___parent___internal___type'
  | 'metaDescription___children'
  | 'metaDescription___children___id'
  | 'metaDescription___children___parent___id'
  | 'metaDescription___children___parent___children'
  | 'metaDescription___children___children'
  | 'metaDescription___children___children___id'
  | 'metaDescription___children___children___children'
  | 'metaDescription___children___internal___content'
  | 'metaDescription___children___internal___contentDigest'
  | 'metaDescription___children___internal___description'
  | 'metaDescription___children___internal___fieldOwners'
  | 'metaDescription___children___internal___ignoreType'
  | 'metaDescription___children___internal___mediaType'
  | 'metaDescription___children___internal___owner'
  | 'metaDescription___children___internal___type'
  | 'metaDescription___internal___content'
  | 'metaDescription___internal___contentDigest'
  | 'metaDescription___internal___description'
  | 'metaDescription___internal___fieldOwners'
  | 'metaDescription___internal___ignoreType'
  | 'metaDescription___internal___mediaType'
  | 'metaDescription___internal___owner'
  | 'metaDescription___internal___type'
  | 'metaDescription___metaDescription'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'node_locale'

export type ContentfulPageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  body?: Maybe<ContentfulPageBodyTextNodeFilterInput>
  metaDescription?: Maybe<ContentfulPageMetaDescriptionTextNodeFilterInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
}

export type ContentfulPageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPageEdge>
  nodes: Array<ContentfulPage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPageMetaDescriptionTextNode = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  metaDescription?: Maybe<Scalars['String']>
  childMarkdownRemark?: Maybe<MarkdownRemark>
}

export type ContentfulPageMetaDescriptionTextNodeConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPageMetaDescriptionTextNodeEdge>
  nodes: Array<ContentfulPageMetaDescriptionTextNode>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulPageMetaDescriptionTextNodeGroupConnection>
}

export type ContentfulPageMetaDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulPageMetaDescriptionTextNodeFieldsEnum
}

export type ContentfulPageMetaDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulPageMetaDescriptionTextNodeFieldsEnum
}

export type ContentfulPageMetaDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulPageMetaDescriptionTextNode>
  node: ContentfulPageMetaDescriptionTextNode
  previous?: Maybe<ContentfulPageMetaDescriptionTextNode>
}

export type ContentfulPageMetaDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'metaDescription'

export type ContentfulPageMetaDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  metaDescription?: Maybe<StringQueryOperatorInput>
}

export type ContentfulPageMetaDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPageMetaDescriptionTextNodeEdge>
  nodes: Array<ContentfulPageMetaDescriptionTextNode>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPageMetaDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageMetaDescriptionTextNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulPost = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  publishDate?: Maybe<Scalars['Date']>
  heroImage?: Maybe<ContentfulAsset>
  tags?: Maybe<Array<Maybe<ContentfulTag>>>
  body?: Maybe<ContentfulPostBodyTextNode>
  contentful_id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  node_locale?: Maybe<Scalars['String']>
  metaDescription?: Maybe<ContentfulPostMetaDescriptionTextNode>
  childContentfulPostBodyTextNode?: Maybe<ContentfulPostBodyTextNode>
  childContentfulPostMetaDescriptionTextNode?: Maybe<
    ContentfulPostMetaDescriptionTextNode
  >
}

export type ContentfulPostPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulPostBodyTextNode = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  body?: Maybe<Scalars['String']>
  childMarkdownRemark?: Maybe<MarkdownRemark>
}

export type ContentfulPostBodyTextNodeConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPostBodyTextNodeEdge>
  nodes: Array<ContentfulPostBodyTextNode>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulPostBodyTextNodeGroupConnection>
}

export type ContentfulPostBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulPostBodyTextNodeFieldsEnum
}

export type ContentfulPostBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulPostBodyTextNodeFieldsEnum
}

export type ContentfulPostBodyTextNodeEdge = {
  next?: Maybe<ContentfulPostBodyTextNode>
  node: ContentfulPostBodyTextNode
  previous?: Maybe<ContentfulPostBodyTextNode>
}

export type ContentfulPostBodyTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'body'

export type ContentfulPostBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  body?: Maybe<StringQueryOperatorInput>
}

export type ContentfulPostBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPostBodyTextNodeEdge>
  nodes: Array<ContentfulPostBodyTextNode>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPostBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostBodyTextNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulPostConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPostEdge>
  nodes: Array<ContentfulPost>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulPostGroupConnection>
}

export type ContentfulPostConnectionDistinctArgs = {
  field: ContentfulPostFieldsEnum
}

export type ContentfulPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulPostFieldsEnum
}

export type ContentfulPostEdge = {
  next?: Maybe<ContentfulPost>
  node: ContentfulPost
  previous?: Maybe<ContentfulPost>
}

export type ContentfulPostFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'slug'
  | 'publishDate'
  | 'heroImage___id'
  | 'heroImage___parent___id'
  | 'heroImage___parent___parent___id'
  | 'heroImage___parent___parent___children'
  | 'heroImage___parent___children'
  | 'heroImage___parent___children___id'
  | 'heroImage___parent___children___children'
  | 'heroImage___parent___internal___content'
  | 'heroImage___parent___internal___contentDigest'
  | 'heroImage___parent___internal___description'
  | 'heroImage___parent___internal___fieldOwners'
  | 'heroImage___parent___internal___ignoreType'
  | 'heroImage___parent___internal___mediaType'
  | 'heroImage___parent___internal___owner'
  | 'heroImage___parent___internal___type'
  | 'heroImage___children'
  | 'heroImage___children___id'
  | 'heroImage___children___parent___id'
  | 'heroImage___children___parent___children'
  | 'heroImage___children___children'
  | 'heroImage___children___children___id'
  | 'heroImage___children___children___children'
  | 'heroImage___children___internal___content'
  | 'heroImage___children___internal___contentDigest'
  | 'heroImage___children___internal___description'
  | 'heroImage___children___internal___fieldOwners'
  | 'heroImage___children___internal___ignoreType'
  | 'heroImage___children___internal___mediaType'
  | 'heroImage___children___internal___owner'
  | 'heroImage___children___internal___type'
  | 'heroImage___internal___content'
  | 'heroImage___internal___contentDigest'
  | 'heroImage___internal___description'
  | 'heroImage___internal___fieldOwners'
  | 'heroImage___internal___ignoreType'
  | 'heroImage___internal___mediaType'
  | 'heroImage___internal___owner'
  | 'heroImage___internal___type'
  | 'heroImage___contentful_id'
  | 'heroImage___file___url'
  | 'heroImage___file___details___size'
  | 'heroImage___file___fileName'
  | 'heroImage___file___contentType'
  | 'heroImage___title'
  | 'heroImage___description'
  | 'heroImage___node_locale'
  | 'heroImage___fixed___base64'
  | 'heroImage___fixed___tracedSVG'
  | 'heroImage___fixed___aspectRatio'
  | 'heroImage___fixed___width'
  | 'heroImage___fixed___height'
  | 'heroImage___fixed___src'
  | 'heroImage___fixed___srcSet'
  | 'heroImage___fixed___srcWebp'
  | 'heroImage___fixed___srcSetWebp'
  | 'heroImage___resolutions___base64'
  | 'heroImage___resolutions___tracedSVG'
  | 'heroImage___resolutions___aspectRatio'
  | 'heroImage___resolutions___width'
  | 'heroImage___resolutions___height'
  | 'heroImage___resolutions___src'
  | 'heroImage___resolutions___srcSet'
  | 'heroImage___resolutions___srcWebp'
  | 'heroImage___resolutions___srcSetWebp'
  | 'heroImage___fluid___base64'
  | 'heroImage___fluid___tracedSVG'
  | 'heroImage___fluid___aspectRatio'
  | 'heroImage___fluid___src'
  | 'heroImage___fluid___srcSet'
  | 'heroImage___fluid___srcWebp'
  | 'heroImage___fluid___srcSetWebp'
  | 'heroImage___fluid___sizes'
  | 'heroImage___sizes___base64'
  | 'heroImage___sizes___tracedSVG'
  | 'heroImage___sizes___aspectRatio'
  | 'heroImage___sizes___src'
  | 'heroImage___sizes___srcSet'
  | 'heroImage___sizes___srcWebp'
  | 'heroImage___sizes___srcSetWebp'
  | 'heroImage___sizes___sizes'
  | 'heroImage___resize___base64'
  | 'heroImage___resize___tracedSVG'
  | 'heroImage___resize___src'
  | 'heroImage___resize___width'
  | 'heroImage___resize___height'
  | 'heroImage___resize___aspectRatio'
  | 'tags'
  | 'tags___id'
  | 'tags___parent___id'
  | 'tags___parent___parent___id'
  | 'tags___parent___parent___children'
  | 'tags___parent___children'
  | 'tags___parent___children___id'
  | 'tags___parent___children___children'
  | 'tags___parent___internal___content'
  | 'tags___parent___internal___contentDigest'
  | 'tags___parent___internal___description'
  | 'tags___parent___internal___fieldOwners'
  | 'tags___parent___internal___ignoreType'
  | 'tags___parent___internal___mediaType'
  | 'tags___parent___internal___owner'
  | 'tags___parent___internal___type'
  | 'tags___children'
  | 'tags___children___id'
  | 'tags___children___parent___id'
  | 'tags___children___parent___children'
  | 'tags___children___children'
  | 'tags___children___children___id'
  | 'tags___children___children___children'
  | 'tags___children___internal___content'
  | 'tags___children___internal___contentDigest'
  | 'tags___children___internal___description'
  | 'tags___children___internal___fieldOwners'
  | 'tags___children___internal___ignoreType'
  | 'tags___children___internal___mediaType'
  | 'tags___children___internal___owner'
  | 'tags___children___internal___type'
  | 'tags___internal___content'
  | 'tags___internal___contentDigest'
  | 'tags___internal___description'
  | 'tags___internal___fieldOwners'
  | 'tags___internal___ignoreType'
  | 'tags___internal___mediaType'
  | 'tags___internal___owner'
  | 'tags___internal___type'
  | 'tags___title'
  | 'tags___slug'
  | 'tags___post'
  | 'tags___post___id'
  | 'tags___post___parent___id'
  | 'tags___post___parent___children'
  | 'tags___post___children'
  | 'tags___post___children___id'
  | 'tags___post___children___children'
  | 'tags___post___internal___content'
  | 'tags___post___internal___contentDigest'
  | 'tags___post___internal___description'
  | 'tags___post___internal___fieldOwners'
  | 'tags___post___internal___ignoreType'
  | 'tags___post___internal___mediaType'
  | 'tags___post___internal___owner'
  | 'tags___post___internal___type'
  | 'tags___post___title'
  | 'tags___post___slug'
  | 'tags___post___publishDate'
  | 'tags___post___heroImage___id'
  | 'tags___post___heroImage___children'
  | 'tags___post___heroImage___contentful_id'
  | 'tags___post___heroImage___title'
  | 'tags___post___heroImage___description'
  | 'tags___post___heroImage___node_locale'
  | 'tags___post___tags'
  | 'tags___post___tags___id'
  | 'tags___post___tags___children'
  | 'tags___post___tags___title'
  | 'tags___post___tags___slug'
  | 'tags___post___tags___post'
  | 'tags___post___tags___contentful_id'
  | 'tags___post___tags___createdAt'
  | 'tags___post___tags___updatedAt'
  | 'tags___post___tags___node_locale'
  | 'tags___post___body___id'
  | 'tags___post___body___children'
  | 'tags___post___body___body'
  | 'tags___post___contentful_id'
  | 'tags___post___createdAt'
  | 'tags___post___updatedAt'
  | 'tags___post___node_locale'
  | 'tags___post___metaDescription___id'
  | 'tags___post___metaDescription___children'
  | 'tags___post___metaDescription___metaDescription'
  | 'tags___contentful_id'
  | 'tags___createdAt'
  | 'tags___updatedAt'
  | 'tags___node_locale'
  | 'body___id'
  | 'body___parent___id'
  | 'body___parent___parent___id'
  | 'body___parent___parent___children'
  | 'body___parent___children'
  | 'body___parent___children___id'
  | 'body___parent___children___children'
  | 'body___parent___internal___content'
  | 'body___parent___internal___contentDigest'
  | 'body___parent___internal___description'
  | 'body___parent___internal___fieldOwners'
  | 'body___parent___internal___ignoreType'
  | 'body___parent___internal___mediaType'
  | 'body___parent___internal___owner'
  | 'body___parent___internal___type'
  | 'body___children'
  | 'body___children___id'
  | 'body___children___parent___id'
  | 'body___children___parent___children'
  | 'body___children___children'
  | 'body___children___children___id'
  | 'body___children___children___children'
  | 'body___children___internal___content'
  | 'body___children___internal___contentDigest'
  | 'body___children___internal___description'
  | 'body___children___internal___fieldOwners'
  | 'body___children___internal___ignoreType'
  | 'body___children___internal___mediaType'
  | 'body___children___internal___owner'
  | 'body___children___internal___type'
  | 'body___internal___content'
  | 'body___internal___contentDigest'
  | 'body___internal___description'
  | 'body___internal___fieldOwners'
  | 'body___internal___ignoreType'
  | 'body___internal___mediaType'
  | 'body___internal___owner'
  | 'body___internal___type'
  | 'body___body'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'node_locale'
  | 'metaDescription___id'
  | 'metaDescription___parent___id'
  | 'metaDescription___parent___parent___id'
  | 'metaDescription___parent___parent___children'
  | 'metaDescription___parent___children'
  | 'metaDescription___parent___children___id'
  | 'metaDescription___parent___children___children'
  | 'metaDescription___parent___internal___content'
  | 'metaDescription___parent___internal___contentDigest'
  | 'metaDescription___parent___internal___description'
  | 'metaDescription___parent___internal___fieldOwners'
  | 'metaDescription___parent___internal___ignoreType'
  | 'metaDescription___parent___internal___mediaType'
  | 'metaDescription___parent___internal___owner'
  | 'metaDescription___parent___internal___type'
  | 'metaDescription___children'
  | 'metaDescription___children___id'
  | 'metaDescription___children___parent___id'
  | 'metaDescription___children___parent___children'
  | 'metaDescription___children___children'
  | 'metaDescription___children___children___id'
  | 'metaDescription___children___children___children'
  | 'metaDescription___children___internal___content'
  | 'metaDescription___children___internal___contentDigest'
  | 'metaDescription___children___internal___description'
  | 'metaDescription___children___internal___fieldOwners'
  | 'metaDescription___children___internal___ignoreType'
  | 'metaDescription___children___internal___mediaType'
  | 'metaDescription___children___internal___owner'
  | 'metaDescription___children___internal___type'
  | 'metaDescription___internal___content'
  | 'metaDescription___internal___contentDigest'
  | 'metaDescription___internal___description'
  | 'metaDescription___internal___fieldOwners'
  | 'metaDescription___internal___ignoreType'
  | 'metaDescription___internal___mediaType'
  | 'metaDescription___internal___owner'
  | 'metaDescription___internal___type'
  | 'metaDescription___metaDescription'

export type ContentfulPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  publishDate?: Maybe<DateQueryOperatorInput>
  heroImage?: Maybe<ContentfulAssetFilterInput>
  tags?: Maybe<ContentfulTagFilterListInput>
  body?: Maybe<ContentfulPostBodyTextNodeFilterInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  metaDescription?: Maybe<ContentfulPostMetaDescriptionTextNodeFilterInput>
}

export type ContentfulPostFilterListInput = {
  elemMatch?: Maybe<ContentfulPostFilterInput>
}

export type ContentfulPostGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPostEdge>
  nodes: Array<ContentfulPost>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPostMetaDescriptionTextNode = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  metaDescription?: Maybe<Scalars['String']>
  childMarkdownRemark?: Maybe<MarkdownRemark>
}

export type ContentfulPostMetaDescriptionTextNodeConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPostMetaDescriptionTextNodeEdge>
  nodes: Array<ContentfulPostMetaDescriptionTextNode>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulPostMetaDescriptionTextNodeGroupConnection>
}

export type ContentfulPostMetaDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulPostMetaDescriptionTextNodeFieldsEnum
}

export type ContentfulPostMetaDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulPostMetaDescriptionTextNodeFieldsEnum
}

export type ContentfulPostMetaDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulPostMetaDescriptionTextNode>
  node: ContentfulPostMetaDescriptionTextNode
  previous?: Maybe<ContentfulPostMetaDescriptionTextNode>
}

export type ContentfulPostMetaDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'metaDescription'

export type ContentfulPostMetaDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  metaDescription?: Maybe<StringQueryOperatorInput>
}

export type ContentfulPostMetaDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulPostMetaDescriptionTextNodeEdge>
  nodes: Array<ContentfulPostMetaDescriptionTextNode>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPostMetaDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostMetaDescriptionTextNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  src?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
}

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
}

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  srcSet?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
}

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
}

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
  srcSet?: Maybe<Scalars['String']>
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
}

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTag = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  post?: Maybe<Array<Maybe<ContentfulPost>>>
  contentful_id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  node_locale?: Maybe<Scalars['String']>
}

export type ContentfulTagCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulTagUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulTagConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulTagEdge>
  nodes: Array<ContentfulTag>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulTagGroupConnection>
}

export type ContentfulTagConnectionDistinctArgs = {
  field: ContentfulTagFieldsEnum
}

export type ContentfulTagConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulTagFieldsEnum
}

export type ContentfulTagEdge = {
  next?: Maybe<ContentfulTag>
  node: ContentfulTag
  previous?: Maybe<ContentfulTag>
}

export type ContentfulTagFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'slug'
  | 'post'
  | 'post___id'
  | 'post___parent___id'
  | 'post___parent___parent___id'
  | 'post___parent___parent___children'
  | 'post___parent___children'
  | 'post___parent___children___id'
  | 'post___parent___children___children'
  | 'post___parent___internal___content'
  | 'post___parent___internal___contentDigest'
  | 'post___parent___internal___description'
  | 'post___parent___internal___fieldOwners'
  | 'post___parent___internal___ignoreType'
  | 'post___parent___internal___mediaType'
  | 'post___parent___internal___owner'
  | 'post___parent___internal___type'
  | 'post___children'
  | 'post___children___id'
  | 'post___children___parent___id'
  | 'post___children___parent___children'
  | 'post___children___children'
  | 'post___children___children___id'
  | 'post___children___children___children'
  | 'post___children___internal___content'
  | 'post___children___internal___contentDigest'
  | 'post___children___internal___description'
  | 'post___children___internal___fieldOwners'
  | 'post___children___internal___ignoreType'
  | 'post___children___internal___mediaType'
  | 'post___children___internal___owner'
  | 'post___children___internal___type'
  | 'post___internal___content'
  | 'post___internal___contentDigest'
  | 'post___internal___description'
  | 'post___internal___fieldOwners'
  | 'post___internal___ignoreType'
  | 'post___internal___mediaType'
  | 'post___internal___owner'
  | 'post___internal___type'
  | 'post___title'
  | 'post___slug'
  | 'post___publishDate'
  | 'post___heroImage___id'
  | 'post___heroImage___parent___id'
  | 'post___heroImage___parent___children'
  | 'post___heroImage___children'
  | 'post___heroImage___children___id'
  | 'post___heroImage___children___children'
  | 'post___heroImage___internal___content'
  | 'post___heroImage___internal___contentDigest'
  | 'post___heroImage___internal___description'
  | 'post___heroImage___internal___fieldOwners'
  | 'post___heroImage___internal___ignoreType'
  | 'post___heroImage___internal___mediaType'
  | 'post___heroImage___internal___owner'
  | 'post___heroImage___internal___type'
  | 'post___heroImage___contentful_id'
  | 'post___heroImage___file___url'
  | 'post___heroImage___file___fileName'
  | 'post___heroImage___file___contentType'
  | 'post___heroImage___title'
  | 'post___heroImage___description'
  | 'post___heroImage___node_locale'
  | 'post___heroImage___fixed___base64'
  | 'post___heroImage___fixed___tracedSVG'
  | 'post___heroImage___fixed___aspectRatio'
  | 'post___heroImage___fixed___width'
  | 'post___heroImage___fixed___height'
  | 'post___heroImage___fixed___src'
  | 'post___heroImage___fixed___srcSet'
  | 'post___heroImage___fixed___srcWebp'
  | 'post___heroImage___fixed___srcSetWebp'
  | 'post___heroImage___resolutions___base64'
  | 'post___heroImage___resolutions___tracedSVG'
  | 'post___heroImage___resolutions___aspectRatio'
  | 'post___heroImage___resolutions___width'
  | 'post___heroImage___resolutions___height'
  | 'post___heroImage___resolutions___src'
  | 'post___heroImage___resolutions___srcSet'
  | 'post___heroImage___resolutions___srcWebp'
  | 'post___heroImage___resolutions___srcSetWebp'
  | 'post___heroImage___fluid___base64'
  | 'post___heroImage___fluid___tracedSVG'
  | 'post___heroImage___fluid___aspectRatio'
  | 'post___heroImage___fluid___src'
  | 'post___heroImage___fluid___srcSet'
  | 'post___heroImage___fluid___srcWebp'
  | 'post___heroImage___fluid___srcSetWebp'
  | 'post___heroImage___fluid___sizes'
  | 'post___heroImage___sizes___base64'
  | 'post___heroImage___sizes___tracedSVG'
  | 'post___heroImage___sizes___aspectRatio'
  | 'post___heroImage___sizes___src'
  | 'post___heroImage___sizes___srcSet'
  | 'post___heroImage___sizes___srcWebp'
  | 'post___heroImage___sizes___srcSetWebp'
  | 'post___heroImage___sizes___sizes'
  | 'post___heroImage___resize___base64'
  | 'post___heroImage___resize___tracedSVG'
  | 'post___heroImage___resize___src'
  | 'post___heroImage___resize___width'
  | 'post___heroImage___resize___height'
  | 'post___heroImage___resize___aspectRatio'
  | 'post___tags'
  | 'post___tags___id'
  | 'post___tags___parent___id'
  | 'post___tags___parent___children'
  | 'post___tags___children'
  | 'post___tags___children___id'
  | 'post___tags___children___children'
  | 'post___tags___internal___content'
  | 'post___tags___internal___contentDigest'
  | 'post___tags___internal___description'
  | 'post___tags___internal___fieldOwners'
  | 'post___tags___internal___ignoreType'
  | 'post___tags___internal___mediaType'
  | 'post___tags___internal___owner'
  | 'post___tags___internal___type'
  | 'post___tags___title'
  | 'post___tags___slug'
  | 'post___tags___post'
  | 'post___tags___post___id'
  | 'post___tags___post___children'
  | 'post___tags___post___title'
  | 'post___tags___post___slug'
  | 'post___tags___post___publishDate'
  | 'post___tags___post___tags'
  | 'post___tags___post___contentful_id'
  | 'post___tags___post___createdAt'
  | 'post___tags___post___updatedAt'
  | 'post___tags___post___node_locale'
  | 'post___tags___contentful_id'
  | 'post___tags___createdAt'
  | 'post___tags___updatedAt'
  | 'post___tags___node_locale'
  | 'post___body___id'
  | 'post___body___parent___id'
  | 'post___body___parent___children'
  | 'post___body___children'
  | 'post___body___children___id'
  | 'post___body___children___children'
  | 'post___body___internal___content'
  | 'post___body___internal___contentDigest'
  | 'post___body___internal___description'
  | 'post___body___internal___fieldOwners'
  | 'post___body___internal___ignoreType'
  | 'post___body___internal___mediaType'
  | 'post___body___internal___owner'
  | 'post___body___internal___type'
  | 'post___body___body'
  | 'post___contentful_id'
  | 'post___createdAt'
  | 'post___updatedAt'
  | 'post___node_locale'
  | 'post___metaDescription___id'
  | 'post___metaDescription___parent___id'
  | 'post___metaDescription___parent___children'
  | 'post___metaDescription___children'
  | 'post___metaDescription___children___id'
  | 'post___metaDescription___children___children'
  | 'post___metaDescription___internal___content'
  | 'post___metaDescription___internal___contentDigest'
  | 'post___metaDescription___internal___description'
  | 'post___metaDescription___internal___fieldOwners'
  | 'post___metaDescription___internal___ignoreType'
  | 'post___metaDescription___internal___mediaType'
  | 'post___metaDescription___internal___owner'
  | 'post___metaDescription___internal___type'
  | 'post___metaDescription___metaDescription'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'node_locale'

export type ContentfulTagFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  post?: Maybe<ContentfulPostFilterListInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTagFilterListInput = {
  elemMatch?: Maybe<ContentfulTagFilterInput>
}

export type ContentfulTagGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ContentfulTagEdge>
  nodes: Array<ContentfulTag>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulTagSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTagFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type ExcerptFormats = 'PLAIN' | 'HTML'

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /** Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE'

export type Internal = {
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  ne?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
}

export type MarkdownHeading = {
  value?: Maybe<Scalars['String']>
  depth?: Maybe<Scalars['Int']>
}

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>
  depth?: Maybe<IntQueryOperatorInput>
}

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>
}

export type MarkdownRemark = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>
  excerpt?: Maybe<Scalars['String']>
  rawMarkdownBody?: Maybe<Scalars['String']>
  html?: Maybe<Scalars['String']>
  htmlAst?: Maybe<Scalars['JSON']>
  excerptAst?: Maybe<Scalars['JSON']>
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>
  timeToRead?: Maybe<Scalars['Int']>
  tableOfContents?: Maybe<Scalars['String']>
  wordCount?: Maybe<WordCount>
}

export type MarkdownRemarkExcerptArgs = {
  pruneLength: Scalars['Int']
  truncate: Scalars['Boolean']
  format: ExcerptFormats
}

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength: Scalars['Int']
  truncate: Scalars['Boolean']
}

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<HeadingLevels>
}

export type MarkdownRemarkTableOfContentsArgs = {
  pathToSlugField: Scalars['String']
  maxDepth?: Maybe<Scalars['Int']>
  heading?: Maybe<Scalars['String']>
}

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int']
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<MarkdownRemarkGroupConnection>
}

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>
  node: MarkdownRemark
  previous?: Maybe<MarkdownRemark>
}

export type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'frontmatter___title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  wordCount?: Maybe<WordCountFilterInput>
}

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>
}

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
}

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  hasNextPage: Scalars['Boolean']
}

export type Query = {
  sitePage?: Maybe<SitePage>
  allSitePage?: Maybe<SitePageConnection>
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin?: Maybe<SitePluginConnection>
  site?: Maybe<Site>
  allSite?: Maybe<SiteConnection>
  contentfulContentType?: Maybe<ContentfulContentType>
  allContentfulContentType?: Maybe<ContentfulContentTypeConnection>
  contentfulPage?: Maybe<ContentfulPage>
  allContentfulPage?: Maybe<ContentfulPageConnection>
  contentfulPageBodyTextNode?: Maybe<ContentfulPageBodyTextNode>
  allContentfulPageBodyTextNode?: Maybe<ContentfulPageBodyTextNodeConnection>
  contentfulPageMetaDescriptionTextNode?: Maybe<
    ContentfulPageMetaDescriptionTextNode
  >
  allContentfulPageMetaDescriptionTextNode?: Maybe<
    ContentfulPageMetaDescriptionTextNodeConnection
  >
  contentfulTag?: Maybe<ContentfulTag>
  allContentfulTag?: Maybe<ContentfulTagConnection>
  contentfulPost?: Maybe<ContentfulPost>
  allContentfulPost?: Maybe<ContentfulPostConnection>
  contentfulPostBodyTextNode?: Maybe<ContentfulPostBodyTextNode>
  allContentfulPostBodyTextNode?: Maybe<ContentfulPostBodyTextNodeConnection>
  contentfulPostMetaDescriptionTextNode?: Maybe<
    ContentfulPostMetaDescriptionTextNode
  >
  allContentfulPostMetaDescriptionTextNode?: Maybe<
    ContentfulPostMetaDescriptionTextNodeConnection
  >
  contentfulAsset?: Maybe<ContentfulAsset>
  allContentfulAsset?: Maybe<ContentfulAssetConnection>
  markdownRemark?: Maybe<MarkdownRemark>
  allMarkdownRemark?: Maybe<MarkdownRemarkConnection>
}

export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  jsonName?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<DateQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  displayField?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
}

export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>
  sort?: Maybe<ContentfulContentTypeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulPageArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  body?: Maybe<ContentfulPageBodyTextNodeFilterInput>
  metaDescription?: Maybe<ContentfulPageMetaDescriptionTextNodeFilterInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
}

export type QueryAllContentfulPageArgs = {
  filter?: Maybe<ContentfulPageFilterInput>
  sort?: Maybe<ContentfulPageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulPageBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  body?: Maybe<StringQueryOperatorInput>
}

export type QueryAllContentfulPageBodyTextNodeArgs = {
  filter?: Maybe<ContentfulPageBodyTextNodeFilterInput>
  sort?: Maybe<ContentfulPageBodyTextNodeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulPageMetaDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  metaDescription?: Maybe<StringQueryOperatorInput>
}

export type QueryAllContentfulPageMetaDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulPageMetaDescriptionTextNodeFilterInput>
  sort?: Maybe<ContentfulPageMetaDescriptionTextNodeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulTagArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  post?: Maybe<ContentfulPostFilterListInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
}

export type QueryAllContentfulTagArgs = {
  filter?: Maybe<ContentfulTagFilterInput>
  sort?: Maybe<ContentfulTagSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulPostArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  publishDate?: Maybe<DateQueryOperatorInput>
  heroImage?: Maybe<ContentfulAssetFilterInput>
  tags?: Maybe<ContentfulTagFilterListInput>
  body?: Maybe<ContentfulPostBodyTextNodeFilterInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  metaDescription?: Maybe<ContentfulPostMetaDescriptionTextNodeFilterInput>
}

export type QueryAllContentfulPostArgs = {
  filter?: Maybe<ContentfulPostFilterInput>
  sort?: Maybe<ContentfulPostSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulPostBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  body?: Maybe<StringQueryOperatorInput>
}

export type QueryAllContentfulPostBodyTextNodeArgs = {
  filter?: Maybe<ContentfulPostBodyTextNodeFilterInput>
  sort?: Maybe<ContentfulPostBodyTextNodeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulPostMetaDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  metaDescription?: Maybe<StringQueryOperatorInput>
}

export type QueryAllContentfulPostMetaDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulPostMetaDescriptionTextNodeFilterInput>
  sort?: Maybe<ContentfulPostMetaDescriptionTextNodeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  file?: Maybe<ContentfulAssetFileFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  fixed?: Maybe<ContentfulFixedFilterInput>
  resolutions?: Maybe<ContentfulResolutionsFilterInput>
  fluid?: Maybe<ContentfulFluidFilterInput>
  sizes?: Maybe<ContentfulSizesFilterInput>
  resize?: Maybe<ContentfulResizeFilterInput>
}

export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>
  sort?: Maybe<ContentfulAssetSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  wordCount?: Maybe<WordCountFilterInput>
}

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>
  sort?: Maybe<MarkdownRemarkSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Date']>
  host?: Maybe<Scalars['String']>
  pathPrefix?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  buildTime?: Maybe<Scalars['Date']>
}

export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export type SiteFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___rssMetadata___site_url'
  | 'siteMetadata___rssMetadata___feed_url'
  | 'siteMetadata___rssMetadata___title'
  | 'siteMetadata___rssMetadata___description'
  | 'siteMetadata___rssMetadata___image_url'
  | 'siteMetadata___rssMetadata___author'
  | 'siteMetadata___rssMetadata___copyright'
  | 'port'
  | 'host'
  | 'pathPrefix'
  | 'polyfill'
  | 'buildTime'

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<DateQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  path?: Maybe<Scalars['String']>
  jsonName?: Maybe<Scalars['String']>
  internalComponentName?: Maybe<Scalars['String']>
  component?: Maybe<Scalars['String']>
  componentChunkName?: Maybe<Scalars['String']>
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
  componentPath?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  numPages?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
  slug?: Maybe<Scalars['String']>
  prev?: Maybe<SitePageContextPrev>
  next?: Maybe<SitePageContextNext>
}

export type SitePageContextFilterInput = {
  limit?: Maybe<IntQueryOperatorInput>
  skip?: Maybe<IntQueryOperatorInput>
  numPages?: Maybe<IntQueryOperatorInput>
  currentPage?: Maybe<IntQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  prev?: Maybe<SitePageContextPrevFilterInput>
  next?: Maybe<SitePageContextNextFilterInput>
}

export type SitePageContextNext = {
  slug?: Maybe<Scalars['String']>
  publishDate?: Maybe<Scalars['Date']>
}

export type SitePageContextNextPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SitePageContextNextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>
  publishDate?: Maybe<DateQueryOperatorInput>
}

export type SitePageContextPrev = {
  slug?: Maybe<Scalars['String']>
  publishDate?: Maybe<Scalars['Date']>
}

export type SitePageContextPrevPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SitePageContextPrevFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>
  publishDate?: Maybe<DateQueryOperatorInput>
}

export type SitePageEdge = {
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export type SitePageFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'path'
  | 'jsonName'
  | 'internalComponentName'
  | 'component'
  | 'componentChunkName'
  | 'isCreatedByStatefulCreatePages'
  | 'context___limit'
  | 'context___skip'
  | 'context___numPages'
  | 'context___currentPage'
  | 'context___slug'
  | 'context___prev___slug'
  | 'context___prev___publishDate'
  | 'context___next___slug'
  | 'context___next___publishDate'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___plugins'
  | 'pluginCreator___pluginOptions___plugins___resolve'
  | 'pluginCreator___pluginOptions___plugins___id'
  | 'pluginCreator___pluginOptions___plugins___name'
  | 'pluginCreator___pluginOptions___plugins___version'
  | 'pluginCreator___pluginOptions___plugins___browserAPIs'
  | 'pluginCreator___pluginOptions___plugins___ssrAPIs'
  | 'pluginCreator___pluginOptions___plugins___pluginFilepath'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___siteUrl'
  | 'pluginCreator___pluginOptions___maxWidth'
  | 'pluginCreator___pluginOptions___backgroundColor'
  | 'pluginCreator___pluginOptions___linkImagesToOriginal'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___environment'
  | 'pluginCreator___pluginOptions___head'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___description'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___feeds'
  | 'pluginCreator___pluginOptions___feeds___query'
  | 'pluginCreator___pluginOptions___feeds___output'
  | 'pluginCreator___pluginOptions___color'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath'

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  jsonName?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___plugins'
  | 'pluginOptions___plugins___resolve'
  | 'pluginOptions___plugins___id'
  | 'pluginOptions___plugins___name'
  | 'pluginOptions___plugins___version'
  | 'pluginOptions___plugins___pluginOptions___maxWidth'
  | 'pluginOptions___plugins___pluginOptions___backgroundColor'
  | 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___plugins___browserAPIs'
  | 'pluginOptions___plugins___ssrAPIs'
  | 'pluginOptions___plugins___pluginFilepath'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___siteUrl'
  | 'pluginOptions___maxWidth'
  | 'pluginOptions___backgroundColor'
  | 'pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___host'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___environment'
  | 'pluginOptions___head'
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___description'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___query'
  | 'pluginOptions___feeds'
  | 'pluginOptions___feeds___query'
  | 'pluginOptions___feeds___output'
  | 'pluginOptions___color'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords'

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>
  isTSX?: Maybe<Scalars['Boolean']>
  jsxPragma?: Maybe<Scalars['String']>
  allExtensions?: Maybe<Scalars['Boolean']>
  siteUrl?: Maybe<Scalars['String']>
  maxWidth?: Maybe<Scalars['Int']>
  backgroundColor?: Maybe<Scalars['String']>
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>
  host?: Maybe<Scalars['String']>
  spaceId?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  environment?: Maybe<Scalars['String']>
  head?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  short_name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  start_url?: Maybe<Scalars['String']>
  background_color?: Maybe<Scalars['String']>
  theme_color?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  query?: Maybe<Scalars['String']>
  feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>
  color?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  pathCheck?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsFeeds = {
  query?: Maybe<Scalars['String']>
  output?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsFeedsFilterInput = {
  query?: Maybe<StringQueryOperatorInput>
  output?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsFeedsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>
}

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>
  isTSX?: Maybe<BooleanQueryOperatorInput>
  jsxPragma?: Maybe<StringQueryOperatorInput>
  allExtensions?: Maybe<BooleanQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
  maxWidth?: Maybe<IntQueryOperatorInput>
  backgroundColor?: Maybe<StringQueryOperatorInput>
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  accessToken?: Maybe<StringQueryOperatorInput>
  environment?: Maybe<StringQueryOperatorInput>
  head?: Maybe<BooleanQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  short_name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  background_color?: Maybe<StringQueryOperatorInput>
  theme_color?: Maybe<StringQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  query?: Maybe<StringQueryOperatorInput>
  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>
  color?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>
}

export type SitePluginPluginOptionsPluginsPluginOptions = {
  maxWidth?: Maybe<Scalars['Int']>
  backgroundColor?: Maybe<Scalars['String']>
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>
  backgroundColor?: Maybe<StringQueryOperatorInput>
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  siteUrl?: Maybe<Scalars['String']>
  rssMetadata?: Maybe<SiteSiteMetadataRssMetadata>
}

export type SiteSiteMetadataFilterInput = {
  siteUrl?: Maybe<StringQueryOperatorInput>
  rssMetadata?: Maybe<SiteSiteMetadataRssMetadataFilterInput>
}

export type SiteSiteMetadataRssMetadata = {
  site_url?: Maybe<Scalars['String']>
  feed_url?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  image_url?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataRssMetadataFilterInput = {
  site_url?: Maybe<StringQueryOperatorInput>
  feed_url?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  image_url?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  copyright?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SortOrderEnum = 'ASC' | 'DESC'

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type WordCount = {
  paragraphs?: Maybe<Scalars['Int']>
  sentences?: Maybe<Scalars['Int']>
  words?: Maybe<Scalars['Int']>
}

export type WordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>
  sentences?: Maybe<IntQueryOperatorInput>
  words?: Maybe<IntQueryOperatorInput>
}
export type IndexTemplateQueryVariables = {
  skip: Scalars['Int']
  limit: Scalars['Int']
}

export type IndexTemplateQuery = {
  allContentfulPost: Maybe<{
    edges: Array<{
      node: Pick<ContentfulPost, 'title' | 'id' | 'slug' | 'publishDate'> & {
        heroImage: Maybe<
          Pick<ContentfulAsset, 'title'> & {
            fluid: Maybe<
              Pick<
                ContentfulFluid,
                | 'aspectRatio'
                | 'src'
                | 'srcSet'
                | 'srcWebp'
                | 'srcSetWebp'
                | 'sizes'
              >
            >
          }
        >
        body: Maybe<{
          childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html' | 'excerpt'>>
        }>
      }
    }>
  }>
}

export type PageTemplateQueryVariables = {
  slug: Scalars['String']
}

export type PageTemplateQuery = {
  contentfulPage: Maybe<
    Pick<ContentfulPage, 'title' | 'slug'> & {
      metaDescription: Maybe<{internal: Pick<Internal, 'content'>}>
      body: Maybe<{
        childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html' | 'excerpt'>>
      }>
    }
  >
}

export type PostTemplateQueryVariables = {
  slug: Scalars['String']
}

export type PostTemplateQuery = {
  contentfulPost: Maybe<
    Pick<ContentfulPost, 'title' | 'slug' | 'publishDate'> & {
      publishDateISO: ContentfulPost['publishDate']
    } & {
      metaDescription: Maybe<{internal: Pick<Internal, 'content'>}>
      tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'title' | 'id' | 'slug'>>>>
      heroImage: Maybe<
        Pick<ContentfulAsset, 'title'> & {
          fluid: Maybe<
            Pick<
              ContentfulFluid,
              | 'aspectRatio'
              | 'src'
              | 'srcSet'
              | 'srcWebp'
              | 'srcSetWebp'
              | 'sizes'
            >
          >
          ogimg: Maybe<Pick<ContentfulResize, 'src' | 'width' | 'height'>>
        }
      >
      body: Maybe<{
        childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html' | 'excerpt'>>
      }>
    }
  >
}

export type TagTemplateQueryVariables = {
  slug: Scalars['String']
}

export type TagTemplateQuery = {
  contentfulTag: Maybe<
    Pick<ContentfulTag, 'title' | 'id' | 'slug'> & {
      post: Maybe<
        Array<
          Maybe<
            Pick<ContentfulPost, 'id' | 'title' | 'slug' | 'publishDate'> & {
              publishDateISO: ContentfulPost['publishDate']
            } & {
              heroImage: Maybe<
                Pick<ContentfulAsset, 'title'> & {
                  fluid: Maybe<
                    Pick<
                      ContentfulFluid,
                      | 'aspectRatio'
                      | 'src'
                      | 'srcSet'
                      | 'srcWebp'
                      | 'srcSetWebp'
                      | 'sizes'
                    >
                  >
                }
              >
              body: Maybe<{
                childMarkdownRemark: Maybe<
                  Pick<MarkdownRemark, 'html' | 'excerpt'>
                >
              }>
            }
          >
        >
      >
    }
  >
}
