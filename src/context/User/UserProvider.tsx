import { useState, useEffect } from 'react';
import { fetchUsers } from '@api/api-users';
import { useToken } from '@context/Token';
import { initialUser, UserContext } from './UserContext';

export default function UserProvider({ children }) {
  const { token } = useToken();
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchUsers.select();

      if (result.status === 200) {
        setUser(result.data.data);
      }
    };

    token && fetchData();
  }, [token]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
