import { webClient } from 'src/module'

export const DepartmentApi = {
  query: () => webClient.get(`/departments`),
}
