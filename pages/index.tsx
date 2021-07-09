/**
 * @description 제작된 페이지 목록
 */
import React from 'react';
import { GetStaticProps } from 'next';

import Link from 'next/link';

var Android: any;

export default function MainPage() {
  const navList = [
    { title: '메인', path: '/main' },
    { title: 'QR코드', path: '/qrcode' },
    { title: '마이페이지', path: '/mypage' },
    { title: '알림', path: '/notifications' },
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
            if (Android) {
              Android.showToast('안드 프론트 통신!');
            } else {
              alert('Android 객체가 undefined 값을 가집니다.');
            }
          }}
        />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (/*context*/) => {
  // const data = (await apiBase())?.data || null;
  // console.log('loading ...');
  // function sleep(ms: number) {
  //   const wakeUpTime = Date.now() + ms;
  //   while (Date.now() < wakeUpTime) {}
  // }
  // sleep(1000);
  // console.log('done!');

  return {
    props: {
      // data,
      null: null,
    },
  };
};
