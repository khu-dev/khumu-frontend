//@ts-nocheck

import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document'; //next의 html과 나머지 기타 기능들을 넣어주는 Main과 NextScript
import Helmet from 'react-helmet'; // head태그에 넣을 정보를 jsx로 작성할 수 있게 도와준다.
// import { ServerStyleSheet } from '@emotion/react';

class MyDocument extends Document {
  // static async getInitialProps(context) {
  // const sheet = new ServerStyleSheet(); // 서버사이드 렌더링 할 수 있게함.
  // const page = await context.renderPage((App) => (props) =>
  //   sheet.collectStyles(<App {...props} />),
  // );
  // const styleTags = sheet.getStyleElement();
  // return { ...page, helmet: Helmet.renderStatic(), styleTags };
  // }

  render() {
    // const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet;
    // const htmlAttrs = htmlAttributes.toComponent();
    // const bodyAttrs = bodyAttributes.toComponent();
    return (
      <Html /*{...htmlAttrs}*/>
        <Head>
          {/* {this.props.styleTags} */}
          {/* {Object.values(helmet).map((el) => el.toComponent())} */}
        </Head>
        <body /*{...bodyAttrs}*/>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
