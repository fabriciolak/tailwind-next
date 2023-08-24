'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

type SelectItemProps = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      <Select.ItemText asChild>
        <span className="text-black dark:text-zinc-100">{text}</span>
      </Select.ItemText>

      <Select.ItemIndicator>
        <Check className="h-5 w-5 text-violet-500 dark:via-violet-300" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
