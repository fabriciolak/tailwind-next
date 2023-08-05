import React from 'react'

type RootProps = React.ComponentProps<'div'>

export function Root(props: RootProps) {
  return <div {...props} />
}
