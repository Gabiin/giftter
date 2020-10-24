import { API_URL_CUSTOM } from "../settings/API";

export const getUser = async ({ token, userId }) => {
  try {
    const { user } = await fetch(`${API_URL_CUSTOM}/users/${userId}`, {
      method: "GET",
      headers: {
        "x-access-token": token,
      },
    }).then((response) => response.json());

    return user;
  } catch (err) {
    console.log(`Error calling getUser: ${err.errors}`);
    return {};
  }
};

export default getUser;
