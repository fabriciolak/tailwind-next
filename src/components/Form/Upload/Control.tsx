type ControlProps = React.ComponentProps<'input'>

export function Control(props: ControlProps) {
  return <input type="file" id="uploadPhoto" className="sr-only" {...props} />
}
