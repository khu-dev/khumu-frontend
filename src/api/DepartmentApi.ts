import { Department } from '@src/interface'
import { webClient } from '@module/webClient'

export const DepartmentApi = {
  query: () => webClient.get<Department[]>(`/departments`),
}
