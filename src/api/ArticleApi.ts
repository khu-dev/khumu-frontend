import { HotArticle } from '@interface/HotArticle'
import { DataObj } from '@interface/Response'
import { webClient } from '@module/webClient'

export const ArticleApi = {
  hot: () =>
    webClient.get<DataObj<HotArticle[]>>(`/articles?board=hot&size=10`),
}
