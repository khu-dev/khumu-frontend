//@ts-nocheck
import { apiBase } from '@api/api-base';

const IndexPage = () => <div>its home!</div>;

export default IndexPage;

export const getServerSideProps = async (context) => {
  const id = context.params;
  const data = (await apiBase()).data || null;

  return {
    props: {
      data,
    },
  };
};
