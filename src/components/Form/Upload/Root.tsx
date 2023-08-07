'use client'

import * as React from 'react'

type RootProps = React.ComponentProps<'div'>

type FileInputContextProps = {
  id: string
  files: Array<File>
  onFilesSelected: (files: Array<File>, multiple: boolean) => void
}

const FileInputContext = React.createContext({} as FileInputContextProps)

export function Root(props: RootProps) {
  const id = React.useId()
  const [files, setFiles] = React.useState<Array<File>>([])

  function onFilesSelected(files: Array<File>, multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => React.useContext(FileInputContext)
