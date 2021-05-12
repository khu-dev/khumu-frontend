import styled from '@emotion/styled';
import { theme } from '@constants/theme';

import FeedLecture from './FeedLecture';
import { TabType } from './type';

const FeedItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: ${theme.margin.base};
  width: ${theme.margin.width};
  height: 140px;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.color.white};
`;

export default function FeedContent({ currentTab }: { currentTab: TabType }) {
  return (
    <FeedItem>
      {currentTab === 'lecture' ? (
        <FeedLecture isLoading={true} />
      ) : (
        <FeedLecture isLoading={true} />
      )}
    </FeedItem>
  );
}
