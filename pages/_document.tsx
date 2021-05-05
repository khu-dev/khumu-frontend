//@ts-nocheck

import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document'; //next의 html과 나머지 기타 기능들을 넣어주는 Main과 NextScript
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
