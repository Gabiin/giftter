export const getNormalize = (key) => {
  let realKey;

  switch (key) {
    case "name":
      realKey = "Name";
      break;
    case "lastname":
      realKey = "Lasname";
      break;
    case "email":
      realKey = "Email";
      break;
    case "password":
      realKey = "Password";
      break;
    case "confirmPassword":
      realKey = "Confirm Password";
      break;
    case "handler":
      realKey = "Username";
      break;
    default:
      realKey = key;
      break;
  }

  return realKey;
};
