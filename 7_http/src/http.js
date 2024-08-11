// this file is to add a sperate function for the code that fetches the place data (optional)
export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  if (!response.ok) {
    const error = new Error("Failed to fetch places");
    throw error;
  }

  return resData.places;
}

// fetching the stored places when the app loads
export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();
  if (!response.ok) {
    const error = new Error("Failed to fetch user places");
    throw error;
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    // backend expects an array with a "places" key
    body: JSON.stringify({ places: places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data!");
  }

  // backend code contains an object with a message property
  return resData.message;
}
