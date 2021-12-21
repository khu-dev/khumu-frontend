import { createContext, useContext } from 'react';

export const initialUser = {
  info: {
    created_at: '0',
    date_joined: '0',
    department: '',
    groups: [],
    info21_authenticated_at: 'null',
    is_active: false,
    is_superuser: false,
    kind: '',
    last_login: 'null',
    state: '',
    student_number: '',
    user_permissions: [],
    username: '',
    nickname: '',
    profile_image: null,
  },
  setUser: (info) => {
    console.log(info);
  },
};

export const UserContext = createContext(initialUser);

export const useUser = () => useContext(UserContext);
