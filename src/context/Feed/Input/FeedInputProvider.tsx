import { FeedInputContext } from './FeedInputContext'
import { useSearchAreaFocus } from '@hooks/Main/useSearchAreaFocus'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const FeedInputProvider = ({ children }: Props) => {
  const { focus, ...handler } = useSearchAreaFocus()

  return (
    <FeedInputContext.Provider value={{ focus, handler }}>
      {children}
    </FeedInputContext.Provider>
  )
}

export default FeedInputProvider
