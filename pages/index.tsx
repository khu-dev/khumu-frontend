import { apiBase } from '@api/api-base';
import { GetServerSideProps } from 'next';

const IndexPage = (props: any) => {
  // console.log(props);

  return <div>its home!</div>;
};

export default IndexPage;

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
