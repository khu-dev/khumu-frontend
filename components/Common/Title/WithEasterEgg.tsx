import { useRouter } from 'next/router'
import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useState,
} from 'react'

interface Props {
  children: ReactNode
}

const WithEasterEgg = ({ children }: Props) => {
  const child = Children.only(children) as ReactElement
  const router = useRouter()

  const [count, setCount] = useState(0)

  const handleRoute = () => {
    router.push('/easter_egg')
  }

  const handleActiveEasterEgg = () => {
    if (count > 10) {
      handleRoute()
    }

    setCount((prev) => prev + 1)
  }

  return cloneElement(child, {
    onClick: handleActiveEasterEgg,
  })
}

export default WithEasterEgg
