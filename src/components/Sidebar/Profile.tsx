import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="flex items-center gap-3 ">
      <Image
        src="https://github.com/fabriciolak.png"
        alt="Image Profile"
        className="h-10 w-10 rounded-full"
        width={40}
        height={40}
      />

      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Fabrício Silva
        </span>
        <span className="truncate text-sm text-zinc-500">
          fabriciolak12@gmail.com
        </span>
      </div>

      <button
        type="button"
        className="p2 ml-auto rounded-md p-2 hover:bg-zinc-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
