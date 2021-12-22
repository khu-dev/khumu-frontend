export interface HotArticle {
  author: {
    username: string
    nickname: string
    state: string
  }
  board_display_name: string
  board_name: string
  bookmark_article_count: number
  bookmarked: boolean
  comment_count: number
  content: string
  created_at: string // "07/20 18:03"
  id: number
  images: string[]
  is_author: boolean
  kind: string
  like_article_count: number
  liked: boolean
  tags: string[]
  title: string
  url: string
}
