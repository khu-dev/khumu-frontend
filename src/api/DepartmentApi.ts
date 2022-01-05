import { Department } from '@interface/Department'
import { webClient } from '@module/webClient'

export const DepartmentApi = {
  query: () => webClient.get<Department[]>(`/departments`),
}
