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
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state='active']:text-violet-700"
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>

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
  return <RadixTabs.Root {...props}>{props.children}</RadixTabs.Root>
}
