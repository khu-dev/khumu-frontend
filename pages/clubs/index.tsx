import React, { useEffect, useState } from 'react';

import { fetchClubs } from '@api/api-clubs';
import { Club } from '@interface/Club';
import ClubsHeader from '@components/Header/Clubs';
import Clubs from '@views/Clubs';
import { useToken } from '@src/context/Token';

const initialClub: Club = {
  categories: '',
  description: '',
  email: '',
  facebook: '',
  homepage: '',
  id: 0,
  images: [''],
  instagram: '',
  like_count: 0,
  liked: false,
  name: '',
  phone: '',
  recommended: false,
  summary: '',
};

interface Props {
  clubs: Club[];
  categories: string[];
}

const ClubsPage = ({ clubs: _clubs, categories: _categories }: Props) => {
  const { token } = useToken();
  const [data, setData] = useState<Props>({
    clubs: _clubs || [initialClub],
    categories: _categories || ['전체'],
  });

  useEffect(() => {
    if ((_clubs && _categories) || !token) return;

    const fetchData = async () => {
      const res = await Promise.all([fetchClubs.select(), fetchClubs.categories()]);

      if (res[0].status === 200) {
        setData({
          clubs: res[0].data?.data,
          categories: res[1].data?.data,
        });
      }
    };

    fetchData();
  }, [_clubs, _categories, token]);

  const { clubs, categories } = data;

  return (
    <>
      <ClubsHeader title={'동아리'} />
      <Clubs categories={categories} clubs={clubs} />
    </>
  );
};

export default ClubsPage;

export const getServerSideProps = async (ctx) => {
  let res = [null, null];
  console.log(ctx.req.headers);

  try {
    res = await Promise.all([fetchClubs.select(), fetchClubs.categories()]);
  } catch (e) {
    console.log('fetch clubs error in server side');
  }

  return {
    props: {
      clubs: res[0].data?.data,
      categories: res[1].data?.data,
    },
  };
};
