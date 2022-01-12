import { Department } from '@interface/Department'
import { caching } from '@module/cache'
import { webClient } from '@module/webClient'

export const DepartmentApi = {
  query: (refresh?: boolean) => {
    const url = '/departments'

    return caching(url, () => webClient.get<Department[]>(url), refresh)
  },
}
