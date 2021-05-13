// import { apiBase } from '@api/api-base';
import { GetServerSideProps } from 'next';

import MainPresenter from '@components/Presenter/Main';
import { mainItemList } from '@constants/mainItemList';

const MainPage = () => {
  return <MainPresenter itemList={mainItemList} />;
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
