import React, { useState, useEffect } from 'react';

import { fetchClubs } from '@api/api-clubs';
import ClubsHeader from '@components/Header/Clubs';
import Clubs from '@views/Clubs';

const ClubsPage = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchClubs.select();

      if (result.status === 200) {
        setClubs(result.data.data);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ClubsHeader title={'동아리'} />
      <Clubs clubs={clubs} />
    </>
  );
};

export default ClubsPage;
