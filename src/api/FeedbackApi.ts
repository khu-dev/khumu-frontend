import { webClient } from 'src/module';

interface createRequest {
  content: string;
}

export const FeedbackApi = {
  create: ({ content }: createRequest) => webClient.post(`/feedbacks`, { content }),
};
