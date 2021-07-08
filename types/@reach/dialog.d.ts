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

  export const Dialog: (props: DialogProps) => JSX.Element
}
