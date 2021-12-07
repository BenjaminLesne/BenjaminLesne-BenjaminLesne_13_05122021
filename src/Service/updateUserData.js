import PropTypes from "prop-types";

const baseUrl = "http://localhost:3001/api/v1";

/**
 * @function updateUserData
 * @param {Object} dataToAdd - token given by a sucessful log in
 * @param {String} token - token needed for being authentified
 * @return {Object} - response from API with in its body the user id and email
 */
const updateUserData = async (dataToAdd, token) => {
  try {
    const rawResponse = await fetch(`${baseUrl}/user/profile`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToAdd),
    });

    const jsonResponse = await rawResponse.json();

    return jsonResponse;
  } catch (err) {
    console.error(err);
    return false;
  }
};

updateUserData.propTypes = {
  token: PropTypes.string.isRequired,
};

export default updateUserData;
