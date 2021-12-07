import PropTypes from "prop-types";

const baseUrl = "http://localhost:3001/api/v1";

/**
 * @function fetchUserData
 * @param {string} token - token given by a sucessful log in
 * @return {object} - response from API with in its body the user data
 */
const fetchUserData = async (token) => {
  try {
    const rawResponse = await fetch(`${baseUrl}/user/profile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const jsonResponse = await rawResponse.json();

    return jsonResponse;
  } catch (err) {
    console.error(err);
    return false;
  }
};

fetchUserData.propTypes = {
  token: PropTypes.string.isRequired,
};

export default fetchUserData;
