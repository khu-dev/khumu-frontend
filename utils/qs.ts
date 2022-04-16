import qs from 'query-string'

export const makeQueryString = (queryObj: any) => {
  return qs.stringify(queryObj)
}
