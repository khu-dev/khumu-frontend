import React from 'react';
import { color } from '@constants/theme';
import { BsSearch } from 'react-icons/bs';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useSearchAreaFocus } from 'src/hooks/Main/useSearchAreaFocus';
import * as s from './SearchArea.styled';

export default function FeedInput() {
  const { focus, ...handler } = useSearchAreaFocus();

  return (
    <s.OuterContainer focus={focus}>
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
            placeholder={'통합 검색어를 입력해주세요'}
            onFocus={() => {
              handler.handleFocus();
            }}
          />
        </s.SearchForm>
        <label htmlFor={'main-search-input'}>
          <BsSearch size={24} color={color.main} />
        </label>
      </s.SearchLabel>
    </s.OuterContainer>
  );
}
