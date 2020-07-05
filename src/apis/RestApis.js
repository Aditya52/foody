export const getRestList = () => {
  return fetch("/api/movies")
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
};


