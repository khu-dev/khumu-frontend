import { useToken } from '@context/Token';
import { useEffect, useState } from 'react';

export const useFetchAxios = ({ func }) => {
  const { token } = useToken();
  const [result, setResult] = useState({
    data: null,
    loading: true,
    error: false,
  });

  const initRefresh = () => {
    result.loading &&
      setResult((prev) => ({
        ...prev,
        loading: true,
      }));
  };

  const refreshData = async () => {
    initRefresh();

    let result = null;
    let error = false;

    try {
      result = await func();
    } catch (err) {
      error = true;
    } finally {
      setResult({
        data: result,
        error,
        loading: false,
      });
    }
  };

  useEffect(() => {
    token && refreshData();
  }, [token]);

  return {
    result,
    refresh: refreshData,
  };
};