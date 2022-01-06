import React, { ReactNode, useState } from 'react'
import { MainContext } from './MainContext'
import { FeedValueProps } from './type'

interface Props {
  children: ReactNode
}

export default function MainContextProvider({ children }: Props) {
  const [value, setValue] = useState({
    feed: {
      name: '',
      time: '',
    },
  })

  const updateFeed = (feed: FeedValueProps) => {
    setValue({
      ...value,
      feed,
    })
  }

  return (
    <MainContext.Provider
      value={{
        ...value,
        dispatch: {
          updateFeed,
        },
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
