import { BarChart, CheckSquare, Flag, Home, Layers, Users } from 'lucide-react'
import { NavItem } from './NavItem'

export function Navigation() {
  return (
    <nav className=" space-y-0.5 ">
      <NavItem href="/" title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart} />
      <NavItem title="Projects" icon={Layers} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  )
}
