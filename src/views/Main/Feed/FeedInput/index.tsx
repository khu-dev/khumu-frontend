import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { css } from '@emotion/react';

import { useFeedInput } from '@context/Feed/Input';
import { color } from '@constants/theme';
import { Title03 } from '@components/Title';
import * as s from './SearchArea.styled';

const Title = ({ title }) => (
  <Title03
    css={css`
      margin-top: 4px;
      margin-bottom: 12px;
      color: ${color.white};
    `}
  >
    {title}
  </Title03>
);

const TextArea = ({ placeholder }) => {
  const { focus, handler } = useFeedInput();

  return (
    <s.SearchLabel className={'main-feed-title-container'} focus={focus}>
      <s.SearchForm>
        {focus ? (
          <IoArrowBackOutline
            size={24}
            color={color.gray3}
            onClick={handler.handleBlur}
          />
        ) : (
          <s.DecorationSpan />
        )}
        <s.TextArea
          id={'main-search-input'}
          type={'text'}
          name={'search'}
          placeholder={placeholder}
          onFocus={() => handler.handleFocus()}
        />
      </s.SearchForm>
      {focus && (
        <label htmlFor={'main-search-input'}>
          <s.SubmitButton onClick={() => handler.handleFocus()}>
            {'전송'}
          </s.SubmitButton>
        </label>
      )}
    </s.SearchLabel>
  );
};

const FeedInput = ({ children }) => {
  const { focus } = useFeedInput();

  return <s.OuterContainer focus={focus}>{children}</s.OuterContainer>;
};

FeedInput.Title = Title;
FeedInput.TextArea = TextArea;

export default FeedInput;
