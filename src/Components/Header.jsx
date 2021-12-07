import "../styles/Header.css";
import "../styles/UpdateUserNames.css";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import updateUserData from "../Service/updateUserData";

const Header = () => {
  const [openEditMenu, setOpenEditMenu] = useState(false);
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const lightMode = useSelector((state) => state.lightMode);
  const token = useSelector((state) => state.token);

  const firstNameInput = document.getElementById("input-firstname");
  const lastNameInput = document.getElementById("input-lastname");

  /**
   * @function handleSave - trigger updateUserData(), then trigger "addPayloadToState" to update redux state and close the names edit menu
   * @param {Object} e - the click event
   */
  const handleSave = async (e) => {
    e.preventDefault();
    const newData = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
    };

    const updateUserDataResponse = await updateUserData(newData, token);

    //get data from API response to make sure the data base and the redux state are synchronized
    const newFirstName = updateUserDataResponse.body.firstName;
    const newLastName = updateUserDataResponse.body.lastName;

    const updatedUserData = { lastName: newLastName, firstName: newFirstName };
    dispatch({ type: "addPayloadToState", payload: updatedUserData });

    setOpenEditMenu(false);
  };

  useEffect(() => {
    dispatch({ type: "changeLightMode", payload: openEditMenu });
  }, [openEditMenu]);

  return (
    <div className="header">
      <h1 className={`header__title--${lightMode ? "light" : ""}`}>
        Welcome back
        <br />
        {openEditMenu ? "" : firstName + " " + lastName + "!"}
      </h1>
      {openEditMenu ? (
        <form className="UpdateUserNames">
          <div className="UpdateUserNames__inputs">
            <input
              className="UpdateUserNames__input"
              type="text"
              placeholder="Firstname"
              id="input-firstname"
            />
            <input
              className="UpdateUserNames__input"
              type="text"
              placeholder="Lastname"
              id="input-lastname"
            />
          </div>
          <div className="UpdateUserNames__buttons">
            <button
              className="UpdateUserNames__button"
              type="onSubmit"
              onClick={(event) => handleSave(event)}
            >
              Save
            </button>
            <button
              className="UpdateUserNames__button"
              type="button"
              onClick={() => setOpenEditMenu(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button className="edit-button" onClick={() => setOpenEditMenu(true)}>
          Edit Name
        </button>
      )}
    </div>
  );
};

export default Header;
