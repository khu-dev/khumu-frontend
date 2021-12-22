import { webClient } from 'src/module';

export const ClubApi = {
  query: () => webClient.get(`/clubs`),
  categories: () => webClient.get(`/club-categories`),
};
