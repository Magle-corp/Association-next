// Use.
import { useState, useEffect } from 'react';
import { Homepage, Identity } from './type';

const useFetch = (uri: string) => {
  const [data, setData] = useState<Homepage | Identity>();

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
