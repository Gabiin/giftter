import { API_URL_CUSTOM } from "../settings/API";

const fromApiResponseToLoginData = (apiResponse) => {
  const { token, userId, errors } = apiResponse;
  return { token, userId, errors };
};

export const getLogin = async ({ handler, password }) => {
  try {
    const { token, userId, errors } = await fetch(
      `${API_URL_CUSTOM}/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ handler, password }),
      }
    )
      .then((response) => response.json())
      .then(fromApiResponseToLoginData);
    return { token, userId, errors };
  } catch (err) {
    console.log(`Error calling login: ${err.errors}`);
    return {};
  }
};
