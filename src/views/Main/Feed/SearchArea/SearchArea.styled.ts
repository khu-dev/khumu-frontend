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
  height: 60px;
  width: calc(100% - 72px);
  margin: 14px auto;
  padding: 0 22px;
  background-color: ${color.white};
  border-radius: ${box.borderRadius};

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
  height: 28px;
  background-color: ${color.gray5};
`;

export const TextArea = styled.input`
  width: 70%;
  height: 40px;
  padding: 0 12px;
  margin-left: 4px;
  font-size: 18px;
  border: none;
  border-radius: ${box.borderRadius};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${color.gray5};
  }
`;
