'use client'

import * as React from 'react'

type RootProps = React.ComponentProps<'div'>

type FileInputContextProps = {
  id: string
  files: Array<File>
  onFilesSelected: (files: Array<File>) => void
}

const FileInputContext = React.createContext({} as FileInputContextProps)

export function Root(props: RootProps) {
  const id = React.useId()
  const [files, setFiles] = React.useState<Array<File>>([])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => React.useContext(FileInputContext)
