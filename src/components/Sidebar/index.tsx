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
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'
import * as Navigation from './Navigation'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search />
        </Input.Prefix>

        <Input.Control />
      </Input.Root>

      <Navigation.Root>
        <Navigation.Item href="/" title="Home" icon={Home} />
        <Navigation.Item title="Dashboard" icon={BarChart} />
        <Navigation.Item title="Projects" icon={Layers} />
        <Navigation.Item title="Tasks" icon={CheckSquare} />
        <Navigation.Item title="Reporting" icon={Flag} />
        <Navigation.Item title="Users" icon={Users} />
      </Navigation.Root>

      <div className="mt-auto flex flex-col gap-6">
        <Navigation.Root>
          <Navigation.Item href="/" title="Support" icon={LifeBuoy} />
          <Navigation.Item href="/" title="Settings" icon={Settings} />
        </Navigation.Root>

        <UsedSpaceWidget />
      </div>

      <div className="h-px bg-zinc-200"></div>

      <Profile />
    </aside>
  )
}
