/**
 * @description 제작된 페이지 목록
 */
import React from 'react';

import Link from 'next/link';
import { AndroidToast } from '@utils/android';
import { fetchNotifications } from '@api/api-notifications';

export default function MainPage() {
  const navList = [
    { title: '메인', path: '/main' },
    { title: 'QR코드', path: '/qrcode' },
    { title: '마이페이지', path: '/mypage' },
    { title: '마이페이지/정보수정', path: '/mypage/edit' },
    { title: '마이페이지/알림설정', path: '/mypage/setting/notifications' },
    { title: '알림', path: '/notifications' },
    { title: '동아리', path: '/clubs' },
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
        <h4>Easter EGG!</h4>
        <input
          type={'button'}
          value={'notifications 모두 안읽음 처리하기'}
          onClick={async () => {
            await fetchNotifications.unread({ notiId: 'all' });

            AndroidToast('모두 안읽음!');
          }}
          style={{ marginBottom: 8, display: 'block' }}
        />
      </div>
    </>
  );
}
