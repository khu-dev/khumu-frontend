import React, { useCallback, useEffect, useRef, useState } from 'react'

import { QRcode } from '@interface/QRcode'

import { QrcodeApi } from '@api/QrcodeApi'
import { useToken } from '@context/Token'
import { AndroidToast } from '@utils/android'

import QrcodeHeader from '@components/Header/Qrcode'
import Qrcode from '@views/Qrcode'

const initialState: QRcode = {
  qr_code_str: '',
  name: '',
  department: '',
  student_number: '',
}

export default function QRCodePage() {
  const { token } = useToken()
  const initRef = useRef<boolean>(true)
  const [info, setInfo] = useState(initialState)

  const fetchData = useCallback(async () => {
    const { data } = await QrcodeApi.get()

    if (data) {
      const { data: info } = data

      setInfo(info)

      if (initRef.current) {
        initRef.current = false
      } else {
        AndroidToast('QR 코드가 생신되었습니다')
      }
    } else {
      AndroidToast('불러오는데 실패하였습니다')
    }
  }, [])

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
