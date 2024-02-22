export const exerciseOptions = {
  method: "GET",
  url: "https://exerciseapi3.p.rapidapi.com/exercise/name/",
  headers: {
    "X-RapidAPI-Host": "exerciseapi3.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
