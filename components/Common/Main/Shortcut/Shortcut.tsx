import LinkIcon from '@components/Common/Link'
import { useLoading } from '@context/Loading'
import * as cs from '../common.styled'
import * as s from './styled'

const Shortcut = () => {
  const { isLoading } = useLoading()
  const shortcuts = [
    { title: '중앙도서관', path: 'https://library.khu.ac.kr/home/' },
    { title: '인포21', path: 'https://info21.khu.ac.kr/' },
    { title: '이캠퍼스', path: 'https://e-campus.khu.ac.kr/' },
  ]

  return !isLoading ? (
    <cs.MainSection>
      <cs.MainTitle>바로가기</cs.MainTitle>
      <s.Container>
        {shortcuts.map((shortcut) => (
          <LinkIcon
            key={shortcut.title}
            pathname={shortcut.path}
            target="_blank"
          >
            <s.ShortcutItem>{shortcut.title}</s.ShortcutItem>
          </LinkIcon>
        ))}
      </s.Container>
    </cs.MainSection>
  ) : null
}

export default Shortcut
