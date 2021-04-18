import { apiBase } from '@api/api-base';
import MainPresenter from '@components/main/Main.presenter';
import { GetServerSideProps } from 'next';

const MainContainer = (props: any) => {
  return <MainPresenter />;
};

export default MainContainer;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params;
  const data = (await apiBase())?.data || null;

  return {
    props: {
      data,
    },
  };
};
