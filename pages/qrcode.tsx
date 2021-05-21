import React from 'react';

import Qrcode from '@views/Qrcode';
import QrcodeHeader from '@components/Header/Qrcode';
import { exampleData } from '@constants/data';
// import { GetServerSideProps } from 'next';
// import { fetchToken } from '@api/api-token';
// import { fetchQRCode } from '@api/api-qrcode';
// import { ID, PW } from '@config/_key';
// import { ID, PW } from '@config/key';

interface QRCodePageProps {
  qr_code_str: string;
  name: string;
  student_number: string;
  department: string;
}

const initial = {
  qr_code_str: exampleData,
  name: '가나다',
  student_number: '2039182031',
  department: '라마바사아',
};

export default function QRCodePage({
  qr_code_str,
  ...profile
}: QRCodePageProps = initial) {
  return (
    <>
      <QrcodeHeader title={'모바일 이용증'} />
      <Qrcode qrcode={qr_code_str} profile={profile} />
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const {
//     data: { access },
//   }: any = await fetchToken({
//     // username: 'username',
//     username: ID,
//     // password: 'password',
//     password: PW,
//   });

//   const {
//     data: { data },
//   } = await fetchQRCode(access);

//   return {
//     props: data,
//   };
// };
