import { FC, useEffect, useState } from 'react'

import { DepartmentApi } from '@api/DepartmentApi'
import { useToken } from '@context/Token'
import { AndroidToast } from '@utils/android'

import { Department as DepartmentType } from '@interface/Department'

import * as s from './styled'

interface Props {
  value: string
  onChange(name: string, value: string): void
}

const Department: FC<Props> = ({ value, onChange }) => {
  const { token } = useToken()
  const [departments, setDepartments] = useState<DepartmentType[]>([])

  useEffect(() => {
    if (!token) return

    DepartmentApi.query().then(({ status, data }) => {
      if (status !== 200) {
        AndroidToast('학과를 불러오는데 실패하였습니다')
        return
      }

      const newData = data.map((info: DepartmentType) => ({
        name: info.name,
        id: info.id,
      }))
      setDepartments(newData)
    })
  }, [token])

  return (
    <s.Form>
      <s.FormTitle>학과</s.FormTitle>
      <s.Select
        name="department"
        onChange={(e) => {
          const { name, value } = e.target
          onChange(name, value)
        }}
        value={value}
      >
        {departments?.map(({ name, id }) => (
          <option key={id}>{name}</option>
        ))}
      </s.Select>
    </s.Form>
  )
}

export default Department
