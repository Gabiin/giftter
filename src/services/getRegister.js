import { API_URL_CUSTOM } from "../settings/API";

const fromApiResponseToRegisterData = (apiResponse) => {
  console.log(apiResponse);
  const { message, errors } = apiResponse;
  return { message, errors };
};

export const getRegister = async ({
  handler,
  name,
  lastname,
  email,
  password,
  confirmPassword,
}) => {
  try {
    const { message, errors } = await fetch(
      `${API_URL_CUSTOM}/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          handler,
          name,
          lastname,
          email,
          password,
          confirmPassword,
        }),
      }
    )
      .then((response) => response.json())
      .then(fromApiResponseToRegisterData);
    return {
      message,
      errors,
    };
  } catch (err) {
    console.log(`Error calling login: ${err.errors}`);
    return {};
  }
};
