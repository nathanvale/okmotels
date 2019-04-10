type Maybe<T> = T | null
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
  readonly eq?: Maybe<Scalars['Boolean']>
  readonly ne?: Maybe<Scalars['Boolean']>
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>
}

export type ContentfulAsset = Node & {
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly contentful_id?: Maybe<Scalars['String']>
  readonly file?: Maybe<ContentfulAssetFile>
  readonly title?: Maybe<Scalars['String']>
  readonly description?: Maybe<Scalars['String']>
  readonly node_locale?: Maybe<Scalars['String']>
  readonly fixed?: Maybe<ContentfulFixed>
  readonly resolutions?: Maybe<ContentfulResolutions>
  readonly fluid?: Maybe<ContentfulFluid>
  readonly sizes?: Maybe<ContentfulSizes>
  readonly resize?: Maybe<ContentfulResize>
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
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulAssetEdge>
  readonly nodes: ReadonlyArray<ContentfulAsset>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>
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
  readonly next?: Maybe<ContentfulAsset>
  readonly node: ContentfulAsset
  readonly previous?: Maybe<ContentfulAsset>
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
  readonly url?: Maybe<Scalars['String']>
  readonly details?: Maybe<ContentfulAssetFileDetails>
  readonly fileName?: Maybe<Scalars['String']>
  readonly contentType?: Maybe<Scalars['String']>
}

export type ContentfulAssetFileDetails = {
  readonly size?: Maybe<Scalars['Int']>
  readonly image?: Maybe<ContentfulAssetFileDetailsImage>
}

export type ContentfulAssetFileDetailsFilterInput = {
  readonly size?: Maybe<IntQueryOperatorInput>
  readonly image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>
}

export type ContentfulAssetFileDetailsImage = {
  readonly width?: Maybe<Scalars['Int']>
  readonly height?: Maybe<Scalars['Int']>
}

export type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width?: Maybe<IntQueryOperatorInput>
  readonly height?: Maybe<IntQueryOperatorInput>
}

export type ContentfulAssetFileFilterInput = {
  readonly url?: Maybe<StringQueryOperatorInput>
  readonly details?: Maybe<ContentfulAssetFileDetailsFilterInput>
  readonly fileName?: Maybe<StringQueryOperatorInput>
  readonly contentType?: Maybe<StringQueryOperatorInput>
}

export type ContentfulAssetFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
  readonly contentful_id?: Maybe<StringQueryOperatorInput>
  readonly file?: Maybe<ContentfulAssetFileFilterInput>
  readonly title?: Maybe<StringQueryOperatorInput>
  readonly description?: Maybe<StringQueryOperatorInput>
  readonly node_locale?: Maybe<StringQueryOperatorInput>
  readonly fixed?: Maybe<ContentfulFixedFilterInput>
  readonly resolutions?: Maybe<ContentfulResolutionsFilterInput>
  readonly fluid?: Maybe<ContentfulFluidFilterInput>
  readonly sizes?: Maybe<ContentfulSizesFilterInput>
  readonly resize?: Maybe<ContentfulResizeFilterInput>
}

export type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulAssetEdge>
  readonly nodes: ReadonlyArray<ContentfulAsset>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulAssetSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type ContentfulContentType = Node & {
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly name?: Maybe<Scalars['String']>
  readonly displayField?: Maybe<Scalars['String']>
  readonly description?: Maybe<Scalars['String']>
}

export type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>
  readonly nodes: ReadonlyArray<ContentfulContentType>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>
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
  readonly next?: Maybe<ContentfulContentType>
  readonly node: ContentfulContentType
  readonly previous?: Maybe<ContentfulContentType>
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
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
  readonly name?: Maybe<StringQueryOperatorInput>
  readonly displayField?: Maybe<StringQueryOperatorInput>
  readonly description?: Maybe<StringQueryOperatorInput>
}

export type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>
  readonly nodes: ReadonlyArray<ContentfulContentType>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulContentTypeSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type ContentfulFixed = {
  readonly base64?: Maybe<Scalars['String']>
  readonly tracedSVG?: Maybe<Scalars['String']>
  readonly aspectRatio?: Maybe<Scalars['Float']>
  readonly width?: Maybe<Scalars['Float']>
  readonly height?: Maybe<Scalars['Float']>
  readonly src?: Maybe<Scalars['String']>
  readonly srcSet?: Maybe<Scalars['String']>
  readonly srcWebp?: Maybe<Scalars['String']>
  readonly srcSetWebp?: Maybe<Scalars['String']>
}

export type ContentfulFixedFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>
  readonly width?: Maybe<FloatQueryOperatorInput>
  readonly height?: Maybe<FloatQueryOperatorInput>
  readonly src?: Maybe<StringQueryOperatorInput>
  readonly srcSet?: Maybe<StringQueryOperatorInput>
  readonly srcWebp?: Maybe<StringQueryOperatorInput>
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>
}

export type ContentfulFluid = {
  readonly base64?: Maybe<Scalars['String']>
  readonly tracedSVG?: Maybe<Scalars['String']>
  readonly aspectRatio?: Maybe<Scalars['Float']>
  readonly src?: Maybe<Scalars['String']>
  readonly srcSet?: Maybe<Scalars['String']>
  readonly srcWebp?: Maybe<Scalars['String']>
  readonly srcSetWebp?: Maybe<Scalars['String']>
  readonly sizes?: Maybe<Scalars['String']>
}

export type ContentfulFluidFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>
  readonly src?: Maybe<StringQueryOperatorInput>
  readonly srcSet?: Maybe<StringQueryOperatorInput>
  readonly srcWebp?: Maybe<StringQueryOperatorInput>
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>
  readonly sizes?: Maybe<StringQueryOperatorInput>
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
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly title?: Maybe<Scalars['String']>
  readonly slug?: Maybe<Scalars['String']>
  readonly body?: Maybe<ContentfulPageBodyTextNode>
  readonly metaDescription?: Maybe<ContentfulPageMetaDescriptionTextNode>
  readonly contentful_id?: Maybe<Scalars['String']>
  readonly createdAt?: Maybe<Scalars['Date']>
  readonly updatedAt?: Maybe<Scalars['Date']>
  readonly node_locale?: Maybe<Scalars['String']>
  readonly childContentfulPageBodyTextNode?: Maybe<ContentfulPageBodyTextNode>
  readonly childContentfulPageMetaDescriptionTextNode?: Maybe<
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
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly body?: Maybe<Scalars['String']>
  readonly childMarkdownRemark?: Maybe<MarkdownRemark>
}

export type ContentfulPageBodyTextNodeConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulPageBodyTextNodeEdge>
  readonly nodes: ReadonlyArray<ContentfulPageBodyTextNode>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<ContentfulPageBodyTextNodeGroupConnection>
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
  readonly next?: Maybe<ContentfulPageBodyTextNode>
  readonly node: ContentfulPageBodyTextNode
  readonly previous?: Maybe<ContentfulPageBodyTextNode>
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
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
  readonly body?: Maybe<StringQueryOperatorInput>
}

export type ContentfulPageBodyTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulPageBodyTextNodeEdge>
  readonly nodes: ReadonlyArray<ContentfulPageBodyTextNode>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPageBodyTextNodeSortInput = {
  readonly fields?: Maybe<
    ReadonlyArray<Maybe<ContentfulPageBodyTextNodeFieldsEnum>>
  >
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type ContentfulPageConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulPageEdge>
  readonly nodes: ReadonlyArray<ContentfulPage>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<ContentfulPageGroupConnection>
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
  readonly next?: Maybe<ContentfulPage>
  readonly node: ContentfulPage
  readonly previous?: Maybe<ContentfulPage>
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
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
  readonly title?: Maybe<StringQueryOperatorInput>
  readonly slug?: Maybe<StringQueryOperatorInput>
  readonly body?: Maybe<ContentfulPageBodyTextNodeFilterInput>
  readonly metaDescription?: Maybe<
    ContentfulPageMetaDescriptionTextNodeFilterInput
  >
  readonly contentful_id?: Maybe<StringQueryOperatorInput>
  readonly createdAt?: Maybe<DateQueryOperatorInput>
  readonly updatedAt?: Maybe<DateQueryOperatorInput>
  readonly node_locale?: Maybe<StringQueryOperatorInput>
}

export type ContentfulPageGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulPageEdge>
  readonly nodes: ReadonlyArray<ContentfulPage>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPageMetaDescriptionTextNode = Node & {
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly metaDescription?: Maybe<Scalars['String']>
  readonly childMarkdownRemark?: Maybe<MarkdownRemark>
}

export type ContentfulPageMetaDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulPageMetaDescriptionTextNodeEdge>
  readonly nodes: ReadonlyArray<ContentfulPageMetaDescriptionTextNode>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<
    ContentfulPageMetaDescriptionTextNodeGroupConnection
  >
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
  readonly next?: Maybe<ContentfulPageMetaDescriptionTextNode>
  readonly node: ContentfulPageMetaDescriptionTextNode
  readonly previous?: Maybe<ContentfulPageMetaDescriptionTextNode>
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
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
  readonly metaDescription?: Maybe<StringQueryOperatorInput>
}

export type ContentfulPageMetaDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulPageMetaDescriptionTextNodeEdge>
  readonly nodes: ReadonlyArray<ContentfulPageMetaDescriptionTextNode>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPageMetaDescriptionTextNodeSortInput = {
  readonly fields?: Maybe<
    ReadonlyArray<Maybe<ContentfulPageMetaDescriptionTextNodeFieldsEnum>>
  >
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type ContentfulPageSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ContentfulPageFieldsEnum>>>
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type ContentfulPost = Node & {
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly title?: Maybe<Scalars['String']>
  readonly slug?: Maybe<Scalars['String']>
  readonly publishDate?: Maybe<Scalars['Date']>
  readonly heroImage?: Maybe<ContentfulAsset>
  readonly tags?: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>
  readonly body?: Maybe<ContentfulPostBodyTextNode>
  readonly contentful_id?: Maybe<Scalars['String']>
  readonly createdAt?: Maybe<Scalars['Date']>
  readonly updatedAt?: Maybe<Scalars['Date']>
  readonly node_locale?: Maybe<Scalars['String']>
  readonly metaDescription?: Maybe<ContentfulPostMetaDescriptionTextNode>
  readonly childContentfulPostBodyTextNode?: Maybe<ContentfulPostBodyTextNode>
  readonly childContentfulPostMetaDescriptionTextNode?: Maybe<
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
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly body?: Maybe<Scalars['String']>
  readonly childMarkdownRemark?: Maybe<MarkdownRemark>
}

export type ContentfulPostBodyTextNodeConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulPostBodyTextNodeEdge>
  readonly nodes: ReadonlyArray<ContentfulPostBodyTextNode>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<ContentfulPostBodyTextNodeGroupConnection>
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
  readonly next?: Maybe<ContentfulPostBodyTextNode>
  readonly node: ContentfulPostBodyTextNode
  readonly previous?: Maybe<ContentfulPostBodyTextNode>
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
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
  readonly body?: Maybe<StringQueryOperatorInput>
}

export type ContentfulPostBodyTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulPostBodyTextNodeEdge>
  readonly nodes: ReadonlyArray<ContentfulPostBodyTextNode>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPostBodyTextNodeSortInput = {
  readonly fields?: Maybe<
    ReadonlyArray<Maybe<ContentfulPostBodyTextNodeFieldsEnum>>
  >
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type ContentfulPostConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulPostEdge>
  readonly nodes: ReadonlyArray<ContentfulPost>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<ContentfulPostGroupConnection>
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
  readonly next?: Maybe<ContentfulPost>
  readonly node: ContentfulPost
  readonly previous?: Maybe<ContentfulPost>
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
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
  readonly title?: Maybe<StringQueryOperatorInput>
  readonly slug?: Maybe<StringQueryOperatorInput>
  readonly publishDate?: Maybe<DateQueryOperatorInput>
  readonly heroImage?: Maybe<ContentfulAssetFilterInput>
  readonly tags?: Maybe<ContentfulTagFilterListInput>
  readonly body?: Maybe<ContentfulPostBodyTextNodeFilterInput>
  readonly contentful_id?: Maybe<StringQueryOperatorInput>
  readonly createdAt?: Maybe<DateQueryOperatorInput>
  readonly updatedAt?: Maybe<DateQueryOperatorInput>
  readonly node_locale?: Maybe<StringQueryOperatorInput>
  readonly metaDescription?: Maybe<
    ContentfulPostMetaDescriptionTextNodeFilterInput
  >
}

export type ContentfulPostFilterListInput = {
  readonly elemMatch?: Maybe<ContentfulPostFilterInput>
}

export type ContentfulPostGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulPostEdge>
  readonly nodes: ReadonlyArray<ContentfulPost>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPostMetaDescriptionTextNode = Node & {
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly metaDescription?: Maybe<Scalars['String']>
  readonly childMarkdownRemark?: Maybe<MarkdownRemark>
}

export type ContentfulPostMetaDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulPostMetaDescriptionTextNodeEdge>
  readonly nodes: ReadonlyArray<ContentfulPostMetaDescriptionTextNode>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<
    ContentfulPostMetaDescriptionTextNodeGroupConnection
  >
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
  readonly next?: Maybe<ContentfulPostMetaDescriptionTextNode>
  readonly node: ContentfulPostMetaDescriptionTextNode
  readonly previous?: Maybe<ContentfulPostMetaDescriptionTextNode>
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
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
  readonly metaDescription?: Maybe<StringQueryOperatorInput>
}

export type ContentfulPostMetaDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulPostMetaDescriptionTextNodeEdge>
  readonly nodes: ReadonlyArray<ContentfulPostMetaDescriptionTextNode>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulPostMetaDescriptionTextNodeSortInput = {
  readonly fields?: Maybe<
    ReadonlyArray<Maybe<ContentfulPostMetaDescriptionTextNodeFieldsEnum>>
  >
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type ContentfulPostSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ContentfulPostFieldsEnum>>>
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type ContentfulResize = {
  readonly base64?: Maybe<Scalars['String']>
  readonly tracedSVG?: Maybe<Scalars['String']>
  readonly src?: Maybe<Scalars['String']>
  readonly width?: Maybe<Scalars['Int']>
  readonly height?: Maybe<Scalars['Int']>
  readonly aspectRatio?: Maybe<Scalars['Float']>
}

export type ContentfulResizeFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>
  readonly src?: Maybe<StringQueryOperatorInput>
  readonly width?: Maybe<IntQueryOperatorInput>
  readonly height?: Maybe<IntQueryOperatorInput>
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>
}

export type ContentfulResolutions = {
  readonly base64?: Maybe<Scalars['String']>
  readonly tracedSVG?: Maybe<Scalars['String']>
  readonly aspectRatio?: Maybe<Scalars['Float']>
  readonly width?: Maybe<Scalars['Float']>
  readonly height?: Maybe<Scalars['Float']>
  readonly src?: Maybe<Scalars['String']>
  readonly srcSet?: Maybe<Scalars['String']>
  readonly srcWebp?: Maybe<Scalars['String']>
  readonly srcSetWebp?: Maybe<Scalars['String']>
}

export type ContentfulResolutionsFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>
  readonly width?: Maybe<FloatQueryOperatorInput>
  readonly height?: Maybe<FloatQueryOperatorInput>
  readonly src?: Maybe<StringQueryOperatorInput>
  readonly srcSet?: Maybe<StringQueryOperatorInput>
  readonly srcWebp?: Maybe<StringQueryOperatorInput>
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>
}

export type ContentfulSizes = {
  readonly base64?: Maybe<Scalars['String']>
  readonly tracedSVG?: Maybe<Scalars['String']>
  readonly aspectRatio?: Maybe<Scalars['Float']>
  readonly src?: Maybe<Scalars['String']>
  readonly srcSet?: Maybe<Scalars['String']>
  readonly srcWebp?: Maybe<Scalars['String']>
  readonly srcSetWebp?: Maybe<Scalars['String']>
  readonly sizes?: Maybe<Scalars['String']>
}

export type ContentfulSizesFilterInput = {
  readonly base64?: Maybe<StringQueryOperatorInput>
  readonly tracedSVG?: Maybe<StringQueryOperatorInput>
  readonly aspectRatio?: Maybe<FloatQueryOperatorInput>
  readonly src?: Maybe<StringQueryOperatorInput>
  readonly srcSet?: Maybe<StringQueryOperatorInput>
  readonly srcWebp?: Maybe<StringQueryOperatorInput>
  readonly srcSetWebp?: Maybe<StringQueryOperatorInput>
  readonly sizes?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTag = Node & {
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly title?: Maybe<Scalars['String']>
  readonly slug?: Maybe<Scalars['String']>
  readonly post?: Maybe<ReadonlyArray<Maybe<ContentfulPost>>>
  readonly contentful_id?: Maybe<Scalars['String']>
  readonly createdAt?: Maybe<Scalars['Date']>
  readonly updatedAt?: Maybe<Scalars['Date']>
  readonly node_locale?: Maybe<Scalars['String']>
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
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulTagEdge>
  readonly nodes: ReadonlyArray<ContentfulTag>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<ContentfulTagGroupConnection>
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
  readonly next?: Maybe<ContentfulTag>
  readonly node: ContentfulTag
  readonly previous?: Maybe<ContentfulTag>
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
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
  readonly title?: Maybe<StringQueryOperatorInput>
  readonly slug?: Maybe<StringQueryOperatorInput>
  readonly post?: Maybe<ContentfulPostFilterListInput>
  readonly contentful_id?: Maybe<StringQueryOperatorInput>
  readonly createdAt?: Maybe<DateQueryOperatorInput>
  readonly updatedAt?: Maybe<DateQueryOperatorInput>
  readonly node_locale?: Maybe<StringQueryOperatorInput>
}

export type ContentfulTagFilterListInput = {
  readonly elemMatch?: Maybe<ContentfulTagFilterInput>
}

export type ContentfulTagGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<ContentfulTagEdge>
  readonly nodes: ReadonlyArray<ContentfulTag>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulTagSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<ContentfulTagFieldsEnum>>>
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type DateQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Date']>
  readonly ne?: Maybe<Scalars['Date']>
  readonly gt?: Maybe<Scalars['Date']>
  readonly gte?: Maybe<Scalars['Date']>
  readonly lt?: Maybe<Scalars['Date']>
  readonly lte?: Maybe<Scalars['Date']>
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>
}

export type ExcerptFormats = 'PLAIN' | 'HTML'

export type FloatQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Float']>
  readonly ne?: Maybe<Scalars['Float']>
  readonly gt?: Maybe<Scalars['Float']>
  readonly gte?: Maybe<Scalars['Float']>
  readonly lt?: Maybe<Scalars['Float']>
  readonly lte?: Maybe<Scalars['Float']>
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
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
  readonly content?: Maybe<Scalars['String']>
  readonly contentDigest: Scalars['String']
  readonly description?: Maybe<Scalars['String']>
  readonly fieldOwners?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly ignoreType?: Maybe<Scalars['Boolean']>
  readonly mediaType?: Maybe<Scalars['String']>
  readonly owner: Scalars['String']
  readonly type: Scalars['String']
}

export type InternalFilterInput = {
  readonly content?: Maybe<StringQueryOperatorInput>
  readonly contentDigest?: Maybe<StringQueryOperatorInput>
  readonly description?: Maybe<StringQueryOperatorInput>
  readonly fieldOwners?: Maybe<StringQueryOperatorInput>
  readonly ignoreType?: Maybe<BooleanQueryOperatorInput>
  readonly mediaType?: Maybe<StringQueryOperatorInput>
  readonly owner?: Maybe<StringQueryOperatorInput>
  readonly type?: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Int']>
  readonly ne?: Maybe<Scalars['Int']>
  readonly gt?: Maybe<Scalars['Int']>
  readonly gte?: Maybe<Scalars['Int']>
  readonly lt?: Maybe<Scalars['Int']>
  readonly lte?: Maybe<Scalars['Int']>
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
}

export type JsonQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['JSON']>
  readonly ne?: Maybe<Scalars['JSON']>
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>
  readonly regex?: Maybe<Scalars['JSON']>
  readonly glob?: Maybe<Scalars['JSON']>
}

export type MarkdownHeading = {
  readonly value?: Maybe<Scalars['String']>
  readonly depth?: Maybe<Scalars['Int']>
}

export type MarkdownHeadingFilterInput = {
  readonly value?: Maybe<StringQueryOperatorInput>
  readonly depth?: Maybe<IntQueryOperatorInput>
}

export type MarkdownHeadingFilterListInput = {
  readonly elemMatch?: Maybe<MarkdownHeadingFilterInput>
}

export type MarkdownRemark = Node & {
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly frontmatter?: Maybe<MarkdownRemarkFrontmatter>
  readonly excerpt?: Maybe<Scalars['String']>
  readonly rawMarkdownBody?: Maybe<Scalars['String']>
  readonly html?: Maybe<Scalars['String']>
  readonly htmlAst?: Maybe<Scalars['JSON']>
  readonly excerptAst?: Maybe<Scalars['JSON']>
  readonly headings?: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>
  readonly timeToRead?: Maybe<Scalars['Int']>
  readonly tableOfContents?: Maybe<Scalars['String']>
  readonly wordCount?: Maybe<WordCount>
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
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>
  readonly nodes: ReadonlyArray<MarkdownRemark>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>
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
  readonly next?: Maybe<MarkdownRemark>
  readonly node: MarkdownRemark
  readonly previous?: Maybe<MarkdownRemark>
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
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
  readonly frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>
  readonly excerpt?: Maybe<StringQueryOperatorInput>
  readonly rawMarkdownBody?: Maybe<StringQueryOperatorInput>
  readonly html?: Maybe<StringQueryOperatorInput>
  readonly htmlAst?: Maybe<JsonQueryOperatorInput>
  readonly excerptAst?: Maybe<JsonQueryOperatorInput>
  readonly headings?: Maybe<MarkdownHeadingFilterListInput>
  readonly timeToRead?: Maybe<IntQueryOperatorInput>
  readonly tableOfContents?: Maybe<StringQueryOperatorInput>
  readonly wordCount?: Maybe<WordCountFilterInput>
}

export type MarkdownRemarkFrontmatter = {
  readonly title?: Maybe<Scalars['String']>
}

export type MarkdownRemarkFrontmatterFilterInput = {
  readonly title?: Maybe<StringQueryOperatorInput>
}

export type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>
  readonly nodes: ReadonlyArray<MarkdownRemark>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue?: Maybe<Scalars['String']>
}

export type MarkdownRemarkSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

/** Node Interface */
export type Node = {
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
}

export type NodeFilterInput = {
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  readonly elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  readonly hasNextPage: Scalars['Boolean']
}

export type Query = {
  readonly sitePage?: Maybe<SitePage>
  readonly allSitePage?: Maybe<SitePageConnection>
  readonly sitePlugin?: Maybe<SitePlugin>
  readonly allSitePlugin?: Maybe<SitePluginConnection>
  readonly site?: Maybe<Site>
  readonly allSite?: Maybe<SiteConnection>
  readonly contentfulContentType?: Maybe<ContentfulContentType>
  readonly allContentfulContentType?: Maybe<ContentfulContentTypeConnection>
  readonly contentfulPage?: Maybe<ContentfulPage>
  readonly allContentfulPage?: Maybe<ContentfulPageConnection>
  readonly contentfulPageBodyTextNode?: Maybe<ContentfulPageBodyTextNode>
  readonly allContentfulPageBodyTextNode?: Maybe<
    ContentfulPageBodyTextNodeConnection
  >
  readonly contentfulPageMetaDescriptionTextNode?: Maybe<
    ContentfulPageMetaDescriptionTextNode
  >
  readonly allContentfulPageMetaDescriptionTextNode?: Maybe<
    ContentfulPageMetaDescriptionTextNodeConnection
  >
  readonly contentfulTag?: Maybe<ContentfulTag>
  readonly allContentfulTag?: Maybe<ContentfulTagConnection>
  readonly contentfulPost?: Maybe<ContentfulPost>
  readonly allContentfulPost?: Maybe<ContentfulPostConnection>
  readonly contentfulPostBodyTextNode?: Maybe<ContentfulPostBodyTextNode>
  readonly allContentfulPostBodyTextNode?: Maybe<
    ContentfulPostBodyTextNodeConnection
  >
  readonly contentfulPostMetaDescriptionTextNode?: Maybe<
    ContentfulPostMetaDescriptionTextNode
  >
  readonly allContentfulPostMetaDescriptionTextNode?: Maybe<
    ContentfulPostMetaDescriptionTextNodeConnection
  >
  readonly contentfulAsset?: Maybe<ContentfulAsset>
  readonly allContentfulAsset?: Maybe<ContentfulAssetConnection>
  readonly markdownRemark?: Maybe<MarkdownRemark>
  readonly allMarkdownRemark?: Maybe<MarkdownRemarkConnection>
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
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly siteMetadata?: Maybe<SiteSiteMetadata>
  readonly port?: Maybe<Scalars['Date']>
  readonly host?: Maybe<Scalars['String']>
  readonly pathPrefix?: Maybe<Scalars['String']>
  readonly polyfill?: Maybe<Scalars['Boolean']>
  readonly buildTime?: Maybe<Scalars['Date']>
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
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SiteEdge>
  readonly nodes: ReadonlyArray<Site>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<SiteGroupConnection>
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
  readonly next?: Maybe<Site>
  readonly node: Site
  readonly previous?: Maybe<Site>
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
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
  readonly siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  readonly port?: Maybe<DateQueryOperatorInput>
  readonly host?: Maybe<StringQueryOperatorInput>
  readonly pathPrefix?: Maybe<StringQueryOperatorInput>
  readonly polyfill?: Maybe<BooleanQueryOperatorInput>
  readonly buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SiteEdge>
  readonly nodes: ReadonlyArray<Site>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly path?: Maybe<Scalars['String']>
  readonly jsonName?: Maybe<Scalars['String']>
  readonly internalComponentName?: Maybe<Scalars['String']>
  readonly component?: Maybe<Scalars['String']>
  readonly componentChunkName?: Maybe<Scalars['String']>
  readonly isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  readonly context?: Maybe<SitePageContext>
  readonly pluginCreator?: Maybe<SitePlugin>
  readonly pluginCreatorId?: Maybe<Scalars['String']>
  readonly componentPath?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SitePageEdge>
  readonly nodes: ReadonlyArray<SitePage>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<SitePageGroupConnection>
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
  readonly limit?: Maybe<Scalars['Int']>
  readonly skip?: Maybe<Scalars['Int']>
  readonly numPages?: Maybe<Scalars['Int']>
  readonly currentPage?: Maybe<Scalars['Int']>
  readonly slug?: Maybe<Scalars['String']>
  readonly prev?: Maybe<SitePageContextPrev>
  readonly next?: Maybe<SitePageContextNext>
}

export type SitePageContextFilterInput = {
  readonly limit?: Maybe<IntQueryOperatorInput>
  readonly skip?: Maybe<IntQueryOperatorInput>
  readonly numPages?: Maybe<IntQueryOperatorInput>
  readonly currentPage?: Maybe<IntQueryOperatorInput>
  readonly slug?: Maybe<StringQueryOperatorInput>
  readonly prev?: Maybe<SitePageContextPrevFilterInput>
  readonly next?: Maybe<SitePageContextNextFilterInput>
}

export type SitePageContextNext = {
  readonly slug?: Maybe<Scalars['String']>
  readonly publishDate?: Maybe<Scalars['Date']>
}

export type SitePageContextNextPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SitePageContextNextFilterInput = {
  readonly slug?: Maybe<StringQueryOperatorInput>
  readonly publishDate?: Maybe<DateQueryOperatorInput>
}

export type SitePageContextPrev = {
  readonly slug?: Maybe<Scalars['String']>
  readonly publishDate?: Maybe<Scalars['Date']>
}

export type SitePageContextPrevPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SitePageContextPrevFilterInput = {
  readonly slug?: Maybe<StringQueryOperatorInput>
  readonly publishDate?: Maybe<DateQueryOperatorInput>
}

export type SitePageEdge = {
  readonly next?: Maybe<SitePage>
  readonly node: SitePage
  readonly previous?: Maybe<SitePage>
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
  | 'pluginCreator___pluginOptions___wrapperStyle'
  | 'pluginCreator___pluginOptions___showCaptions'
  | 'pluginCreator___pluginOptions___pathPrefix'
  | 'pluginCreator___pluginOptions___withWebp'
  | 'pluginCreator___pluginOptions___sizes'
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
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
  readonly path?: Maybe<StringQueryOperatorInput>
  readonly jsonName?: Maybe<StringQueryOperatorInput>
  readonly internalComponentName?: Maybe<StringQueryOperatorInput>
  readonly component?: Maybe<StringQueryOperatorInput>
  readonly componentChunkName?: Maybe<StringQueryOperatorInput>
  readonly isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  readonly context?: Maybe<SitePageContextFilterInput>
  readonly pluginCreator?: Maybe<SitePluginFilterInput>
  readonly pluginCreatorId?: Maybe<StringQueryOperatorInput>
  readonly componentPath?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SitePageEdge>
  readonly nodes: ReadonlyArray<SitePage>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  readonly id: Scalars['ID']
  readonly parent?: Maybe<Node>
  readonly children: ReadonlyArray<Node>
  readonly internal: Internal
  readonly resolve?: Maybe<Scalars['String']>
  readonly name?: Maybe<Scalars['String']>
  readonly version?: Maybe<Scalars['String']>
  readonly pluginOptions?: Maybe<SitePluginPluginOptions>
  readonly nodeAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly browserAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly ssrAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly pluginFilepath?: Maybe<Scalars['String']>
  readonly packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SitePluginEdge>
  readonly nodes: ReadonlyArray<SitePlugin>
  readonly pageInfo: PageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<SitePluginGroupConnection>
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
  readonly next?: Maybe<SitePlugin>
  readonly node: SitePlugin
  readonly previous?: Maybe<SitePlugin>
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
  | 'pluginOptions___plugins___pluginOptions___wrapperStyle'
  | 'pluginOptions___plugins___pluginOptions___showCaptions'
  | 'pluginOptions___plugins___pluginOptions___pathPrefix'
  | 'pluginOptions___plugins___pluginOptions___withWebp'
  | 'pluginOptions___plugins___pluginOptions___sizes'
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
  | 'pluginOptions___wrapperStyle'
  | 'pluginOptions___showCaptions'
  | 'pluginOptions___pathPrefix'
  | 'pluginOptions___withWebp'
  | 'pluginOptions___sizes'
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
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly parent?: Maybe<NodeFilterInput>
  readonly children?: Maybe<NodeFilterListInput>
  readonly internal?: Maybe<InternalFilterInput>
  readonly resolve?: Maybe<StringQueryOperatorInput>
  readonly name?: Maybe<StringQueryOperatorInput>
  readonly version?: Maybe<StringQueryOperatorInput>
  readonly pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  readonly nodeAPIs?: Maybe<StringQueryOperatorInput>
  readonly browserAPIs?: Maybe<StringQueryOperatorInput>
  readonly ssrAPIs?: Maybe<StringQueryOperatorInput>
  readonly pluginFilepath?: Maybe<StringQueryOperatorInput>
  readonly packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<SitePluginEdge>
  readonly nodes: ReadonlyArray<SitePlugin>
  readonly pageInfo: PageInfo
  readonly field: Scalars['String']
  readonly fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  readonly name?: Maybe<Scalars['String']>
  readonly description?: Maybe<Scalars['String']>
  readonly version?: Maybe<Scalars['String']>
  readonly main?: Maybe<Scalars['String']>
  readonly author?: Maybe<Scalars['String']>
  readonly license?: Maybe<Scalars['String']>
  readonly dependencies?: Maybe<
    ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>
  >
  readonly devDependencies?: Maybe<
    ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>
  >
  readonly peerDependencies?: Maybe<
    ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>
  >
  readonly keywords?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  readonly name?: Maybe<Scalars['String']>
  readonly version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>
  readonly version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  readonly name?: Maybe<Scalars['String']>
  readonly version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>
  readonly version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>
  readonly description?: Maybe<StringQueryOperatorInput>
  readonly version?: Maybe<StringQueryOperatorInput>
  readonly main?: Maybe<StringQueryOperatorInput>
  readonly author?: Maybe<StringQueryOperatorInput>
  readonly license?: Maybe<StringQueryOperatorInput>
  readonly dependencies?: Maybe<
    SitePluginPackageJsonDependenciesFilterListInput
  >
  readonly devDependencies?: Maybe<
    SitePluginPackageJsonDevDependenciesFilterListInput
  >
  readonly peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >
  readonly keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  readonly name?: Maybe<Scalars['String']>
  readonly version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name?: Maybe<StringQueryOperatorInput>
  readonly version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  readonly plugins?: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>
  readonly isTSX?: Maybe<Scalars['Boolean']>
  readonly jsxPragma?: Maybe<Scalars['String']>
  readonly allExtensions?: Maybe<Scalars['Boolean']>
  readonly siteUrl?: Maybe<Scalars['String']>
  readonly maxWidth?: Maybe<Scalars['Int']>
  readonly backgroundColor?: Maybe<Scalars['String']>
  readonly linkImagesToOriginal?: Maybe<Scalars['Boolean']>
  readonly wrapperStyle?: Maybe<Scalars['String']>
  readonly showCaptions?: Maybe<Scalars['Boolean']>
  readonly pathPrefix?: Maybe<Scalars['String']>
  readonly withWebp?: Maybe<Scalars['Boolean']>
  readonly sizes?: Maybe<Scalars['String']>
  readonly host?: Maybe<Scalars['String']>
  readonly spaceId?: Maybe<Scalars['String']>
  readonly accessToken?: Maybe<Scalars['String']>
  readonly environment?: Maybe<Scalars['String']>
  readonly head?: Maybe<Scalars['Boolean']>
  readonly name?: Maybe<Scalars['String']>
  readonly short_name?: Maybe<Scalars['String']>
  readonly description?: Maybe<Scalars['String']>
  readonly start_url?: Maybe<Scalars['String']>
  readonly background_color?: Maybe<Scalars['String']>
  readonly theme_color?: Maybe<Scalars['String']>
  readonly display?: Maybe<Scalars['String']>
  readonly icon?: Maybe<Scalars['String']>
  readonly query?: Maybe<Scalars['String']>
  readonly feeds?: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsFeeds>>>
  readonly color?: Maybe<Scalars['String']>
  readonly path?: Maybe<Scalars['String']>
  readonly pathCheck?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsFeeds = {
  readonly query?: Maybe<Scalars['String']>
  readonly output?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsFeedsFilterInput = {
  readonly query?: Maybe<StringQueryOperatorInput>
  readonly output?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsFeedsFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>
}

export type SitePluginPluginOptionsFilterInput = {
  readonly plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>
  readonly isTSX?: Maybe<BooleanQueryOperatorInput>
  readonly jsxPragma?: Maybe<StringQueryOperatorInput>
  readonly allExtensions?: Maybe<BooleanQueryOperatorInput>
  readonly siteUrl?: Maybe<StringQueryOperatorInput>
  readonly maxWidth?: Maybe<IntQueryOperatorInput>
  readonly backgroundColor?: Maybe<StringQueryOperatorInput>
  readonly linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>
  readonly wrapperStyle?: Maybe<StringQueryOperatorInput>
  readonly showCaptions?: Maybe<BooleanQueryOperatorInput>
  readonly pathPrefix?: Maybe<StringQueryOperatorInput>
  readonly withWebp?: Maybe<BooleanQueryOperatorInput>
  readonly sizes?: Maybe<StringQueryOperatorInput>
  readonly host?: Maybe<StringQueryOperatorInput>
  readonly spaceId?: Maybe<StringQueryOperatorInput>
  readonly accessToken?: Maybe<StringQueryOperatorInput>
  readonly environment?: Maybe<StringQueryOperatorInput>
  readonly head?: Maybe<BooleanQueryOperatorInput>
  readonly name?: Maybe<StringQueryOperatorInput>
  readonly short_name?: Maybe<StringQueryOperatorInput>
  readonly description?: Maybe<StringQueryOperatorInput>
  readonly start_url?: Maybe<StringQueryOperatorInput>
  readonly background_color?: Maybe<StringQueryOperatorInput>
  readonly theme_color?: Maybe<StringQueryOperatorInput>
  readonly display?: Maybe<StringQueryOperatorInput>
  readonly icon?: Maybe<StringQueryOperatorInput>
  readonly query?: Maybe<StringQueryOperatorInput>
  readonly feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>
  readonly color?: Maybe<StringQueryOperatorInput>
  readonly path?: Maybe<StringQueryOperatorInput>
  readonly pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsPlugins = {
  readonly resolve?: Maybe<Scalars['String']>
  readonly id?: Maybe<Scalars['String']>
  readonly name?: Maybe<Scalars['String']>
  readonly version?: Maybe<Scalars['String']>
  readonly pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>
  readonly browserAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly ssrAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly pluginFilepath?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve?: Maybe<StringQueryOperatorInput>
  readonly id?: Maybe<StringQueryOperatorInput>
  readonly name?: Maybe<StringQueryOperatorInput>
  readonly version?: Maybe<StringQueryOperatorInput>
  readonly pluginOptions?: Maybe<
    SitePluginPluginOptionsPluginsPluginOptionsFilterInput
  >
  readonly browserAPIs?: Maybe<StringQueryOperatorInput>
  readonly ssrAPIs?: Maybe<StringQueryOperatorInput>
  readonly pluginFilepath?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>
}

export type SitePluginPluginOptionsPluginsPluginOptions = {
  readonly maxWidth?: Maybe<Scalars['Int']>
  readonly backgroundColor?: Maybe<Scalars['String']>
  readonly linkImagesToOriginal?: Maybe<Scalars['Boolean']>
  readonly wrapperStyle?: Maybe<Scalars['String']>
  readonly showCaptions?: Maybe<Scalars['Boolean']>
  readonly pathPrefix?: Maybe<Scalars['String']>
  readonly withWebp?: Maybe<Scalars['Boolean']>
  readonly sizes?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly maxWidth?: Maybe<IntQueryOperatorInput>
  readonly backgroundColor?: Maybe<StringQueryOperatorInput>
  readonly linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>
  readonly wrapperStyle?: Maybe<StringQueryOperatorInput>
  readonly showCaptions?: Maybe<BooleanQueryOperatorInput>
  readonly pathPrefix?: Maybe<StringQueryOperatorInput>
  readonly withWebp?: Maybe<BooleanQueryOperatorInput>
  readonly sizes?: Maybe<StringQueryOperatorInput>
}

export type SitePluginSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  readonly siteUrl?: Maybe<Scalars['String']>
  readonly rssMetadata?: Maybe<SiteSiteMetadataRssMetadata>
}

export type SiteSiteMetadataFilterInput = {
  readonly siteUrl?: Maybe<StringQueryOperatorInput>
  readonly rssMetadata?: Maybe<SiteSiteMetadataRssMetadataFilterInput>
}

export type SiteSiteMetadataRssMetadata = {
  readonly site_url?: Maybe<Scalars['String']>
  readonly feed_url?: Maybe<Scalars['String']>
  readonly title?: Maybe<Scalars['String']>
  readonly description?: Maybe<Scalars['String']>
  readonly image_url?: Maybe<Scalars['String']>
  readonly author?: Maybe<Scalars['String']>
  readonly copyright?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataRssMetadataFilterInput = {
  readonly site_url?: Maybe<StringQueryOperatorInput>
  readonly feed_url?: Maybe<StringQueryOperatorInput>
  readonly title?: Maybe<StringQueryOperatorInput>
  readonly description?: Maybe<StringQueryOperatorInput>
  readonly image_url?: Maybe<StringQueryOperatorInput>
  readonly author?: Maybe<StringQueryOperatorInput>
  readonly copyright?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>
  readonly order?: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
}

export type SortOrderEnum = 'ASC' | 'DESC'

export type StringQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['String']>
  readonly ne?: Maybe<Scalars['String']>
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly regex?: Maybe<Scalars['String']>
  readonly glob?: Maybe<Scalars['String']>
}

export type WordCount = {
  readonly paragraphs?: Maybe<Scalars['Int']>
  readonly sentences?: Maybe<Scalars['Int']>
  readonly words?: Maybe<Scalars['Int']>
}

export type WordCountFilterInput = {
  readonly paragraphs?: Maybe<IntQueryOperatorInput>
  readonly sentences?: Maybe<IntQueryOperatorInput>
  readonly words?: Maybe<IntQueryOperatorInput>
}
export type IndexQueryVariables = {
  skip: Scalars['Int']
  limit: Scalars['Int']
}

export type IndexQuery = {
  readonly allContentfulPost: Maybe<{
    readonly edges: ReadonlyArray<{
      readonly node: Pick<
        ContentfulPost,
        'title' | 'id' | 'slug' | 'publishDate'
      > & {
        readonly heroImage: Maybe<
          Pick<ContentfulAsset, 'title'> & {
            readonly fluid: Maybe<
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
        readonly body: Maybe<{
          readonly childMarkdownRemark: Maybe<
            Pick<MarkdownRemark, 'html' | 'excerpt'>
          >
        }>
      }
    }>
  }>
}
