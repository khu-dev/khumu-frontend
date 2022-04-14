import { useRouter } from 'next/router'
import * as s from './SearchArea.styled'

const TextArea = () => {
  const router = useRouter()

  return (
    <s.OuterContainer>
      <s.SearchLabel>
        <s.SearchForm>
          <s.DecorationSpan />
          <s.TextInput
            type="text"
            name="search"
            placeholder="자유로운 피드백 부탁드립니다"
            onFocus={() => {
              router.push('/feedback')
            }}
          />
        </s.SearchForm>
      </s.SearchLabel>
    </s.OuterContainer>
  )
}

export default TextArea
