import React, { useState, useEffect } from 'react';

import { useUser } from '@context/User';
import CommonHeader from '@components/Header/Common';
import Edit from '@views/MyPage/Edit';
import { fetchUsers } from '@api/api-users';
import { fetchDepartments } from '@api/api-departments';
import { AndroidToast } from '@utils/android';

export default function MyEditPage() {
  const {
    info: { username, department, nickname },
    setUser,
  } = useUser();
  const [state, setState] = useState({
    nickname: nickname || '',
    department,
  });
  const [departments, setDepartments] = useState([{ name: '', id: '' }]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDepartments.select();

      if (result.status === 200) {
        const list = result.data.map((info) => ({ name: info.name, id: info.id }));

        setDepartments(list);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setState({
      nickname: nickname || '',
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

  const handleSubmit = async () => {
    let result = null;

    try {
      result = await fetchUsers.patch(state);
    } catch (e) {
      console.error(e);
    }

    switch (result.status) {
      case 200:
        setUser(state);
        AndroidToast('변경되었습니다');
        break;
      case 400:
        AndroidToast('존재하는 닉네임입니다');
        break;
      default:
        AndroidToast('정보 변경을 실패하였습니다');
    }
  };

  return (
    <>
      <CommonHeader
        title={'나의 정보 변경'}
        pathname={'/mypage'}
        className={'header-mypage-edit'}
        color={'#6C6C6C'}
      />
      <Edit>
        <Edit.Image />
        <Edit.Nickname nickname={state.nickname} onChange={handleChange} />
        <Edit.Department
          current={state.department}
          departments={departments}
          onChange={handleChange}
        />
        <Edit.Button onClick={handleSubmit} />
      </Edit>
    </>
  );
}
