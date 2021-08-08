import { fetchClubs } from '@api/api-clubs';
import { useFetchAxios } from '@hooks/fetch';

const Club = () => {
  const { result } = useFetchAxios({
    func: fetchClubs.select,
  });

  const list = result?.data?.data?.data || [];

  console.log('clubdata', list);

  return <div>Club</div>;
};

export default Club;
