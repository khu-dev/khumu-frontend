import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchUsers } from '@api/api-users';
import { useToken } from '@context/Token';
import { AndroidToast } from '@utils/android';
import { initialUser, UserContext } from './UserContext';

export default function UserProvider({ children }) {
  const router = useRouter();
  const { token } = useToken();
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    const fetchData = async () => {
      let result = null;

      try {
        result = await fetchUsers.select();
      } catch (e) {
        console.error('fetchUsers.select() error in user provider');
      } finally {
        if (result?.status === 200) {
          setUser((prev) => ({
            ...prev,
            info: {
              ...result.data.data,
            },
          }));
        } else if (router.asPath !== '/logout') {
          AndroidToast('로그인 페이지로 이동합니다');
          router.push('/logout');
        }
      }
    };

    token && fetchData();
  }, [token]);

  const updateUserInfo = (info) => {
    setUser((prev) => ({
      ...prev,
      info: {
        ...prev.info,
        ...info,
      },
    }));
  };

  return (
    <UserContext.Provider
      value={{
        ...user,
        setUser: updateUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
