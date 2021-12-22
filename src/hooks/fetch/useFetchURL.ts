import { useToken } from '@context/Token'
import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'

interface Props {
  method?: 'get' | 'post' | 'patch' | 'delete'
  url: string
  option?: any
}

export const useFetchURL = ({ method = 'get', url, option }: Props) => {
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
      console.log(method)

      result = await axios.get(url, option)
    } catch (err) {
      error = true
    } finally {
      setResult({
        data: result as any,
        error,
        loading: false,
      })
    }
  }, [initRefresh, method, option, url])

  useEffect(() => {
    token && refreshData()
  }, [token, refreshData])

  return {
    result,
    refresh: refreshData,
  }
}
