import { FC, ReactNode, useState } from 'react'
import { LoadingContext } from './Context'

interface Props {
  children: ReactNode
}

const LoadingProvider: FC<Props> = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(true)

  const handleLoadingStart = () => {
    setLoading(true)
  }

  const handleLoadingEnd = () => {
    setLoading(false)
  } 

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        handleLoadingStart,
        handleLoadingEnd,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingProvider
