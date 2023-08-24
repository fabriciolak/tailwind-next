'use client'

import { ChevronDown } from 'lucide-react'
import * as RadixSelect from '@radix-ui/react-select'
import React from 'react'

interface SelectProps extends RadixSelect.SelectProps {
  children: React.ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger className="dark:data-[placeholder]:zinc-400 flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus-within:border-zinc-500 dark:focus-within:ring-zinc-500/10">
        <RadixSelect.Value placeholder={placeholder} className="text-black" />
        <RadixSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-800"
        >
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
