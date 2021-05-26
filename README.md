# KHUMU FRONTEND

`Next.js`를 사용하여 쿠뮤 어플리케이션의 웹뷰를 `Server Side Rendering`(이하 SSR)을 통해 띄운다.

### Deployed

- with [Vercel for Test](https://khumu-frontend.vercel.app/)

- with Cloud Front for Production

## Pages

<img src="https://user-images.githubusercontent.com/49581472/119507201-97de8f00-bda9-11eb-8ea2-12381aaa99c6.gif" width="300px">

BASE URL : [https://khumu-frontend.vercel.app/](https://khumu-frontend.vercel.app/)

| Page Name |                         URL                         |
| :-------: | :-------------------------------------------------: |
|   MAIN    |       [/](https://khumu-frontend.vercel.app/)       |
|  QRCODE   | [/qrcode](https://khumu-frontend.vercel.app/qrcode) |
|  MY PAGE  | [/mypage](https://khumu-frontend.vercel.app/mypage) |

## SSR vs Client Side Rendering

|         구분          |     SSR     |     CSR     |
| :-------------------: | :---------: | :---------: |
| SEO(검색 엔진 최적화) |      O      |      X      |
| 초기 컨텐츠 로딩속도  | 비교적 빠름 | 비교적 느림 |

### Git commit 규칙

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서의 수정
- style : (코드의 수정 없이) 스타일(style)만 변경(들여쓰기 같은 포맷이나 세미콜론을 빼먹은 경우)
- refactor : 코드를 리펙토링
- test : Test 관련한 코드의 추가, 수정
- chore : (코드의 수정 없이) 설정을 변경
