import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { useToken } from '@context/Token'
import { useUser } from '@context/User'

const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false })

const EasterEgg = () => {
  const router = useRouter()
  const { user } = useUser()
  const { token } = useToken()

  return (
    <section>
      <div>
        <h3>유저</h3>
        <DynamicReactJson src={user} sortKeys />
        <h3>토큰</h3>
        <DynamicReactJson src={{ token }} sortKeys />

        <button
          onClick={() => {
            router.replace('/main')
          }}
        >
          GO BACK
        </button>
      </div>
    </section>
  )
}

export default EasterEgg
