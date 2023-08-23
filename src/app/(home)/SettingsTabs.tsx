'use client'

import * as React from 'react'
import * as Tabs from '@/components/Tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as TabsPrimitive from '@radix-ui/react-tabs'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = React.useState<string>('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="flex" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <TabsPrimitive.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            <Tabs.Item
              value="my-details"
              title="My Details"
              isSelected={currentTab === 'my-details'}
            />
            <Tabs.Item
              value="profile"
              title="Profile"
              isSelected={currentTab === 'profile'}
            />
            <Tabs.Item
              value="password"
              title="Password"
              isSelected={currentTab === 'password'}
            />
            <Tabs.Item
              value="eam"
              title="Team"
              isSelected={currentTab === 'eam'}
            />
            <Tabs.Item
              value="plan"
              title="Plan"
              isSelected={currentTab === 'plan'}
            />
            <Tabs.Item
              value="billing"
              title="Billing"
              isSelected={currentTab === 'billing'}
            />
            <Tabs.Item
              value="email"
              title="Email"
              isSelected={currentTab === 'email'}
            />
            <Tabs.Item
              value="notifications"
              title="Notifications"
              isSelected={currentTab === 'notifications'}
            />
            <Tabs.Item
              value="integrations"
              title="Integrations"
              isSelected={currentTab === 'integrations'}
            />
            <Tabs.Item
              value="api"
              title="API"
              isSelected={currentTab === 'api'}
            />
          </TabsPrimitive.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
