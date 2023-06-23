'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function AuthProvider({children}) {
  return (
    <div>
          <SessionProvider>{ children}</SessionProvider>
    </div>
  )
}
