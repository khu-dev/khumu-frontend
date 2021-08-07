/**
 * @description 제작된 페이지 목록
 */
import React from 'react';

import Link from 'next/link';
import { AndroidToast } from 'src/utils/android';

export default function MainPage() {
  const navList = [
    { title: '메인', path: '/main' },
    { title: 'QR코드', path: '/qrcode' },
    { title: '마이페이지', path: '/mypage' },
    { title: '마이페이지/정보수정', path: '/mypage/edit' },
    { title: '알림', path: '/notifications' },
    { title: '동아리', path: '/club' },
  ];

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
        <h4>** 안드로이드 웹뷰 통신 예제용 **</h4>
        <input
          type={'button'}
          value={'showAndroidToast'}
          onClick={() => {
            AndroidToast('안드 프론트 통신!');
          }}
        />
      </div>
    </>
  );
}
