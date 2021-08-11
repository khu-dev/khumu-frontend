import LinkIcon from '@components/Link';
import * as cs from '../common.styled';
import * as s from './styled';

const Shortcut = () => {
  const shortcuts = [
    { title: '중앙도서관', path: '' },
    { title: '인포21', path: '' },
    { title: '이캠퍼스', path: '' },
  ];

  return (
    <cs.MainSection>
      <cs.MainTitle>바로가기</cs.MainTitle>
      <s.Container>
        {shortcuts.map((shortcut) => (
          <LinkIcon key={shortcut.title} pathname={shortcut.path}>
            <s.ShortcutItem>{shortcut.title}</s.ShortcutItem>
          </LinkIcon>
        ))}{' '}
      </s.Container>
    </cs.MainSection>
  );
};

export default Shortcut;
