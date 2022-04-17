import React, { useCallback, useEffect, useRef, useState } from 'react'

import { QrcodeApi } from '@api/QrcodeApi'
import { useToken } from '@context/Token'
import { AndroidToast } from '@utils/android'

import { CommonHeader } from '@components/Common/Header'
import { QRcode as QRcodeType } from '@interface/QRcode'
import Qrcode from '@components/Qrcode'
import WithPopup from '@components/Qrcode/WithPopup'

function QRCodePage() {
  const { token } = useToken()

  const initRef = useRef<boolean>(true)
  const [info, setInfo] = useState<QRcodeType | null>(null)
  const [isError, setError] = useState(false)

  const fetchData = useCallback((refresh?: boolean) => {
    QrcodeApi.get()
      .then(({ data }) => {
        if (!data) return

        const { data: info } = data

        setInfo(info)

        refresh && AndroidToast('QR 코드가 갱신되었습니다')

        initRef.current = false
      })
      .catch(() => {
        setError(true)
      })
  }, [])

  useEffect(() => {
    if (!token || !initRef.current) return

    fetchData()
  }, [token, fetchData])

  return (
    <>
      <CommonHeader center="모바일 이용증" />
      <WithPopup isError={isError}>
        <Qrcode
          qrcode={info?.qr_code_str || ''}
          profile={{
            name: info?.name || '-',
            student_number: info?.student_number || '-',
            department: info?.department || '-',
          }}
          handleRefresh={fetchData}
        />
      </WithPopup>
    </>
  )
}

export default QRCodePage
