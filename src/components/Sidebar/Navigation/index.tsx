import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { tw } from '@/utils'

type NavigationRootProps = React.ComponentProps<'nav'>

export function Root(props: NavigationRootProps) {
  return (
    <nav className=" space-y-0.5" {...props}>
      {props.children}
    </nav>
  )
}

interface NavigationItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string
  icon: React.ElementType
}

export function Item({
  title,
  href,
  icon: Icon,
  ...props
}: NavigationItemProps) {
  return (
    <a
      href={href}
      className={tw(
        'group flex items-center gap-3 rounded px-3 py-2 outline-none hover:bg-violet-50',
        'dark:hover:bg-zinc-800',
      )}
      {...props}
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-700 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400 dark:text-zinc-600" />
    </a>
  )
}
