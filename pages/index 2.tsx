import { apiBase } from '@api/api-base';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

const IndexPage = (props: any) => {
  // console.log(props);

  return (
    <div>
      <div>its home!</div>
      <Link href="/test">
        <a>go test</a>
      </Link>
    </div>
  );
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
