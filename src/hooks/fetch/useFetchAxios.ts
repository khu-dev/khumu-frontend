import { useToken } from '@context/Token'
import { useCallback, useEffect, useState } from 'react'

export const useFetchAxios = ({ func }: any) => {
  const { token } = useToken()
  const [result, setResult] = useState({
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

    let result = null
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
