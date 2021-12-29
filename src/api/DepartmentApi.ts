import { Department } from '@src/interface'
import { webClient } from '@src/module'

export const DepartmentApi = {
  query: () => webClient.get<Department[]>(`/departments`),
}
