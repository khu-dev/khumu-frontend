import { HotArticle } from '@src/interface'
import { DataObj } from '@src/interface/Response'
import { webClient } from '@module/webClient'

export const ArticleApi = {
  hot: () =>
    webClient.get<DataObj<HotArticle[]>>(`/articles?board=hot&size=10`),
}
