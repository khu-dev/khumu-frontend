import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { UserApi } from '@api/UserApi'
import { DepartmentApi } from '@api/DepartmentApi'
import { useToken } from '@context/Token'
import { useUser } from '@context/User'
import { AndroidToast } from '@utils/android'

import { Department } from '@interface/Department'
import { Edit as EditType } from '@interface/User'

import Edit from '@views/MyPage/Edit'
import CommonHeader from '@components/Header/Common'

export default function MyEditPage() {
  const { token } = useToken()
  const {
    user: { username, department, nickname, student_number, profile_image },
    updateUser,
  } = useUser()
  const router = useRouter()
  const [departments, setDepartments] = useState<Department[]>([])
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
      if (status !== 200) return

      const newData = data.map((info: Department) => ({
        name: info.name,
        id: info.id,
      }))
      setDepartments(newData)
    })
  }, [token])

  return (
    <>
      <CommonHeader
        title="나의 정보 변경"
        handleRouter={router.back}
        className="header-mypage-edit"
        color="#6C6C6C"
      />
      <Edit>
        <Edit.Image onChange={handleChange} />
        <Edit.Nickname value={value.nickname!} onChange={handleChange} />
        <Edit.StudentNumber studentNumber={student_number!} />
        <Edit.Department
          value={value.department!}
          departments={departments}
          onChange={handleChange}
        />
        <Edit.Button onClick={handleSubmit} />
      </Edit>
    </>
  )
}
