import { theme } from '@components/utils/theme';
import styled from 'styled-components';

export const FeedContents = styled.div`
  display: flex;
  flex-direction: column;
  width: ${theme.margin.width};
  height: 100%;
  margin: 20px 32px;
  justify-content: space-evenly;
`;

export const LectureContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const LectureName = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;
`;

export const LectureCheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  width: 13px;
  height: 13px;
  margin-right: 12px;
`;
