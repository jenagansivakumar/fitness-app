export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  params: { limit: '50' },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_YOUTUBE_KEY,
  },
};

export const fetchData = async (url, options) => {
  // Ensure that options is initialized to an empty object if it's not provided
  options = options || {};
  // Ensure that options.params is initialized to an empty object if it's not provided
  options.params = options.params || {};

  const queryString = Object.keys(options.params)
    .map(key => `${key}=${options.params[key]}`)
    .join('&');
  const requestUrl = `${url}?${queryString}`;

  const response = await fetch(requestUrl, options);
  const data = await response.json();
  return data;
};