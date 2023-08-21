type PrefixProps = React.ComponentProps<'div'>

export function Prefix(props: PrefixProps) {
  return <div {...props}></div>
}

type ControlProps = React.ComponentProps<'input'>

export function Control(props: ControlProps) {
  return (
    <input
      className="h-full w-full border-0 bg-transparent p-0 text-zinc-900 outline-none placeholder:text-zinc-600"
      placeholder="search"
      {...props}
    />
  )
}

type RootProps = React.ComponentProps<'div'>

export function Root(props: RootProps) {
  return (
    <div
      className="flex h-11 items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...props}
    ></div>
  )
}
