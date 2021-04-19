import { ItemContainer } from '@components/utils/container.styled';
import { ContentContainer } from './Main.styled';
import Feed from './items/Feed.container';

const MainPresenter = (props: any) => {
  return (
    <ContentContainer>
      <Feed />
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
