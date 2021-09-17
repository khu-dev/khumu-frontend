import { useState, useEffect } from 'react';
import { fetchUsers } from '@api/api-users';
import { useToken } from '@context/Token';
import { initialUser, UserContext } from './UserContext';

export default function UserProvider({ children }) {
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
