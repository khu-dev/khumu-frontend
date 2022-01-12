import { ReactNode, useEffect, useState } from 'react'
import { accesskey } from '@config/_key'
import { TokenContext } from './TokenContext'
import { refreshToken } from '@module/webClient'

const devToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || accesskey

interface Props {
  children: ReactNode
}

export default function TokenProvider({ children }: Props) {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = ((window as any)?.Android as any)?.getToken() || devToken
    refreshToken(token)
    setToken(token)
  }, [])

  return (
    <TokenContext.Provider
      value={{
        token,
      }}
    >
      {children}
    </TokenContext.Provider>
  )
}
