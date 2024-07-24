import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <main className='min-h-screen'>{children}</main>
  )
}

export default layout