interface User {
  created_at?: string
  date_joined?: string
  department?: string
  groups?: string[]
  is_active?: false
  is_superuser?: false
  kind?: string
  last_login?: string | null
  state?: string
  student_number?: string
  username?: string
  nickname?: string
  profile_image?: string
}

interface Edit {
  nickname?: string
  department?: string
  profile_image?: string
}

interface Context {
  user: User
  updateUser(info?: User): void
}

interface CheckResponse {
  data: User
}

interface UpdateRequest {
  nickname?: string
  department?: string
  profile_image?: string | null
}

export { User, Edit, Context, CheckResponse, UpdateRequest }
