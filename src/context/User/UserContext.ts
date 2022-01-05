import { createContext, useContext } from 'react'
import { Context } from '@interface/User'

export const initialValue: Context = {
  user: {
    created_at: '',
    date_joined: '',
    department: '',
    groups: [],
    is_active: false,
    is_superuser: false,
    kind: '',
    last_login: null,
    state: '',
    student_number: '',
    username: '',
    nickname: '',
    profile_image: null,
  },
  updateUser: () => {},
}

export const UserContext = createContext(initialValue)

export const useUser = () => useContext(UserContext)
