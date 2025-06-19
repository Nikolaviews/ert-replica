import React from 'react'

const layout = ({ children }: React.PropsWithChildren<object>) => {
  return (
    <>
      <nav></nav>
      {children}
    </>
  )
}

export default layout