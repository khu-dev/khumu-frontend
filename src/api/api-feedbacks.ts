import axios from 'axios';
import { BASE_URI } from '@config/baseURI';

interface Props {
  content: string;
}

export const fetchFeedbacks = {
  post: ({ content }: Props) => axios.post(`${BASE_URI}/feedbacks`, { content }),
};
