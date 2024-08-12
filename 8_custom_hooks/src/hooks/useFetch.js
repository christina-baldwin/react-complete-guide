import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  // loading state
  const [isFetching, setIsFetching] = useState();
  // error state
  const [error, setError] = useState();
  // data state
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  };
}
