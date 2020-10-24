import { API_KEY, API_URL_BASE } from "../settings/API";

const fromApiResponseToGifs = (apiResponse) => {
  const { data } = apiResponse;
  if (Array.isArray(data)) {
    const trending = data.map((data) => {
      const { images, title, id } = data;
      const { url } = images.downsized_medium;
      return { title, id, url, like: false };
    });
    return trending;
  }
  return [];
};

const getTrending = async ({ limit = 10 }) => {
  try {
    const trending = await fetch(
      `${API_URL_BASE}/trending?api_key=${API_KEY}&limit=${limit}&rating=g`
    )
      .then((response) => response.json())
      .then(fromApiResponseToGifs);
    return trending;
  } catch (err) {
    console.log(`Error calling Trending: ${err}`);
    return [];
  }
};

export default getTrending;
