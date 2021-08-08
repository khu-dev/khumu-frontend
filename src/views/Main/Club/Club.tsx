import { fetchClubs } from '@api/api-clubs';
import { useFetchAxios } from '@hooks/fetch';
import { getRandomNumber } from '@utils/functions';

const Club = () => {
  const { result } = useFetchAxios({
    func: fetchClubs.select,
  });

  const list: Array<any> = result?.data?.data?.data || Array(3).fill(null);
  const totalLength = list.length;
  const pickedNum = getRandomNumber(0, totalLength - 1, 3);
  const pickedClub = pickedNum.map((num) => list[num]);

  console.log(pickedClub, pickedNum);

  return <div>Club</div>;
};

export default Club;
