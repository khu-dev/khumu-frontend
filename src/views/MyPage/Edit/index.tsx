import { useState, useEffect } from 'react'

import { UserApi } from '@api/UserApi'
import { DepartmentApi } from '@api/DepartmentApi'
import { useToken } from '@context/Token'
import { useUser } from '@context/User'
import { AndroidToast } from '@utils/android'

import { Department as DepartmentType } from '@interface/Department'
import { Edit as EditType } from '@interface/User'

import Button from './Button'
import Department from './Department'
import Image from './Image'
import Nickname from './Nickname'
import StudentNumber from './StudentNumber'

import * as s from './styled'

const Edit = () => {
  const { token } = useToken()
  const {
    user: { username, department, nickname, student_number, profile_image },
    updateUser,
  } = useUser()

  const [departments, setDepartments] = useState<DepartmentType[]>([])
  const [value, setValue] = useState<EditType>({
    nickname: nickname || '',
    department,
    profile_image,
  })

  const handleChange = (name: string, value: string) => {
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    UserApi.update(value)
      .then((result) => {
        switch (result?.status) {
          case 200:
            updateUser(value)
            AndroidToast('변경되었습니다')
            break
          case 400:
            AndroidToast('존재하는 닉네임입니다')
            break
          default:
        }
      })
      .catch(() => AndroidToast('정보 변경을 실패하였습니다'))
  }

  useEffect(() => {
    setValue({
      nickname: nickname || '',
      department,
      profile_image,
    })
  }, [nickname, username, department, profile_image])

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
    <s.Container>
      <Image onChange={handleChange} />
      <Nickname value={value.nickname!} onChange={handleChange} />
      <StudentNumber studentNumber={student_number!} />
      <Department
        value={value.department!}
        departments={departments}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit} />
    </s.Container>
  )
}

export default Edit
