import { webClient } from 'src/module';

interface Props {
  content: string;
}

export const fetchFeedbacks = {
  post: ({ content }: Props) => webClient.post(`/feedbacks`, { content }),
};
