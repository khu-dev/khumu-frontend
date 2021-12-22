import { webClient } from 'src/module';

export const ScheduleApi = {
  select: () => webClient.get(`/haksa-schedules`),
};
