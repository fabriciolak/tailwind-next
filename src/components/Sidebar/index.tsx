import { Navigation } from './Navigation'
import { Logo } from './logo'
import { Search } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="mx-1 flex h-11  items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5" />

        <input
          className="h-full w-full border-0 bg-transparent p-0 text-zinc-900 outline-0 placeholder:text-zinc-600"
          placeholder="search"
        />
      </div>

      <Navigation />
    </aside>
  )
}
