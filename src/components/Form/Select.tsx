'use client'

import { Check, ChevronDown } from 'lucide-react'
import * as RadixSelect from '@radix-ui/react-select'

export function Select() {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none data-[placeholder]:text-zinc-600">
        <RadixSelect.Value
          placeholder="Select a country..."
          className="text-black"
        />
        <RadixSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white"
        >
          <RadixSelect.Viewport>
            <RadixSelect.Item
              value="br"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <RadixSelect.ItemText className="text-black">
                Brazil
              </RadixSelect.ItemText>

              <RadixSelect.ItemIndicator>
                <Check className="h-5 w-5 text-violet-500" />
              </RadixSelect.ItemIndicator>
            </RadixSelect.Item>

            <RadixSelect.Item
              value="us"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <RadixSelect.ItemText className="text-black">
                United State
              </RadixSelect.ItemText>

              <RadixSelect.ItemIndicator>
                <Check className="h-5 w-5 text-violet-500" />
              </RadixSelect.ItemIndicator>
            </RadixSelect.Item>
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
