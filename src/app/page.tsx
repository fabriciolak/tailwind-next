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

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings-form"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form id="settings-form" className="mt-6 flex w-full flex-col">
          form
        </form>
      </div>
    </>
  )
}
