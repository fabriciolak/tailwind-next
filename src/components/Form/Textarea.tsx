import * as React from 'react'

type TextareaProps = React.ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="min-h-[128px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-zinc-500 dark:focus:ring-zinc-500/10"
      {...props}
    />
  )
}
