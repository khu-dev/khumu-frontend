import { ItemContainer } from '@components/utils/styles/container.styled';
import { ContentContainer } from './Main.styled';
import Feed from './items/Feed.container';
import { ScrollAnimationItem } from '@components/utils/hoc/ScrollAnimationItem';

const Div = () => <div>hihi;</div>;

// const Aa = withItemScroll(Div);
// console.log(Aa);

const MainPresenter = (props: any) => {
  return (
    <ContentContainer>
      <Feed />
      {Array(5)
        .fill(0)
        .map((item, idx) => (
          <ScrollAnimationItem
            key={item + idx}
            init={{
              isInit: idx < 2,
              idx,
            }}
          >
            <Div />
          </ScrollAnimationItem>
        ))}
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
