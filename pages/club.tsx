import React, { useState, useEffect } from 'react';

import { fetchClubs } from '@api/api-clubs';
import ClubHeader from '@components/Header/Club';
import Club from '@views/Club';

const CirclesPage = () => {
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
      <ClubHeader title={'동아리'} />
      <Club clubs={clubs} />
    </>
  );
};

export default CirclesPage;
