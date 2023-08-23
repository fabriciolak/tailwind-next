import * as React from 'react'

import { SettingsTabs } from './SettingsTabs'

import * as Input from '@/components/Input'
import * as Upload from '@/components/Form/Upload'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings-form">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings-form"
          className="mt-6 flex w-full flex-col gap-5 divide-y-2 divide-zinc-200"
        >
          {/* Name */}
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Fabricio" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 lg:hidden"
                >
                  Last name
                </label>
              </div>
              <Input.Root>
                <Input.Control id="lastName" defaultValue="Silva" />
              </Input.Root>
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
              <Upload.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
                <Upload.ImagePreview />

                <Upload.Trigger />
                <Upload.Control />
              </Upload.Root>
            </div>
          </div>

          {/* Role */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <Input.Root>
              <Input.Control id="role" defaultValue="Frontend Developer" />
            </Input.Root>
          </div>

          {/* Country */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2 ">
                <Select defaultValue="normal" placeholder="">
                  <SelectItem value="normal" text="Normal text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button variant="ghost" type="button">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button
                    variant="ghost"
                    type="button"
                    className="p2 rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button
                    variant="ghost"
                    type="button"
                    className="p2 rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button
                    variant="ghost"
                    type="button"
                    className="p2 rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button
                    variant="ghost"
                    type="button"
                    className="p2 rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio "
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          {/* Portfolio projects */}
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings-form">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
