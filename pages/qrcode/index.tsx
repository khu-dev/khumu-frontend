//@ts-nocheck

import React, { useCallback, useEffect, useState } from 'react'

import Qrcode from '@views/Qrcode'
import QrcodeHeader from '@components/Header/Qrcode'
import { QrcodeApi } from '@src/api/QrcodeApi'
import { QRcode } from '@interface/QRcode'
import { useToken } from '@src/context/Token'

const initialState: QRcode = {
  qr_code_str: '',
  name: '',
  department: '',
  student_number: '',
}

// interface Props {
//   qrcode: QRcode;
// }

export default function QRCodePage() {
  // { qrcode }: Props
  const { token } = useToken()
  const [info, setInfo] = useState(initialState)

  const fetchData = useCallback(async () => {
    if (info.qr_code_str) setInfo(initialState)
    const { data } = await QrcodeApi.get()

    if (data) {
      const { data: info } = data

      setInfo(info)
    }
  }, [info.qr_code_str])

  useEffect(() => {
    if (!token) return

    fetchData()
  }, [token, fetchData])

  return (
    <>
      <QrcodeHeader title={'모바일 이용증'} />
      <Qrcode
        qrcode={info.qr_code_str}
        profile={{
          name: info.name || '-',
          student_number: info.student_number || '-',
          department: info.department || '-',
        }}
        handleRefresh={fetchData}
      />
    </>
  )
}
