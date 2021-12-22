import { webClient } from 'src/module'

interface CreateRequest {
  content: string
}

export const FeedbackApi = {
  create: ({ content }: CreateRequest) =>
    webClient.post(`/feedbacks`, { content }),
}
