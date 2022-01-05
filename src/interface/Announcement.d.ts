interface Announcement {
  id: number
  title: string
  sub_link: string
  date: string
  author: Author
}

interface Author {
  id: number
  author_name: string
  followed: boolean
}

export { Announcement }
