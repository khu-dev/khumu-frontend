// import { apiBase } from '@api/api-base';
import Main from '@components/main';
import { GetServerSideProps } from 'next';

const MainPage = (props: any) => {
  console.log('main! ', props);

  return <Main />;
};

export default MainPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);

  // const data = (await apiBase())?.data || null;
  console.log('loading ...');
  function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
  }
  sleep(1000);
  console.log('done!');

  return {
    props: {
      // data,
      null: null,
    },
  };
};
