import { API_URL_CUSTOM } from "../settings/API";

export const addLike = async ({ token, gifId, userId, title, url }) => {
  try {
    const data = await fetch(
      `${API_URL_CUSTOM}/favorites/like/${gifId}/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        body: JSON.stringify({ title, url }),
      }
    )
      .then((response) => response.json())
      .then((data) => data.fav);

    return data;
  } catch (err) {
    console.log(`Error calling addLike: ${err}`);
    return {};
  }
};

export const unLike = async ({ token, favId }) => {
  try {
    const data = await fetch(`${API_URL_CUSTOM}/favorites/unlike/${favId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    })
      .then((response) => response.json())
      .then((data) => data.fav);

    return data;
  } catch (err) {
    console.log(`Error calling unlike: ${err}`);
    return {};
  }
};
