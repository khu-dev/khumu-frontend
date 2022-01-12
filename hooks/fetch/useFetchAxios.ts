import { useToken } from '@context/Token'
import { DataObj } from '@interface/Response'
import { AxiosResponse } from 'axios'
import { useCallback, useEffect, useState } from 'react'

interface State<T> {
  data: DataObj<T> | null
  loading: boolean
  error: boolean
}

interface Props<T> {
  func: () => Promise<AxiosResponse<T>>
}

function useFetchAxios<T>({ func }: Props<T>) {
  const { token } = useToken()
  const [result, setResult] = useState<State<T>>({
    data: null,
    loading: true,
    error: false,
  })

  const initRefresh = useCallback(() => {
    result.loading &&
      setResult((prev) => ({
        ...prev,
        loading: true,
      }))
  }, [result.loading])

  const refreshData = useCallback(async () => {
    initRefresh()

    let result: AxiosResponse<T> | null = null
    let error = false

    try {
      result = await func()
    } catch (err) {
      error = true
    } finally {
      setResult({
        data: result,
        error,
        loading: false,
      })
    }
  }, [func, initRefresh])

  useEffect(() => {
    token && refreshData()
  }, [token, refreshData])

  return {
    result,
    refresh: refreshData,
  }
}

export default useFetchAxios
