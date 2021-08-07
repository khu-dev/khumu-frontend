import React, { useState, useEffect } from 'react';

import { useUser } from '@context/User';
import CommonHeader from '@components/Header/Common';
import Edit from '@views/MyPage/Edit';
import { fetchUsers } from '@api/api-users';
import { fetchDepartments } from '@api/api-departments';

export default function MyEditPage() {
  const { username, department } = useUser();
  const [state, setState] = useState({
    nickname: username,
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

  const handleSubmit = async () => {
    const result = await fetchUsers.patch(state);
    console.log(result);
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
