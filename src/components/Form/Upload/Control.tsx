'use client'

import { useFileInput } from './Root'

type ControlProps = React.ComponentProps<'input'>

export function Control(props: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files)
  }

  return (
    <input
      type="file"
      onChange={handleFilesSelected}
      id={id}
      className="sr-only"
      {...props}
    />
  )
}
