import { webClient } from 'src/module';

export const fetchSchedule = {
  select: () => webClient.get(`/haksa-schedules`),
};
