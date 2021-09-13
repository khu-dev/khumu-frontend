import styled from '@emotion/styled';
import { box, color } from '@constants/theme';
import { css } from '@emotion/react';
import { FeedbackButton } from 'src/enum/FeedbackButton';

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
      margin-top: ${box.margin};
      height: auto;
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

const inputStyle = css`
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

export const TextInput = styled.input`
  ${inputStyle};
`;

export const TextArea = styled.textarea`
  ${inputStyle};
  padding: 8px;
  height: 300px;
`;

interface FButtonProps {
  type: FeedbackButton;
}

export const FButton = styled.button<FButtonProps>`
  width: ${box.marginWidth};
  height: 33px;
  margin: ${box.margin};
  margin-top: 0;
  font-size: 16px;
  color: ${({ type }) =>
    type === FeedbackButton.SUBMIT ? color.white : color.main};
  border: ${({ type }) =>
    type === FeedbackButton.SUBMIT ? 'none' : `1px solid ${color.main}`};
  border-radius: ${box.borderRadius02};
  background-color: ${({ type }) =>
    type === FeedbackButton.SUBMIT ? color.main : color.white};
`;
