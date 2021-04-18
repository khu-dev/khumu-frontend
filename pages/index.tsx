import { apiBase } from '@api/api-base';
import MainPresenter from '@components/main/Main.presenter';
import { GetServerSideProps } from 'next';

const MainContainer = (props: any) => {
  // console.log(props);

  return <MainPresenter />;
};

export default MainContainer;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);

  const id = context.params;
  const data = (await apiBase())?.data || null;

  return {
    props: {
      data,
    },
  };
};
