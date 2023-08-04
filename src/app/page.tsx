'use client'

import * as React from 'react'
import * as Tabs from '@/components/Tabs'

export default function Home() {
  const [currentTab, setCurrentTab] = React.useState<string>('my-details')

  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
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
        <Tabs.Item value="eam" title="Team" isSelected={currentTab === 'eam'} />
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
        <Tabs.Item value="api" title="API" isSelected={currentTab === 'api'} />
      </Tabs.Root>
    </>
  )
}
