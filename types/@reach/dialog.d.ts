declare module '@reach/dialog' {
  export interface DialogProps
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
    isOpen: boolean
    children?: React.ReactNode
    onDismiss: () => void
  }

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

  export const Dialog: (props: DialogProps) => JSX.Element

  export const Component: <T>(props: ComponentProps<T>) => JSX.Element
}
