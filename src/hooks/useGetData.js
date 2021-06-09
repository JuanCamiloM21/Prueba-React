import { useEffect, useState } from 'react';

const useGetData = (URL) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [URL]);
  return data;
};

export default useGetData;
