import { webClient } from '@module/webClient'

export const FeedbackApi = {
  create: (content: string) => webClient.post(`/feedbacks`, { content }),
}
