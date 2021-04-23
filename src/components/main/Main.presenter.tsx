import { ItemContainer } from '@components/utils/styles/container.styled';
import { ContentContainer } from './Main.styled';
import Feed from './items/Feed.container';
import { ScrollAnimationItem } from '@components/utils/hoc/ScrollAnimationItem';
import { LTitle, TitleContainer } from '@components/utils/styles/title.styled';
import { theme } from '@components/utils/styles/theme';

const itemList = [
  {
    title: '오늘의 공지사항',
    flexDirection: 'column',
    numOfContents: 2,
  },
  {
    title: '동아리',
    flexDirection: '',
    numOfContents: 1,
  },
  {
    title: '광고',
    flexDirection: '',
    numOfContents: 1,
  },
  {
    title: '실시간 인기글',
    flexDirection: '',
    numOfContents: 1,
  },
  {
    title: '정보',
    flexDirection: 'row',
    numOfContents: 2,
  },
  {
    title: '바로가기',
    flexDirection: 'row',
    numOfContents: 3,
  },
];

const MainPresenter = (props: any) => {
  return (
    <ContentContainer>
      <Feed />
      {itemList.map((item, idx) => (
        <ScrollAnimationItem
          key={item.title}
          init={{
            isInit: idx < 2,
            idx,
          }}
        >
          {item.title !== '광고' && (
            <TitleContainer>
              <LTitle color={theme.color.main}>{item.title}</LTitle>
            </TitleContainer>
          )}
          <div
            style={{
              width: '100%',
              flex: 5,
              display: 'flex',
              flexDirection: item.flexDirection || 'row',
            }}
          >
            {Array(item.numOfContents)
              .fill(0)
              .map((content) => (
                <div
                  key={item.title + idx}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: `1px solid ${theme.color.main}`,
                    borderRadius: theme.borderRadius,
                  }}
                ></div>
              ))}
          </div>
        </ScrollAnimationItem>
      ))}
    </ContentContainer>
  );
};

export default MainPresenter;
