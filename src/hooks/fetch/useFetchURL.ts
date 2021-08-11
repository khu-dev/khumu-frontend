import { useToken } from '@context/Token';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface UseFetchURL {
  method?: 'get' | 'post' | 'patch' | 'delete';
  url: string;
  option?: any;
}

export const useFetchURL = ({ method = 'get', url, option }: UseFetchURL) => {
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
      console.log(method);

      result = await axios.get(url, option);
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
