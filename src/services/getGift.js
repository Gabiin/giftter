import { API_KEY, API_URL_BASE } from "../settings/API";

const fromApiResponseToGifs = (apiResponse) => {
  const { data } = apiResponse;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;
  return { title, id, url };
};

const getGif = async ({ gifId }) => {
  try {
    const data = await fetch(`${API_URL_BASE}/${gifId}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then(fromApiResponseToGifs);

    return data;
  } catch (err) {
    console.log(`Error calling getGif: ${err}`);
    return {};
  }
};

export default getGif;
