type Maybe<T> = T | undefined
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

export enum ContentfulAssetFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ContentfulId = 'contentful_id',
  FileUrl = 'file___url',
  FileDetailsSize = 'file___details___size',
  FileDetailsImageWidth = 'file___details___image___width',
  FileDetailsImageHeight = 'file___details___image___height',
  FileFileName = 'file___fileName',
  FileContentType = 'file___contentType',
  Title = 'title',
  Description = 'description',
  NodeLocale = 'node_locale',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  ResizeBase64 = 'resize___base64',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeSrc = 'resize___src',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
}

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

export enum ContentfulContentTypeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  DisplayField = 'displayField',
  Description = 'description',
}

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

export enum ContentfulImageCropFocus {
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT',
  Bottom = 'BOTTOM',
  BottomRight = 'BOTTOM_RIGHT',
  BottomLeft = 'BOTTOM_LEFT',
  Right = 'RIGHT',
  Left = 'LEFT',
  Faces = 'FACES',
  Center = 'CENTER',
}

export enum ContentfulImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

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

export enum ContentfulPageBodyTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Body = 'body',
}

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

export enum ContentfulPageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  Slug = 'slug',
  BodyId = 'body___id',
  BodyParentId = 'body___parent___id',
  BodyParentParentId = 'body___parent___parent___id',
  BodyParentParentChildren = 'body___parent___parent___children',
  BodyParentChildren = 'body___parent___children',
  BodyParentChildrenId = 'body___parent___children___id',
  BodyParentChildrenChildren = 'body___parent___children___children',
  BodyParentInternalContent = 'body___parent___internal___content',
  BodyParentInternalContentDigest = 'body___parent___internal___contentDigest',
  BodyParentInternalDescription = 'body___parent___internal___description',
  BodyParentInternalFieldOwners = 'body___parent___internal___fieldOwners',
  BodyParentInternalIgnoreType = 'body___parent___internal___ignoreType',
  BodyParentInternalMediaType = 'body___parent___internal___mediaType',
  BodyParentInternalOwner = 'body___parent___internal___owner',
  BodyParentInternalType = 'body___parent___internal___type',
  BodyChildren = 'body___children',
  BodyChildrenId = 'body___children___id',
  BodyChildrenParentId = 'body___children___parent___id',
  BodyChildrenParentChildren = 'body___children___parent___children',
  BodyChildrenChildren = 'body___children___children',
  BodyChildrenChildrenId = 'body___children___children___id',
  BodyChildrenChildrenChildren = 'body___children___children___children',
  BodyChildrenInternalContent = 'body___children___internal___content',
  BodyChildrenInternalContentDigest = 'body___children___internal___contentDigest',
  BodyChildrenInternalDescription = 'body___children___internal___description',
  BodyChildrenInternalFieldOwners = 'body___children___internal___fieldOwners',
  BodyChildrenInternalIgnoreType = 'body___children___internal___ignoreType',
  BodyChildrenInternalMediaType = 'body___children___internal___mediaType',
  BodyChildrenInternalOwner = 'body___children___internal___owner',
  BodyChildrenInternalType = 'body___children___internal___type',
  BodyInternalContent = 'body___internal___content',
  BodyInternalContentDigest = 'body___internal___contentDigest',
  BodyInternalDescription = 'body___internal___description',
  BodyInternalFieldOwners = 'body___internal___fieldOwners',
  BodyInternalIgnoreType = 'body___internal___ignoreType',
  BodyInternalMediaType = 'body___internal___mediaType',
  BodyInternalOwner = 'body___internal___owner',
  BodyInternalType = 'body___internal___type',
  BodyBody = 'body___body',
  MetaDescriptionId = 'metaDescription___id',
  MetaDescriptionParentId = 'metaDescription___parent___id',
  MetaDescriptionParentParentId = 'metaDescription___parent___parent___id',
  MetaDescriptionParentParentChildren = 'metaDescription___parent___parent___children',
  MetaDescriptionParentChildren = 'metaDescription___parent___children',
  MetaDescriptionParentChildrenId = 'metaDescription___parent___children___id',
  MetaDescriptionParentChildrenChildren = 'metaDescription___parent___children___children',
  MetaDescriptionParentInternalContent = 'metaDescription___parent___internal___content',
  MetaDescriptionParentInternalContentDigest = 'metaDescription___parent___internal___contentDigest',
  MetaDescriptionParentInternalDescription = 'metaDescription___parent___internal___description',
  MetaDescriptionParentInternalFieldOwners = 'metaDescription___parent___internal___fieldOwners',
  MetaDescriptionParentInternalIgnoreType = 'metaDescription___parent___internal___ignoreType',
  MetaDescriptionParentInternalMediaType = 'metaDescription___parent___internal___mediaType',
  MetaDescriptionParentInternalOwner = 'metaDescription___parent___internal___owner',
  MetaDescriptionParentInternalType = 'metaDescription___parent___internal___type',
  MetaDescriptionChildren = 'metaDescription___children',
  MetaDescriptionChildrenId = 'metaDescription___children___id',
  MetaDescriptionChildrenParentId = 'metaDescription___children___parent___id',
  MetaDescriptionChildrenParentChildren = 'metaDescription___children___parent___children',
  MetaDescriptionChildrenChildren = 'metaDescription___children___children',
  MetaDescriptionChildrenChildrenId = 'metaDescription___children___children___id',
  MetaDescriptionChildrenChildrenChildren = 'metaDescription___children___children___children',
  MetaDescriptionChildrenInternalContent = 'metaDescription___children___internal___content',
  MetaDescriptionChildrenInternalContentDigest = 'metaDescription___children___internal___contentDigest',
  MetaDescriptionChildrenInternalDescription = 'metaDescription___children___internal___description',
  MetaDescriptionChildrenInternalFieldOwners = 'metaDescription___children___internal___fieldOwners',
  MetaDescriptionChildrenInternalIgnoreType = 'metaDescription___children___internal___ignoreType',
  MetaDescriptionChildrenInternalMediaType = 'metaDescription___children___internal___mediaType',
  MetaDescriptionChildrenInternalOwner = 'metaDescription___children___internal___owner',
  MetaDescriptionChildrenInternalType = 'metaDescription___children___internal___type',
  MetaDescriptionInternalContent = 'metaDescription___internal___content',
  MetaDescriptionInternalContentDigest = 'metaDescription___internal___contentDigest',
  MetaDescriptionInternalDescription = 'metaDescription___internal___description',
  MetaDescriptionInternalFieldOwners = 'metaDescription___internal___fieldOwners',
  MetaDescriptionInternalIgnoreType = 'metaDescription___internal___ignoreType',
  MetaDescriptionInternalMediaType = 'metaDescription___internal___mediaType',
  MetaDescriptionInternalOwner = 'metaDescription___internal___owner',
  MetaDescriptionInternalType = 'metaDescription___internal___type',
  MetaDescriptionMetaDescription = 'metaDescription___metaDescription',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  NodeLocale = 'node_locale',
}

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

export enum ContentfulPageMetaDescriptionTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MetaDescription = 'metaDescription',
}

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

export enum ContentfulPostBodyTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Body = 'body',
}

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

export enum ContentfulPostFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  Slug = 'slug',
  PublishDate = 'publishDate',
  HeroImageId = 'heroImage___id',
  HeroImageParentId = 'heroImage___parent___id',
  HeroImageParentParentId = 'heroImage___parent___parent___id',
  HeroImageParentParentChildren = 'heroImage___parent___parent___children',
  HeroImageParentChildren = 'heroImage___parent___children',
  HeroImageParentChildrenId = 'heroImage___parent___children___id',
  HeroImageParentChildrenChildren = 'heroImage___parent___children___children',
  HeroImageParentInternalContent = 'heroImage___parent___internal___content',
  HeroImageParentInternalContentDigest = 'heroImage___parent___internal___contentDigest',
  HeroImageParentInternalDescription = 'heroImage___parent___internal___description',
  HeroImageParentInternalFieldOwners = 'heroImage___parent___internal___fieldOwners',
  HeroImageParentInternalIgnoreType = 'heroImage___parent___internal___ignoreType',
  HeroImageParentInternalMediaType = 'heroImage___parent___internal___mediaType',
  HeroImageParentInternalOwner = 'heroImage___parent___internal___owner',
  HeroImageParentInternalType = 'heroImage___parent___internal___type',
  HeroImageChildren = 'heroImage___children',
  HeroImageChildrenId = 'heroImage___children___id',
  HeroImageChildrenParentId = 'heroImage___children___parent___id',
  HeroImageChildrenParentChildren = 'heroImage___children___parent___children',
  HeroImageChildrenChildren = 'heroImage___children___children',
  HeroImageChildrenChildrenId = 'heroImage___children___children___id',
  HeroImageChildrenChildrenChildren = 'heroImage___children___children___children',
  HeroImageChildrenInternalContent = 'heroImage___children___internal___content',
  HeroImageChildrenInternalContentDigest = 'heroImage___children___internal___contentDigest',
  HeroImageChildrenInternalDescription = 'heroImage___children___internal___description',
  HeroImageChildrenInternalFieldOwners = 'heroImage___children___internal___fieldOwners',
  HeroImageChildrenInternalIgnoreType = 'heroImage___children___internal___ignoreType',
  HeroImageChildrenInternalMediaType = 'heroImage___children___internal___mediaType',
  HeroImageChildrenInternalOwner = 'heroImage___children___internal___owner',
  HeroImageChildrenInternalType = 'heroImage___children___internal___type',
  HeroImageInternalContent = 'heroImage___internal___content',
  HeroImageInternalContentDigest = 'heroImage___internal___contentDigest',
  HeroImageInternalDescription = 'heroImage___internal___description',
  HeroImageInternalFieldOwners = 'heroImage___internal___fieldOwners',
  HeroImageInternalIgnoreType = 'heroImage___internal___ignoreType',
  HeroImageInternalMediaType = 'heroImage___internal___mediaType',
  HeroImageInternalOwner = 'heroImage___internal___owner',
  HeroImageInternalType = 'heroImage___internal___type',
  HeroImageContentfulId = 'heroImage___contentful_id',
  HeroImageFileUrl = 'heroImage___file___url',
  HeroImageFileDetailsSize = 'heroImage___file___details___size',
  HeroImageFileFileName = 'heroImage___file___fileName',
  HeroImageFileContentType = 'heroImage___file___contentType',
  HeroImageTitle = 'heroImage___title',
  HeroImageDescription = 'heroImage___description',
  HeroImageNodeLocale = 'heroImage___node_locale',
  HeroImageFixedBase64 = 'heroImage___fixed___base64',
  HeroImageFixedTracedSvg = 'heroImage___fixed___tracedSVG',
  HeroImageFixedAspectRatio = 'heroImage___fixed___aspectRatio',
  HeroImageFixedWidth = 'heroImage___fixed___width',
  HeroImageFixedHeight = 'heroImage___fixed___height',
  HeroImageFixedSrc = 'heroImage___fixed___src',
  HeroImageFixedSrcSet = 'heroImage___fixed___srcSet',
  HeroImageFixedSrcWebp = 'heroImage___fixed___srcWebp',
  HeroImageFixedSrcSetWebp = 'heroImage___fixed___srcSetWebp',
  HeroImageResolutionsBase64 = 'heroImage___resolutions___base64',
  HeroImageResolutionsTracedSvg = 'heroImage___resolutions___tracedSVG',
  HeroImageResolutionsAspectRatio = 'heroImage___resolutions___aspectRatio',
  HeroImageResolutionsWidth = 'heroImage___resolutions___width',
  HeroImageResolutionsHeight = 'heroImage___resolutions___height',
  HeroImageResolutionsSrc = 'heroImage___resolutions___src',
  HeroImageResolutionsSrcSet = 'heroImage___resolutions___srcSet',
  HeroImageResolutionsSrcWebp = 'heroImage___resolutions___srcWebp',
  HeroImageResolutionsSrcSetWebp = 'heroImage___resolutions___srcSetWebp',
  HeroImageFluidBase64 = 'heroImage___fluid___base64',
  HeroImageFluidTracedSvg = 'heroImage___fluid___tracedSVG',
  HeroImageFluidAspectRatio = 'heroImage___fluid___aspectRatio',
  HeroImageFluidSrc = 'heroImage___fluid___src',
  HeroImageFluidSrcSet = 'heroImage___fluid___srcSet',
  HeroImageFluidSrcWebp = 'heroImage___fluid___srcWebp',
  HeroImageFluidSrcSetWebp = 'heroImage___fluid___srcSetWebp',
  HeroImageFluidSizes = 'heroImage___fluid___sizes',
  HeroImageSizesBase64 = 'heroImage___sizes___base64',
  HeroImageSizesTracedSvg = 'heroImage___sizes___tracedSVG',
  HeroImageSizesAspectRatio = 'heroImage___sizes___aspectRatio',
  HeroImageSizesSrc = 'heroImage___sizes___src',
  HeroImageSizesSrcSet = 'heroImage___sizes___srcSet',
  HeroImageSizesSrcWebp = 'heroImage___sizes___srcWebp',
  HeroImageSizesSrcSetWebp = 'heroImage___sizes___srcSetWebp',
  HeroImageSizesSizes = 'heroImage___sizes___sizes',
  HeroImageResizeBase64 = 'heroImage___resize___base64',
  HeroImageResizeTracedSvg = 'heroImage___resize___tracedSVG',
  HeroImageResizeSrc = 'heroImage___resize___src',
  HeroImageResizeWidth = 'heroImage___resize___width',
  HeroImageResizeHeight = 'heroImage___resize___height',
  HeroImageResizeAspectRatio = 'heroImage___resize___aspectRatio',
  Tags = 'tags',
  TagsId = 'tags___id',
  TagsParentId = 'tags___parent___id',
  TagsParentParentId = 'tags___parent___parent___id',
  TagsParentParentChildren = 'tags___parent___parent___children',
  TagsParentChildren = 'tags___parent___children',
  TagsParentChildrenId = 'tags___parent___children___id',
  TagsParentChildrenChildren = 'tags___parent___children___children',
  TagsParentInternalContent = 'tags___parent___internal___content',
  TagsParentInternalContentDigest = 'tags___parent___internal___contentDigest',
  TagsParentInternalDescription = 'tags___parent___internal___description',
  TagsParentInternalFieldOwners = 'tags___parent___internal___fieldOwners',
  TagsParentInternalIgnoreType = 'tags___parent___internal___ignoreType',
  TagsParentInternalMediaType = 'tags___parent___internal___mediaType',
  TagsParentInternalOwner = 'tags___parent___internal___owner',
  TagsParentInternalType = 'tags___parent___internal___type',
  TagsChildren = 'tags___children',
  TagsChildrenId = 'tags___children___id',
  TagsChildrenParentId = 'tags___children___parent___id',
  TagsChildrenParentChildren = 'tags___children___parent___children',
  TagsChildrenChildren = 'tags___children___children',
  TagsChildrenChildrenId = 'tags___children___children___id',
  TagsChildrenChildrenChildren = 'tags___children___children___children',
  TagsChildrenInternalContent = 'tags___children___internal___content',
  TagsChildrenInternalContentDigest = 'tags___children___internal___contentDigest',
  TagsChildrenInternalDescription = 'tags___children___internal___description',
  TagsChildrenInternalFieldOwners = 'tags___children___internal___fieldOwners',
  TagsChildrenInternalIgnoreType = 'tags___children___internal___ignoreType',
  TagsChildrenInternalMediaType = 'tags___children___internal___mediaType',
  TagsChildrenInternalOwner = 'tags___children___internal___owner',
  TagsChildrenInternalType = 'tags___children___internal___type',
  TagsInternalContent = 'tags___internal___content',
  TagsInternalContentDigest = 'tags___internal___contentDigest',
  TagsInternalDescription = 'tags___internal___description',
  TagsInternalFieldOwners = 'tags___internal___fieldOwners',
  TagsInternalIgnoreType = 'tags___internal___ignoreType',
  TagsInternalMediaType = 'tags___internal___mediaType',
  TagsInternalOwner = 'tags___internal___owner',
  TagsInternalType = 'tags___internal___type',
  TagsTitle = 'tags___title',
  TagsSlug = 'tags___slug',
  TagsPost = 'tags___post',
  TagsPostId = 'tags___post___id',
  TagsPostParentId = 'tags___post___parent___id',
  TagsPostParentChildren = 'tags___post___parent___children',
  TagsPostChildren = 'tags___post___children',
  TagsPostChildrenId = 'tags___post___children___id',
  TagsPostChildrenChildren = 'tags___post___children___children',
  TagsPostInternalContent = 'tags___post___internal___content',
  TagsPostInternalContentDigest = 'tags___post___internal___contentDigest',
  TagsPostInternalDescription = 'tags___post___internal___description',
  TagsPostInternalFieldOwners = 'tags___post___internal___fieldOwners',
  TagsPostInternalIgnoreType = 'tags___post___internal___ignoreType',
  TagsPostInternalMediaType = 'tags___post___internal___mediaType',
  TagsPostInternalOwner = 'tags___post___internal___owner',
  TagsPostInternalType = 'tags___post___internal___type',
  TagsPostTitle = 'tags___post___title',
  TagsPostSlug = 'tags___post___slug',
  TagsPostPublishDate = 'tags___post___publishDate',
  TagsPostHeroImageId = 'tags___post___heroImage___id',
  TagsPostHeroImageChildren = 'tags___post___heroImage___children',
  TagsPostHeroImageContentfulId = 'tags___post___heroImage___contentful_id',
  TagsPostHeroImageTitle = 'tags___post___heroImage___title',
  TagsPostHeroImageDescription = 'tags___post___heroImage___description',
  TagsPostHeroImageNodeLocale = 'tags___post___heroImage___node_locale',
  TagsPostTags = 'tags___post___tags',
  TagsPostTagsId = 'tags___post___tags___id',
  TagsPostTagsChildren = 'tags___post___tags___children',
  TagsPostTagsTitle = 'tags___post___tags___title',
  TagsPostTagsSlug = 'tags___post___tags___slug',
  TagsPostTagsPost = 'tags___post___tags___post',
  TagsPostTagsContentfulId = 'tags___post___tags___contentful_id',
  TagsPostTagsCreatedAt = 'tags___post___tags___createdAt',
  TagsPostTagsUpdatedAt = 'tags___post___tags___updatedAt',
  TagsPostTagsNodeLocale = 'tags___post___tags___node_locale',
  TagsPostBodyId = 'tags___post___body___id',
  TagsPostBodyChildren = 'tags___post___body___children',
  TagsPostBodyBody = 'tags___post___body___body',
  TagsPostContentfulId = 'tags___post___contentful_id',
  TagsPostCreatedAt = 'tags___post___createdAt',
  TagsPostUpdatedAt = 'tags___post___updatedAt',
  TagsPostNodeLocale = 'tags___post___node_locale',
  TagsPostMetaDescriptionId = 'tags___post___metaDescription___id',
  TagsPostMetaDescriptionChildren = 'tags___post___metaDescription___children',
  TagsPostMetaDescriptionMetaDescription = 'tags___post___metaDescription___metaDescription',
  TagsContentfulId = 'tags___contentful_id',
  TagsCreatedAt = 'tags___createdAt',
  TagsUpdatedAt = 'tags___updatedAt',
  TagsNodeLocale = 'tags___node_locale',
  BodyId = 'body___id',
  BodyParentId = 'body___parent___id',
  BodyParentParentId = 'body___parent___parent___id',
  BodyParentParentChildren = 'body___parent___parent___children',
  BodyParentChildren = 'body___parent___children',
  BodyParentChildrenId = 'body___parent___children___id',
  BodyParentChildrenChildren = 'body___parent___children___children',
  BodyParentInternalContent = 'body___parent___internal___content',
  BodyParentInternalContentDigest = 'body___parent___internal___contentDigest',
  BodyParentInternalDescription = 'body___parent___internal___description',
  BodyParentInternalFieldOwners = 'body___parent___internal___fieldOwners',
  BodyParentInternalIgnoreType = 'body___parent___internal___ignoreType',
  BodyParentInternalMediaType = 'body___parent___internal___mediaType',
  BodyParentInternalOwner = 'body___parent___internal___owner',
  BodyParentInternalType = 'body___parent___internal___type',
  BodyChildren = 'body___children',
  BodyChildrenId = 'body___children___id',
  BodyChildrenParentId = 'body___children___parent___id',
  BodyChildrenParentChildren = 'body___children___parent___children',
  BodyChildrenChildren = 'body___children___children',
  BodyChildrenChildrenId = 'body___children___children___id',
  BodyChildrenChildrenChildren = 'body___children___children___children',
  BodyChildrenInternalContent = 'body___children___internal___content',
  BodyChildrenInternalContentDigest = 'body___children___internal___contentDigest',
  BodyChildrenInternalDescription = 'body___children___internal___description',
  BodyChildrenInternalFieldOwners = 'body___children___internal___fieldOwners',
  BodyChildrenInternalIgnoreType = 'body___children___internal___ignoreType',
  BodyChildrenInternalMediaType = 'body___children___internal___mediaType',
  BodyChildrenInternalOwner = 'body___children___internal___owner',
  BodyChildrenInternalType = 'body___children___internal___type',
  BodyInternalContent = 'body___internal___content',
  BodyInternalContentDigest = 'body___internal___contentDigest',
  BodyInternalDescription = 'body___internal___description',
  BodyInternalFieldOwners = 'body___internal___fieldOwners',
  BodyInternalIgnoreType = 'body___internal___ignoreType',
  BodyInternalMediaType = 'body___internal___mediaType',
  BodyInternalOwner = 'body___internal___owner',
  BodyInternalType = 'body___internal___type',
  BodyBody = 'body___body',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  NodeLocale = 'node_locale',
  MetaDescriptionId = 'metaDescription___id',
  MetaDescriptionParentId = 'metaDescription___parent___id',
  MetaDescriptionParentParentId = 'metaDescription___parent___parent___id',
  MetaDescriptionParentParentChildren = 'metaDescription___parent___parent___children',
  MetaDescriptionParentChildren = 'metaDescription___parent___children',
  MetaDescriptionParentChildrenId = 'metaDescription___parent___children___id',
  MetaDescriptionParentChildrenChildren = 'metaDescription___parent___children___children',
  MetaDescriptionParentInternalContent = 'metaDescription___parent___internal___content',
  MetaDescriptionParentInternalContentDigest = 'metaDescription___parent___internal___contentDigest',
  MetaDescriptionParentInternalDescription = 'metaDescription___parent___internal___description',
  MetaDescriptionParentInternalFieldOwners = 'metaDescription___parent___internal___fieldOwners',
  MetaDescriptionParentInternalIgnoreType = 'metaDescription___parent___internal___ignoreType',
  MetaDescriptionParentInternalMediaType = 'metaDescription___parent___internal___mediaType',
  MetaDescriptionParentInternalOwner = 'metaDescription___parent___internal___owner',
  MetaDescriptionParentInternalType = 'metaDescription___parent___internal___type',
  MetaDescriptionChildren = 'metaDescription___children',
  MetaDescriptionChildrenId = 'metaDescription___children___id',
  MetaDescriptionChildrenParentId = 'metaDescription___children___parent___id',
  MetaDescriptionChildrenParentChildren = 'metaDescription___children___parent___children',
  MetaDescriptionChildrenChildren = 'metaDescription___children___children',
  MetaDescriptionChildrenChildrenId = 'metaDescription___children___children___id',
  MetaDescriptionChildrenChildrenChildren = 'metaDescription___children___children___children',
  MetaDescriptionChildrenInternalContent = 'metaDescription___children___internal___content',
  MetaDescriptionChildrenInternalContentDigest = 'metaDescription___children___internal___contentDigest',
  MetaDescriptionChildrenInternalDescription = 'metaDescription___children___internal___description',
  MetaDescriptionChildrenInternalFieldOwners = 'metaDescription___children___internal___fieldOwners',
  MetaDescriptionChildrenInternalIgnoreType = 'metaDescription___children___internal___ignoreType',
  MetaDescriptionChildrenInternalMediaType = 'metaDescription___children___internal___mediaType',
  MetaDescriptionChildrenInternalOwner = 'metaDescription___children___internal___owner',
  MetaDescriptionChildrenInternalType = 'metaDescription___children___internal___type',
  MetaDescriptionInternalContent = 'metaDescription___internal___content',
  MetaDescriptionInternalContentDigest = 'metaDescription___internal___contentDigest',
  MetaDescriptionInternalDescription = 'metaDescription___internal___description',
  MetaDescriptionInternalFieldOwners = 'metaDescription___internal___fieldOwners',
  MetaDescriptionInternalIgnoreType = 'metaDescription___internal___ignoreType',
  MetaDescriptionInternalMediaType = 'metaDescription___internal___mediaType',
  MetaDescriptionInternalOwner = 'metaDescription___internal___owner',
  MetaDescriptionInternalType = 'metaDescription___internal___type',
  MetaDescriptionMetaDescription = 'metaDescription___metaDescription',
}

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

export enum ContentfulPostMetaDescriptionTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MetaDescription = 'metaDescription',
}

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

export enum ContentfulTagFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  Slug = 'slug',
  Post = 'post',
  PostId = 'post___id',
  PostParentId = 'post___parent___id',
  PostParentParentId = 'post___parent___parent___id',
  PostParentParentChildren = 'post___parent___parent___children',
  PostParentChildren = 'post___parent___children',
  PostParentChildrenId = 'post___parent___children___id',
  PostParentChildrenChildren = 'post___parent___children___children',
  PostParentInternalContent = 'post___parent___internal___content',
  PostParentInternalContentDigest = 'post___parent___internal___contentDigest',
  PostParentInternalDescription = 'post___parent___internal___description',
  PostParentInternalFieldOwners = 'post___parent___internal___fieldOwners',
  PostParentInternalIgnoreType = 'post___parent___internal___ignoreType',
  PostParentInternalMediaType = 'post___parent___internal___mediaType',
  PostParentInternalOwner = 'post___parent___internal___owner',
  PostParentInternalType = 'post___parent___internal___type',
  PostChildren = 'post___children',
  PostChildrenId = 'post___children___id',
  PostChildrenParentId = 'post___children___parent___id',
  PostChildrenParentChildren = 'post___children___parent___children',
  PostChildrenChildren = 'post___children___children',
  PostChildrenChildrenId = 'post___children___children___id',
  PostChildrenChildrenChildren = 'post___children___children___children',
  PostChildrenInternalContent = 'post___children___internal___content',
  PostChildrenInternalContentDigest = 'post___children___internal___contentDigest',
  PostChildrenInternalDescription = 'post___children___internal___description',
  PostChildrenInternalFieldOwners = 'post___children___internal___fieldOwners',
  PostChildrenInternalIgnoreType = 'post___children___internal___ignoreType',
  PostChildrenInternalMediaType = 'post___children___internal___mediaType',
  PostChildrenInternalOwner = 'post___children___internal___owner',
  PostChildrenInternalType = 'post___children___internal___type',
  PostInternalContent = 'post___internal___content',
  PostInternalContentDigest = 'post___internal___contentDigest',
  PostInternalDescription = 'post___internal___description',
  PostInternalFieldOwners = 'post___internal___fieldOwners',
  PostInternalIgnoreType = 'post___internal___ignoreType',
  PostInternalMediaType = 'post___internal___mediaType',
  PostInternalOwner = 'post___internal___owner',
  PostInternalType = 'post___internal___type',
  PostTitle = 'post___title',
  PostSlug = 'post___slug',
  PostPublishDate = 'post___publishDate',
  PostHeroImageId = 'post___heroImage___id',
  PostHeroImageParentId = 'post___heroImage___parent___id',
  PostHeroImageParentChildren = 'post___heroImage___parent___children',
  PostHeroImageChildren = 'post___heroImage___children',
  PostHeroImageChildrenId = 'post___heroImage___children___id',
  PostHeroImageChildrenChildren = 'post___heroImage___children___children',
  PostHeroImageInternalContent = 'post___heroImage___internal___content',
  PostHeroImageInternalContentDigest = 'post___heroImage___internal___contentDigest',
  PostHeroImageInternalDescription = 'post___heroImage___internal___description',
  PostHeroImageInternalFieldOwners = 'post___heroImage___internal___fieldOwners',
  PostHeroImageInternalIgnoreType = 'post___heroImage___internal___ignoreType',
  PostHeroImageInternalMediaType = 'post___heroImage___internal___mediaType',
  PostHeroImageInternalOwner = 'post___heroImage___internal___owner',
  PostHeroImageInternalType = 'post___heroImage___internal___type',
  PostHeroImageContentfulId = 'post___heroImage___contentful_id',
  PostHeroImageFileUrl = 'post___heroImage___file___url',
  PostHeroImageFileFileName = 'post___heroImage___file___fileName',
  PostHeroImageFileContentType = 'post___heroImage___file___contentType',
  PostHeroImageTitle = 'post___heroImage___title',
  PostHeroImageDescription = 'post___heroImage___description',
  PostHeroImageNodeLocale = 'post___heroImage___node_locale',
  PostHeroImageFixedBase64 = 'post___heroImage___fixed___base64',
  PostHeroImageFixedTracedSvg = 'post___heroImage___fixed___tracedSVG',
  PostHeroImageFixedAspectRatio = 'post___heroImage___fixed___aspectRatio',
  PostHeroImageFixedWidth = 'post___heroImage___fixed___width',
  PostHeroImageFixedHeight = 'post___heroImage___fixed___height',
  PostHeroImageFixedSrc = 'post___heroImage___fixed___src',
  PostHeroImageFixedSrcSet = 'post___heroImage___fixed___srcSet',
  PostHeroImageFixedSrcWebp = 'post___heroImage___fixed___srcWebp',
  PostHeroImageFixedSrcSetWebp = 'post___heroImage___fixed___srcSetWebp',
  PostHeroImageResolutionsBase64 = 'post___heroImage___resolutions___base64',
  PostHeroImageResolutionsTracedSvg = 'post___heroImage___resolutions___tracedSVG',
  PostHeroImageResolutionsAspectRatio = 'post___heroImage___resolutions___aspectRatio',
  PostHeroImageResolutionsWidth = 'post___heroImage___resolutions___width',
  PostHeroImageResolutionsHeight = 'post___heroImage___resolutions___height',
  PostHeroImageResolutionsSrc = 'post___heroImage___resolutions___src',
  PostHeroImageResolutionsSrcSet = 'post___heroImage___resolutions___srcSet',
  PostHeroImageResolutionsSrcWebp = 'post___heroImage___resolutions___srcWebp',
  PostHeroImageResolutionsSrcSetWebp = 'post___heroImage___resolutions___srcSetWebp',
  PostHeroImageFluidBase64 = 'post___heroImage___fluid___base64',
  PostHeroImageFluidTracedSvg = 'post___heroImage___fluid___tracedSVG',
  PostHeroImageFluidAspectRatio = 'post___heroImage___fluid___aspectRatio',
  PostHeroImageFluidSrc = 'post___heroImage___fluid___src',
  PostHeroImageFluidSrcSet = 'post___heroImage___fluid___srcSet',
  PostHeroImageFluidSrcWebp = 'post___heroImage___fluid___srcWebp',
  PostHeroImageFluidSrcSetWebp = 'post___heroImage___fluid___srcSetWebp',
  PostHeroImageFluidSizes = 'post___heroImage___fluid___sizes',
  PostHeroImageSizesBase64 = 'post___heroImage___sizes___base64',
  PostHeroImageSizesTracedSvg = 'post___heroImage___sizes___tracedSVG',
  PostHeroImageSizesAspectRatio = 'post___heroImage___sizes___aspectRatio',
  PostHeroImageSizesSrc = 'post___heroImage___sizes___src',
  PostHeroImageSizesSrcSet = 'post___heroImage___sizes___srcSet',
  PostHeroImageSizesSrcWebp = 'post___heroImage___sizes___srcWebp',
  PostHeroImageSizesSrcSetWebp = 'post___heroImage___sizes___srcSetWebp',
  PostHeroImageSizesSizes = 'post___heroImage___sizes___sizes',
  PostHeroImageResizeBase64 = 'post___heroImage___resize___base64',
  PostHeroImageResizeTracedSvg = 'post___heroImage___resize___tracedSVG',
  PostHeroImageResizeSrc = 'post___heroImage___resize___src',
  PostHeroImageResizeWidth = 'post___heroImage___resize___width',
  PostHeroImageResizeHeight = 'post___heroImage___resize___height',
  PostHeroImageResizeAspectRatio = 'post___heroImage___resize___aspectRatio',
  PostTags = 'post___tags',
  PostTagsId = 'post___tags___id',
  PostTagsParentId = 'post___tags___parent___id',
  PostTagsParentChildren = 'post___tags___parent___children',
  PostTagsChildren = 'post___tags___children',
  PostTagsChildrenId = 'post___tags___children___id',
  PostTagsChildrenChildren = 'post___tags___children___children',
  PostTagsInternalContent = 'post___tags___internal___content',
  PostTagsInternalContentDigest = 'post___tags___internal___contentDigest',
  PostTagsInternalDescription = 'post___tags___internal___description',
  PostTagsInternalFieldOwners = 'post___tags___internal___fieldOwners',
  PostTagsInternalIgnoreType = 'post___tags___internal___ignoreType',
  PostTagsInternalMediaType = 'post___tags___internal___mediaType',
  PostTagsInternalOwner = 'post___tags___internal___owner',
  PostTagsInternalType = 'post___tags___internal___type',
  PostTagsTitle = 'post___tags___title',
  PostTagsSlug = 'post___tags___slug',
  PostTagsPost = 'post___tags___post',
  PostTagsPostId = 'post___tags___post___id',
  PostTagsPostChildren = 'post___tags___post___children',
  PostTagsPostTitle = 'post___tags___post___title',
  PostTagsPostSlug = 'post___tags___post___slug',
  PostTagsPostPublishDate = 'post___tags___post___publishDate',
  PostTagsPostTags = 'post___tags___post___tags',
  PostTagsPostContentfulId = 'post___tags___post___contentful_id',
  PostTagsPostCreatedAt = 'post___tags___post___createdAt',
  PostTagsPostUpdatedAt = 'post___tags___post___updatedAt',
  PostTagsPostNodeLocale = 'post___tags___post___node_locale',
  PostTagsContentfulId = 'post___tags___contentful_id',
  PostTagsCreatedAt = 'post___tags___createdAt',
  PostTagsUpdatedAt = 'post___tags___updatedAt',
  PostTagsNodeLocale = 'post___tags___node_locale',
  PostBodyId = 'post___body___id',
  PostBodyParentId = 'post___body___parent___id',
  PostBodyParentChildren = 'post___body___parent___children',
  PostBodyChildren = 'post___body___children',
  PostBodyChildrenId = 'post___body___children___id',
  PostBodyChildrenChildren = 'post___body___children___children',
  PostBodyInternalContent = 'post___body___internal___content',
  PostBodyInternalContentDigest = 'post___body___internal___contentDigest',
  PostBodyInternalDescription = 'post___body___internal___description',
  PostBodyInternalFieldOwners = 'post___body___internal___fieldOwners',
  PostBodyInternalIgnoreType = 'post___body___internal___ignoreType',
  PostBodyInternalMediaType = 'post___body___internal___mediaType',
  PostBodyInternalOwner = 'post___body___internal___owner',
  PostBodyInternalType = 'post___body___internal___type',
  PostBodyBody = 'post___body___body',
  PostContentfulId = 'post___contentful_id',
  PostCreatedAt = 'post___createdAt',
  PostUpdatedAt = 'post___updatedAt',
  PostNodeLocale = 'post___node_locale',
  PostMetaDescriptionId = 'post___metaDescription___id',
  PostMetaDescriptionParentId = 'post___metaDescription___parent___id',
  PostMetaDescriptionParentChildren = 'post___metaDescription___parent___children',
  PostMetaDescriptionChildren = 'post___metaDescription___children',
  PostMetaDescriptionChildrenId = 'post___metaDescription___children___id',
  PostMetaDescriptionChildrenChildren = 'post___metaDescription___children___children',
  PostMetaDescriptionInternalContent = 'post___metaDescription___internal___content',
  PostMetaDescriptionInternalContentDigest = 'post___metaDescription___internal___contentDigest',
  PostMetaDescriptionInternalDescription = 'post___metaDescription___internal___description',
  PostMetaDescriptionInternalFieldOwners = 'post___metaDescription___internal___fieldOwners',
  PostMetaDescriptionInternalIgnoreType = 'post___metaDescription___internal___ignoreType',
  PostMetaDescriptionInternalMediaType = 'post___metaDescription___internal___mediaType',
  PostMetaDescriptionInternalOwner = 'post___metaDescription___internal___owner',
  PostMetaDescriptionInternalType = 'post___metaDescription___internal___type',
  PostMetaDescriptionMetaDescription = 'post___metaDescription___metaDescription',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  NodeLocale = 'node_locale',
}

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

export enum ExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
}

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

export enum HeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum ImageResizingBehavior {
  NoChange = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = 'PAD',
  /** Crop a part of the original image to match the specified size. */
  Crop = 'CROP',
  /** Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  Fill = 'FILL',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = 'THUMB',
  /** Scale the image regardless of the original aspect ratio. */
  Scale = 'SCALE',
}

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

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  FrontmatterTitle = 'frontmatter___title',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
}

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

export enum SiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataRssMetadataSiteUrl = 'siteMetadata___rssMetadata___site_url',
  SiteMetadataRssMetadataFeedUrl = 'siteMetadata___rssMetadata___feed_url',
  SiteMetadataRssMetadataTitle = 'siteMetadata___rssMetadata___title',
  SiteMetadataRssMetadataDescription = 'siteMetadata___rssMetadata___description',
  SiteMetadataRssMetadataImageUrl = 'siteMetadata___rssMetadata___image_url',
  SiteMetadataRssMetadataAuthor = 'siteMetadata___rssMetadata___author',
  SiteMetadataRssMetadataCopyright = 'siteMetadata___rssMetadata___copyright',
  Port = 'port',
  Host = 'host',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  BuildTime = 'buildTime',
}

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

export enum SitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextLimit = 'context___limit',
  ContextSkip = 'context___skip',
  ContextNumPages = 'context___numPages',
  ContextCurrentPage = 'context___currentPage',
  ContextSlug = 'context___slug',
  ContextPrevSlug = 'context___prev___slug',
  ContextPrevPublishDate = 'context___prev___publishDate',
  ContextNextSlug = 'context___next___slug',
  ContextNextPublishDate = 'context___next___publishDate',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsSsrApIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsSiteUrl = 'pluginCreator___pluginOptions___siteUrl',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsLinkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  PluginCreatorPluginOptionsHost = 'pluginCreator___pluginOptions___host',
  PluginCreatorPluginOptionsSpaceId = 'pluginCreator___pluginOptions___spaceId',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorPluginOptionsEnvironment = 'pluginCreator___pluginOptions___environment',
  PluginCreatorPluginOptionsHead = 'pluginCreator___pluginOptions___head',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsDescription = 'pluginCreator___pluginOptions___description',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsQuery = 'pluginCreator___pluginOptions___query',
  PluginCreatorPluginOptionsFeeds = 'pluginCreator___pluginOptions___feeds',
  PluginCreatorPluginOptionsFeedsQuery = 'pluginCreator___pluginOptions___feeds___query',
  PluginCreatorPluginOptionsFeedsOutput = 'pluginCreator___pluginOptions___feeds___output',
  PluginCreatorPluginOptionsColor = 'pluginCreator___pluginOptions___color',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

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

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsBackgroundColor = 'pluginOptions___plugins___pluginOptions___backgroundColor',
  PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsSsrApIs = 'pluginOptions___plugins___ssrAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsSiteUrl = 'pluginOptions___siteUrl',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsHost = 'pluginOptions___host',
  PluginOptionsSpaceId = 'pluginOptions___spaceId',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsEnvironment = 'pluginOptions___environment',
  PluginOptionsHead = 'pluginOptions___head',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsDescription = 'pluginOptions___description',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsFeeds = 'pluginOptions___feeds',
  PluginOptionsFeedsQuery = 'pluginOptions___feeds___query',
  PluginOptionsFeedsOutput = 'pluginOptions___feeds___output',
  PluginOptionsColor = 'pluginOptions___color',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

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
}

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly maxWidth?: Maybe<IntQueryOperatorInput>
  readonly backgroundColor?: Maybe<StringQueryOperatorInput>
  readonly linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>
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

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

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
export type IndexTemplateQueryVariables = {
  skip: Scalars['Int']
  limit: Scalars['Int']
}

export type IndexTemplateQuery = {
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

export type PageTemplateQueryVariables = {
  slug: Scalars['String']
}

export type PageTemplateQuery = {
  readonly contentfulPage: Maybe<
    Pick<ContentfulPage, 'title' | 'slug'> & {
      readonly metaDescription: Maybe<{
        readonly internal: Pick<Internal, 'content'>
      }>
      readonly body: Maybe<{
        readonly childMarkdownRemark: Maybe<
          Pick<MarkdownRemark, 'html' | 'excerpt'>
        >
      }>
    }
  >
}

export type PostTemplateQueryVariables = {
  slug: Scalars['String']
}

export type PostTemplateQuery = {
  readonly contentfulPost: Maybe<
    Pick<ContentfulPost, 'title' | 'slug' | 'publishDate'> & {
      readonly publishDateISO: ContentfulPost['publishDate']
    } & {
      readonly metaDescription: Maybe<{
        readonly internal: Pick<Internal, 'content'>
      }>
      readonly tags: Maybe<
        ReadonlyArray<Maybe<Pick<ContentfulTag, 'title' | 'id' | 'slug'>>>
      >
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
          readonly ogimg: Maybe<
            Pick<ContentfulResize, 'src' | 'width' | 'height'>
          >
        }
      >
      readonly body: Maybe<{
        readonly childMarkdownRemark: Maybe<
          Pick<MarkdownRemark, 'html' | 'excerpt'>
        >
      }>
    }
  >
}

export type TagTemplateQueryVariables = {
  slug: Scalars['String']
}

export type TagTemplateQuery = {
  readonly contentfulTag: Maybe<
    Pick<ContentfulTag, 'title' | 'id' | 'slug'> & {
      readonly post: Maybe<
        ReadonlyArray<
          Maybe<
            Pick<ContentfulPost, 'id' | 'title' | 'slug' | 'publishDate'> & {
              readonly publishDateISO: ContentfulPost['publishDate']
            } & {
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
          >
        >
      >
    }
  >
}
