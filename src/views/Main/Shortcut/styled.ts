import { box, color } from '@constants/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: ${box.marginWidth};
  margin: ${box.margin};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShortcutItem = styled.div`
  width: 72px;
  height: 32px;
  border-radius: ${box.borderRadius};
  border: 2px solid ${color.main};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-align: center;
`;
