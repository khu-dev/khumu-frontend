import { webClient } from 'src/module';

export const ScheduleApi = {
  query: () => webClient.get(`/haksa-schedules`),
};
