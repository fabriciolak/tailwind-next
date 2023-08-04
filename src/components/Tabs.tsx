'use client'

import * as RadixTabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

interface ItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function Item({ value, title, isSelected = false }: ItemProps) {
  return (
    <RadixTabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state='active']:text-violet-700"
    >
      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 rounded-full bg-violet-700"
        ></motion.div>
      )}
    </RadixTabs.Trigger>
  )
}

type RootProps = React.RefAttributes<HTMLDivElement> & RadixTabs.TabsProps

export function Root({ ...props }: RootProps) {
  return (
    <RadixTabs.Root {...props}>
      <RadixTabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {props.children}
      </RadixTabs.List>
    </RadixTabs.Root>
  )
}
