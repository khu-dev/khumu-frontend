import { ItemContainer } from '@components/utils/styled';
import { theme } from '@components/utils/theme';
import { ContentContainer, PeedContainer } from './Main.styled';

const MainPresenter = (props: any) => {
  return (
    <ContentContainer>
      <PeedContainer>
        <ItemContainer>ㅍㅣ드</ItemContainer>
      </PeedContainer>
      <ItemContainer>공지사항</ItemContainer>
      <ItemContainer>동아리</ItemContainer>
      <ItemContainer>광고</ItemContainer>
      <ItemContainer>실시간 인기 글</ItemContainer>
      <ItemContainer>정보</ItemContainer>
      <ItemContainer>바로가기</ItemContainer>
    </ContentContainer>
  );
};

export default MainPresenter;
