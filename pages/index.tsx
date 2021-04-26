// import { apiBase } from '@api/api-base';
import Main from '@components/main';
// import { GetServerSideProps } from 'next';

const MainPage = () => {
  return <Main />;
};

export default MainPage;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const id = context.params;
//   // const data = (await apiBase())?.data || null;

//   return {
//     props: {
//       // data,
//       id,
//     },
//   };
// };
