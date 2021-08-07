import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { useUser } from '@context/User';
import { box } from '@constants/theme';
import CommonHeader from '@components/Header/Common';
import Edit from '@views/MyPage/Edit';

export default function MyEditPage() {
  const { username, department } = useUser();
  const [state, setState] = useState({
    nickname: username,
    department,
  });

  useEffect(() => {
    setState({
      nickname: username,
      department,
    });
  }, [username, department]);

  const handleChange = (e) => {
    const target = e.target;

    setState((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <>
      <CommonHeader
        title={'나의 정보 변경'}
        pathname={'/mypage'}
        className={'header-mypage-edit'}
        color={'#6C6C6C'}
      />
      <Container>
        <Edit>
          <Edit.Image />
          <Edit.Nickname nickname={state.nickname} onChange={handleChange} />
          <Edit.Department department={state.department} onChange={handleChange} />
          <Edit.Button onClick={handleSubmit} />
        </Edit>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: ${box.paddingWidth};
  flex-grow: 1;

  padding: ${box.padding};

  background-color: #e4e4e4;
`;
