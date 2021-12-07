import PropTypes from "prop-types";

const baseUrl = "http://localhost:3001/api/v1";

/**
 * @function login
 * @param {string} email
 * @param {string} password
 * @return {object} - response from API with in its body the user token
 */
const login = async (email, password) => {
  try {
    const rawResponse = await fetch(`${baseUrl}/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const jsonResponse = await rawResponse.json();

    return jsonResponse;
  } catch (err) {
    console.error(err);
    return false;
  }
};

login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default login;
