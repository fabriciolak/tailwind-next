import { ChevronDown } from 'lucide-react'
import { AnchorHTMLAttributes } from 'react'

interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string
  icon: React.ElementType
}

export function NavItem({ title, icon: Icon, href, ...props }: NavItemProps) {
  return (
    <a
      href={href}
      className="py2 hover group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
      {...props}
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-700">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400" />
    </a>
  )
}
