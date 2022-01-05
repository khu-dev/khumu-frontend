import React, { useState } from 'react'
import Link from 'next/link'

import { NotificationApi } from '@api/NotificationApi'
import { AndroidToast } from '@utils/android'

const v = '{"current_version":"0.0.7","latest_version":"v0.0.4"}'

export default function MainPage() {
  const [version, setVersion] = useState<{ raw: any; prev: any; parsed: any }>({
    raw: '',
    prev: '',
    parsed: '',
  })
  const navList = [
    { title: '메인', path: '/main' },
    { title: 'QR코드', path: '/qrcode' },
    { title: '마이페이지', path: '/mypage' },
    { title: '마이페이지/정보수정', path: '/mypage/edit' },
    { title: '마이페이지/알림설정', path: '/mypage/setting/notifications' },
    { title: '알림', path: '/notifications' },
    { title: '동아리', path: '/clubs' },
  ]

  return (
    <>
      <h1 style={{ margin: 18 }}>작성된 페이지 목록</h1>
      <ul>
        {navList.map(({ title, path }) => (
          <li style={{ margin: 12 }} key={title}>
            <Link href={path}>{`${title} ${path}`}</Link>
          </li>
        ))}
      </ul>
      <div>
        <h4>Easter EGG!</h4>
        <input
          type={'button'}
          value={'notifications 모두 안읽음 처리하기'}
          onClick={async () => {
            await NotificationApi.unread('all')

            AndroidToast('모두 안읽음!')
          }}
          style={{ marginBottom: 8, display: 'block' }}
        />

        <input
          type={'button'}
          value={'버전정보 가져오기 Android.getVersionInfo()'}
          onClick={() => {
            const version = (window as any).Android?.getVersionInfo() || v

            AndroidToast(typeof (window as any).Android?.getVersionInfo())
            AndroidToast((window as any).Android?.getVersionInfo())

            setVersion({
              raw: (window as any).Android?.getVersionInfo(),
              prev: version,
              parsed: JSON.parse(version)?.current_version,
            })
          }}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <h5>버전정보</h5>
        <p>raw : {version.raw}</p>
        <p>파싱 전 : {version.prev}</p>
        <p>파싱 후 : {version.parsed}</p>
      </div>
    </>
  )
}
