interface User {
  created_at: string
  date_joined: string
  department: string
  groups: string[]
  is_active: false
  is_superuser: false
  kind: string
  last_login: string | null
  state: string
  student_number: string
  username: string
  nickname: string
  profile_image: string | null
}

interface Edit {
  nickname: string
  department: string
  profile_image: string | null
}

export { User, Edit }
