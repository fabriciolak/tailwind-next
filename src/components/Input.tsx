type InputPrefixProps = React.ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props}></div>
}

type InputControlProps = React.ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="h-full w-full border-0 bg-transparent p-0 text-zinc-900 outline-0 placeholder:text-zinc-600"
      placeholder="search"
      {...props}
    />
  )
}

type InputRootProps = React.ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex h-11  items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    ></div>
  )
}
