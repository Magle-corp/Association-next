// Use.
import { useState, useEffect } from 'react';

const useFetch = (uri: string) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.BASE_URL}${uri}`).then((response) => {
      response.json().then((result) => {
        setData(result);
      });
    });
  }, [uri]);

  return data;
};

export { useFetch };
