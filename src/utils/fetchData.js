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

export const fetchData = async (url, options = {}) => {
  const { params = {} } = options;

  const queryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  const requestUrl = `${url}?${queryString}`;

  try {
    const response = await fetch(requestUrl, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};
