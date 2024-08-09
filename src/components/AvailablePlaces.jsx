import { useState, useEffect } from "react";

import Places from "./Places.jsx";

// this doesnt work when getting data from a backend
// const places = localStorage.getItem();

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      if (!response.ok) {
        const error = new Error("Failed to fetch places");
        throw error;
      }

      setAvailablePlaces(resData.places);
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);
  // this creates an infinite loop because it is in the component function is it would be re-executed every time the component re-executes so need to use useEffect
  //   fetch("http://localhost:3000/places")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((resData) => {
  //       setAvailablePlaces(resData.places);
  //     });
  // }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
