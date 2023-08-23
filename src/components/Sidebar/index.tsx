'use client'

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
  Menu,
} from 'lucide-react'
import { Logo } from './logo'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'
import * as Navigation from './Navigation'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button type="button" variant="ghost">
            <Menu className="h-6 w-6 text-zinc-500" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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

          <div className="h-px bg-zinc-200"></div>

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
