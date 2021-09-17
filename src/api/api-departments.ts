import { webClient } from 'src/module';

export const fetchDepartments = {
  select: () => webClient.get(`/departments`),
};
