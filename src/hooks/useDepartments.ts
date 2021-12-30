import { useEffect, useState } from 'react'

import { DepartmentApi } from '@src/api'
import { useToken } from '@context/Token'
import { AndroidToast } from '@utils/android'

import { Department } from '@src/interface'

const useDepartments = () => {
  const { token } = useToken()
  const [data, setData] = useState<Department[]>([])

  useEffect(() => {
    if (!token) return

    DepartmentApi.query().then(({ status, data }) => {
      if (status !== 200) {
        AndroidToast('학과를 불러오는데 실패하였습니다')
        return
      }

      const newData = data.map((info: Department) => ({
        name: info.name,
        id: info.id,
      }))
      setData(newData)
    })
  }, [token])

  return data
}

export default useDepartments
