import React, { useState, useEffect } from 'react';

import { fetchClubs } from '@api/api-clubs';
import { Club } from '@interface/club';
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

const ClubsPage = () => {
  const [clubs, setClubs] = useState<Club[]>([initialClub]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const clubResult = await fetchClubs.select();
      const categoriesResult = await fetchClubs.categories();

      if (clubResult.status === 200) {
        setClubs(clubResult.data.data);
        setCategories(categoriesResult.data.data);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ClubsHeader title={'동아리'} />
      <Clubs categories={categories} clubs={clubs} />
    </>
  );
};

export default ClubsPage;
