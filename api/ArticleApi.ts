import { HotArticle } from '@interface/HotArticle'
import { DataObj } from '@interface/Response'
import { caching } from '@module/cache'
import { webClient } from '@module/webClient'

export const ArticleApi = {
  hot: (refresh?: boolean) => {
    const url = '/articles?board=hot&size=10'

    return caching<DataObj<HotArticle[]>>(
      url,
      () => webClient.get<DataObj<HotArticle[]>>(url),
      refresh,
    )
  },
}
