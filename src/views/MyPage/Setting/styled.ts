import styled from '@emotion/styled';
import { box, color } from '@constants/theme';

export const Container = styled.div`
  width: ${box.paddingWidth};
  flex-grow: 1;

  padding: ${box.padding};

  background-color: #e4e4e4;
`;

export const SetItem = styled.div`
  width: ${box.marginWidth};
  height: 56px;
  margin: ${box.margin};
  background-color: #4d4d4d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${box.borderRadius};
`;

export const Subject = styled.span`
  font-size: 17px;
  font-weight: 500;
  color: ${color.white};
  margin-left: ${box.margin};
`;

export const Button = styled.button<{ isOn: boolean }>`
  width: 90px;
  height: 34px;
  background-color: ${({ isOn }) => (isOn ? color.main : '#01A08A')};
  border: 1px solid ${color.white};
  color: ${color.white};
  font-weight: 500;
  border-radius: 17px;
  margin-right: ${box.margin};
`;
