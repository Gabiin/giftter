import { API_KEY, API_URL_BASE } from "../settings/API";

const fromApiResponseToGifs = (apiResponse) => {
  const { data, pagination } = apiResponse;
  const totalCount = pagination.total_count;
  if (Array.isArray(data)) {
    const search = data.map((data) => {
      const { images, title, id } = data;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return { search, totalCount };
  }
  return [];
};

const getSearch = async ({ keyword, page = 0, limit = 10 }) => {
  try {
    const { search, totalCount } = await fetch(
      `${API_URL_BASE}/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
        page * limit
      }&rating=g&lang=en`
    )
      .then((response) => response.json())
      .then(fromApiResponseToGifs);
    return { search, totalCount };
  } catch (err) {
    console.log(`Error calling Search: ${err}`);
    return [];
  }
};

export default getSearch;
