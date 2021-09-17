import { webClient } from 'src/module';

export const fetchClubs = {
  select: () => webClient.get(`/clubs`),
  categories: () => webClient.get(`/club-categories`),
};
