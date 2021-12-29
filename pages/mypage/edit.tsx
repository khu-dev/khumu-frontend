import React from 'react'
import { useRouter } from 'next/router'

import CommonHeader from '@components/Header/Common'
import Edit from '@views/MyPage/Edit'

export default function MyEditPage() {
  const router = useRouter()

  return (
    <>
      <CommonHeader
        title="나의 정보 변경"
        handleRouter={router.back}
        className="header-mypage-edit"
        color="#6C6C6C"
      />
      <Edit />
    </>
  )
}
