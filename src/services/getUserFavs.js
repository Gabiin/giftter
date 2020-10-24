import { API_URL_CUSTOM } from "../settings/API";

export const getUserFavs = async ({ token, userId }) => {
  try {
    const data = await fetch(
      `${API_URL_CUSTOM}/favorites/getFavorites/${userId}`,
      {
        method: "GET",
        headers: {
          "x-access-token": token,
        },
      }
    ).then((response) => response.json());

    return data.favs;
  } catch (err) {
    console.log(`Error calling getUserFavs: ${err.errors}`);
    return [];
  }
};
