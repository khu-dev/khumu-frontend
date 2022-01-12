interface HotArticle {
  author: {
    username?: string
    nickname: string
    state?: string
  }
  board_display_name: string
  comment_count: number
  content: string
  created_at: string // "07/20 18:03"
  id: number
  like_article_count: number
  title: string
  // board_name: string
  // bookmark_article_count: number
  // bookmarked: boolean
  // images: string[]
  // is_author: boolean
  // kind: string
  // liked: boolean
  // tags: string[]
  // url: string
}

export { HotArticle }
