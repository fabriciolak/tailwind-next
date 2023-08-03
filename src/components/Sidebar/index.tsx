import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  Layers,
  Users,
  Search,
  LifeBuoy,
  Settings,
} from 'lucide-react'
import { Logo } from './logo'
import { NavItem } from './Navigation/NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-1 flex h-11  items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5" />

        <input
          className="h-full w-full border-0 bg-transparent p-0 text-zinc-900 outline-0 placeholder:text-zinc-600"
          placeholder="search"
        />
      </div>

      <nav className=" space-y-0.5 ">
        <NavItem href="/" title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={Layers} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className=" space-y-0.5 ">
          <NavItem href="/" title="Support" icon={LifeBuoy} />
          <NavItem href="/" title="Settings" icon={Settings} />
        </nav>

        <UsedSpaceWidget />
      </div>

      <div className="h-px bg-zinc-200"></div>

      <Profile />
    </aside>
  )
}
