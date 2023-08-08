'use client'

import * as React from 'react'
import * as Tabs from '@/components/Tabs'
import * as Input from '@/components/Input'
import * as Upload from '@/components/Form/Upload'
import { Select } from '@/components/Form/Select'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'

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

        <form
          id="settings-form"
          className="mt-6 flex w-full flex-col gap-5 divide-y-2 divide-zinc-200"
        >
          {/* Name */}
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>

            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Fabricio" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Silva" />
              </Input.Root>
            </div>
          </div>

          {/* Email Address */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="emailAddress"
              className="text-sm font-medium text-zinc-700"
            >
              Email Address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="emailAddress"
                type="email"
                defaultValue="fabriciolak12@gmail.com"
              />
            </Input.Root>
          </div>

          {/* Your Photo */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="yourPhoto"
              className="text-sm font-medium text-zinc-700"
            >
              Your Photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <div>
              <Upload.Root className="flex items-start gap-5">
                <Upload.ImagePreview />

                <Upload.Trigger />
                <Upload.Control />
              </Upload.Root>
            </div>
          </div>

          {/* Role */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <Input.Root>
              <Input.Control id="role" defaultValue="Frontend Developer" />
            </Input.Root>
          </div>

          {/* Country */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <Select defaultValue="br" placeholder="Select a country">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
              <SelectItem value="in" text="India" />
              <SelectItem value="de" text="Germany" />
            </Select>
          </div>

          {/* Timezone */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <Select defaultValue="br-brt" placeholder="Select a timezone">
              <SelectItem value="br-brt" text="Brasília Time (BRT) UTC -3" />
              <SelectItem
                value="us-est"
                text="Eastern standard time (EST) UTC-05:00"
              />
              <SelectItem
                value="in-ist"
                text="India Standard Time (IST) UTC+5:30"
              />
              <SelectItem
                value="ge-cest"
                text="Central European Summer Time (CEST) UTC +2"
              />
            </Select>
          </div>

          {/* Bio */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3 ">
                <Select defaultValue="normal" placeholder="">
                  <SelectItem value="normal" text="Normal text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="p2 rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="p2 rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="p2 rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="p2 rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="p2 rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>

              <Textarea
                id="bio "
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          {/* Portfolio projects */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="portfolioProjects"
              className="flex flex-col text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <Upload.Root>
              <Upload.Trigger />
              <Upload.FileList />
              <Upload.Control multiple />
            </Upload.Root>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
