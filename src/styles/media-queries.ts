// these sizes are arbitrary and you can set them to whatever you wish
const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`

const media = {
  sm: customMediaQuery(576),
  md: customMediaQuery(768),
  lg: customMediaQuery(992),
  xl: customMediaQuery(1200),
}

export {media}
