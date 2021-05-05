// import { apiBase } from '@api/api-base';
import Main from '@components/Main';
import { GetServerSideProps } from 'next';

const MainPage = () => {
  return <Main />;
};

export default MainPage;

export const getServerSideProps: GetServerSideProps = async (/*context*/) => {
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
