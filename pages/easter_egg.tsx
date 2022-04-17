import { useToken } from '@context/Token'
import { useUser } from '@context/User'
import { useRouter } from 'next/router'

import ReactJson from 'react-json-view'

const EasterEgg = () => {
  const router = useRouter()
  const { user } = useUser()
  const { token } = useToken()

  return (
    <section>
      <div>
        <h3>유저</h3>
        <ReactJson src={user} sortKeys />
        <h3>토큰</h3>
        <ReactJson src={{ token }} sortKeys />

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
