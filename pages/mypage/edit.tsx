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
    info: { username, department, nickname, student_number, profile_image },
    setUser,
  } = useUser()
  const router = useRouter()
  const [departments, setDepartments] = useState<Department[]>([])
  const [state, setState] = useState<EditType>({
    nickname: nickname || '',
    department,
    profile_image,
  })

  const goBack = () => {
    router.back()
  }

  const handleChange = (e: any) => {
    const target = e.target

    setState((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleImageName = (name: string) => {
    setState((prev) => ({
      ...prev,
      profile_image: name,
    }))
  }

  const handleSubmit = async () => {
    let result = null

    try {
      result = await UserApi.update(state)
    } catch (e) {
      AndroidToast('정보 변경을 실패하였습니다')
    }

    switch (result?.status) {
      case 200:
        setUser(state)
        AndroidToast('변경되었습니다')
        break
      case 400:
        AndroidToast('존재하는 닉네임입니다')
        break
      default:
    }
  }

  useEffect(() => {
    setState({
      nickname: nickname || '',
      department,
      profile_image,
    })
  }, [nickname, username, department, profile_image])

  useEffect(() => {
    if (!token) return

    const fetchData = async () => {
      const res = await DepartmentApi.query()

      if (res.status === 200) {
        const newData = res.data.map((info: Department) => ({
          name: info.name,
          id: info.id,
        }))
        setDepartments(newData)
      }
    }
    fetchData()
  }, [token])

  return (
    <>
      <CommonHeader
        title={'나의 정보 변경'}
        handleRouter={goBack}
        className={'header-mypage-edit'}
        color={'#6C6C6C'}
      />
      <Edit>
        <Edit.Image handleImageName={handleImageName} />
        <Edit.Nickname nickname={state.nickname} onChange={handleChange} />
        <Edit.StudentNumber studentNumber={student_number} />
        <Edit.Department
          current={state.department}
          departments={departments}
          onChange={handleChange}
        />
        <Edit.Button onClick={handleSubmit} />
      </Edit>
    </>
  )
}
