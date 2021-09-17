import React from 'react';

import { fetchClubs } from '@api/api-clubs';
import { Club } from '@interface/Club';
import ClubsHeader from '@components/Header/Clubs';
import Clubs from '@views/Clubs';

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

const ClubsPage = ({ clubs, categories }: Props) => {
  return (
    <>
      <ClubsHeader title={'동아리'} />
      <Clubs categories={categories} clubs={clubs} />
    </>
  );
};

export default ClubsPage;

export const getServerSideProps = async () => {
  const res = await Promise.all([fetchClubs.select(), fetchClubs.categories()]);

  return {
    props: {
      clubs: res[0].data?.data || [initialClub],
      categories: res[1].data?.data || ['전체'],
    },
  };
};
