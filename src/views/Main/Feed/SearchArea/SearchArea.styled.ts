import styled from '@emotion/styled';
import { box, color } from '@constants/theme';
import { css } from '@emotion/react';

interface ContainerProps {
  focus: boolean;
  top?: number;
}

export const OuterContainer = styled.div<ContainerProps>`
  width: 100vw;
  height: auto;
  ${({ focus }) =>
    focus &&
    css`
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      align-items: flex-start;
      z-index: 19;
      background-color: ${color.white};
    `}
`;

export const SearchLabel = styled.div<ContainerProps>`
  height: 48px;
  width: calc(100% - 48px);
  margin: 14px auto;
  margin-top: 4px;
  padding: 0 10px;
  background-color: ${color.white};
  border-radius: ${box.borderRadius02};

  ${({ focus }) =>
    focus &&
    css`
      border: 1px solid ${color.main};
    `}
`;

export const SearchForm = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const DecorationSpan = styled.span`
  width: 4px;
  height: 22px;
  background-color: ${color.gray5};
`;

export const TextArea = styled.input`
  flex-grow: 1;
  width: 70%;
  height: 40px;
  padding: 0 8px;
  margin-left: 4px;
  font-size: 15px;
  border: none;
  border-radius: ${box.borderRadius};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${color.gray5};
  }
`;

export const SubmitButton = styled.button`
  width: 71px;
  height: 33px;
  font-size: 16px;
  color: ${color.white};
  border: none;
  border-radius: ${box.borderRadius02};
  background-color: ${color.main};
`;
