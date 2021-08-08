import { BsPlayFill } from 'react-icons/bs';

import { fetchClubs } from '@api/api-clubs';
import { IMG_URI } from '@config/baseURI';
import { useFetchAxios } from '@hooks/fetch';
import { getRandomNumber } from '@utils/functions';

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
    <s.Container>
      <s.Title>
        동아리
        <BsPlayFill size={18} />
      </s.Title>
      <s.Clubs>
        {pickedClub.map((club) => (
          <s.ClubItem key={club?.name} url={`${IMG_URI}/${club?.images?.[0]}`}>
            <s.Name>{club?.name}</s.Name>
          </s.ClubItem>
        ))}
      </s.Clubs>
    </s.Container>
  );
};

export default Club;
