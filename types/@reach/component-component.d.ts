declare module '@reach/component-component' {
  export interface ComponentRenderProps<T> {
    state: T
    props: any
    refs: any
    setState: (state: Partial<T>) => void
    forceUpdate: any
  }

  export interface ComponentProps<T> {
    initialState?: T
    getInitialState?: any
    refs?: any
    getRefs?: any
    didMount?: any
    didUpdate?: any
    willUnmount?: any
    getSnapshotBeforeUpdate?: any
    shouldUpdate?: any
    children: (props: ComponentRenderProps<T>) => JSX.Element
  }
  export default <T>(props: ComponentProps<T>) => JSX.Element
}
