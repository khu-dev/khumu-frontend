import { fetchClubs } from '@api/api-clubs';
import { IMG_URI } from '@config/baseURI';
import { useFetchAxios } from '@hooks/fetch';
import { getRandomNumber } from '@utils/functions';

import * as cs from '../common.styled';
import * as s from './styled';

const Club = () => {
  const { result } = useFetchAxios({
    func: fetchClubs.select,
  });

  const list: Array<any> = result?.data?.data?.data || Array(3).fill(null);
  const totalLength = list.length;
  const pickedNum = getRandomNumber(0, totalLength - 1, 3);
  const pickedClub = pickedNum.map((num) => list[num]);

  return (
    <cs.MainSection>
      <cs.Title title={'동아리'} />
      <s.Clubs>
        {pickedClub.map((club, idx) => (
          <s.ClubItem
            key={club?.name || idx}
            url={`${IMG_URI}/${club?.images?.[0]}`}
          >
            <s.Name>{club?.name}</s.Name>
          </s.ClubItem>
        ))}
      </s.Clubs>
    </cs.MainSection>
  );
};

export default Club;
