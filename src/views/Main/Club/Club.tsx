import Link from 'next/link';
import { ClubApi } from '@src/api/ClubApi';
import { IMG_URI } from '@config/baseURI';
import { useFetchAxios } from '@hooks/fetch';
import { Club as ClubType } from '@interface/Club';
import { getRandomNumber } from '@utils/functions';

import * as cs from '../common.styled';
import * as s from './styled';

const Club = () => {
  const { result } = useFetchAxios({
    func: ClubApi.query,
  });

  const list: Array<ClubType> = result?.data?.data?.data || Array(3).fill(null);
  const totalLength = list.length;
  const pickedNum = getRandomNumber(0, totalLength - 1, 3);
  const pickedClub = pickedNum.map((num, idx) => (idx < 3 ? list[num] : null));

  return (
    <cs.MainSection>
      <cs.IconTitle pathname={`/clubs`} title={'동아리'} />
      <s.Clubs>
        {pickedClub.map(
          (club, idx) =>
            club && (
              <Link href={`/clubs?currentId=${club.id}`} key={club.name || idx}>
                <s.ClubItem url={`${IMG_URI}/${club.images[0]}`}>
                  <s.Name>{club?.name}</s.Name>
                </s.ClubItem>
              </Link>
            ),
        )}
      </s.Clubs>
    </cs.MainSection>
  );
};

export default Club;
