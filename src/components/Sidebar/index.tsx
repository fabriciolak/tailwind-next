import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  Layers,
  Users,
  LifeBuoy,
  Settings,
  Search,
} from 'lucide-react'
import { Logo } from './logo'
import { NavItem } from './Navigation/NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <InputRoot>
        <InputPrefix>
          <Search />
        </InputPrefix>

        <InputControl />
      </InputRoot>

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
