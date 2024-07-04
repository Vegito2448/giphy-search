import { useEffect, useRef, useState } from 'react';

type Props = {
  url: string,
  options?: RequestInit; // options should be optional to allow fetch calls without options
};

function useFetch<T>({ url, options }: Props) {

  const isMounted = useRef(true);

  const [request, setRequest] = useState({
    data: null,
    loading: true,
    error: null
  } as {
    data: T | null; // Specify that data can be null
    loading: boolean;
    error: unknown;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);

        const data = await response.json() as T;

        if (isMounted.current) {

          setRequest({
            data,
            loading: false,
            error: null
          });

        }
      } catch (error) {
        if (isMounted.current) {

          setRequest({
            data: null,
            loading: false,
            error
          });

        }
      }
    };
    if (isMounted.current)
      fetchData();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted.current = false;
    };
  }, [url, options]); // useEffect dependencies should include url and options

  return request;
}

export { useFetch };

