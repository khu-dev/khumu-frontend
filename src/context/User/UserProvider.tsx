import { useState, useEffect, ReactNode } from 'react'

import { UserApi } from '@api/UserApi'
import { useToken } from '@context/Token'
import { User } from '@interface/User'

import { UserContext } from './UserContext'

interface Props {
  children: ReactNode
}

export default function UserProvider({ children }: Props) {
  const { token } = useToken()
  const [user, setUser] = useState<User>()

  useEffect(() => {
    if (!token) return

    UserApi.check()
      .then(({ data, status }) => {
        if (status === 200) {
          setUser((prev) => ({
            ...prev,
            ...data.data,
          }))
        }
      })
      .catch(() => {})
  }, [token])

  const updateUser = (info: User) => {
    setUser((prev) => ({
      ...prev,
      ...info,
    }))
  }

  return (
    <UserContext.Provider
      value={{
        user: {
          ...user,
        },
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
