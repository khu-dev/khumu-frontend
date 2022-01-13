import React, { useState, useEffect } from 'react'

import { UserApi } from '@api/UserApi'
import { useUser } from '@context/User'
import { AndroidToast } from '@utils/android'

import { Edit as EditType } from '@interface/User'

import { CommonHeader } from '@components/Header'
import Button from './Button'
import Department from './Department'
import Image from './Image'
import Nickname from './Nickname'
import StudentNumber from './StudentNumber'

import * as s from './styled'

const Edit = () => {
  const { user, updateUser } = useUser()
  const [value, setValue] = useState<EditType>(user)

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
    setValue(user)
  }, [user])

  return (
    <>
      <CommonHeader
        center="나의 정보 변경"
        backgroundColor="#e4e4e4"
        color="#6C6C6C"
      />
      <s.Container>
        <Image onChange={handleChange} />
        <Nickname value={value.nickname!} onChange={handleChange} />
        <StudentNumber />
        <Department value={value.department!} onChange={handleChange} />
        <Button onClick={handleSubmit} />
      </s.Container>
    </>
  )
}

export default Edit
