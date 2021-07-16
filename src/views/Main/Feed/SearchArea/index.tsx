import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { css } from '@emotion/react';

import { color } from '@constants/theme';
import { Title03 } from '@components/Title';
import { useSearchAreaFocus } from 'src/hooks/Main/useSearchAreaFocus';
import * as s from './SearchArea.styled';

export default function FeedInput() {
  const { focus, ...handler } = useSearchAreaFocus();

  return (
    <s.OuterContainer focus={focus}>
      <Title03
        css={css`
          margin-top: 4px;
          margin-bottom: 12px;
          color: ${color.white};
        `}
      >
        {'쿠뮤에게 말해줘'}
      </Title03>
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
            placeholder={'불편한 사항을 말해줘'}
            onFocus={() => handler.handleFocus()}
          />
        </s.SearchForm>
        <label htmlFor={'main-search-input'}>
          <s.SubmitButton onClick={() => handler.handleFocus()}>
            {'전송'}
          </s.SubmitButton>
        </label>
      </s.SearchLabel>
    </s.OuterContainer>
  );
}
