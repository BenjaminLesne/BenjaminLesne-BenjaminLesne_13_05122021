import "../styles/SignInContent.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import login from "../Service/login";
import fetchUserData from "../Service/fetchUserData";

const SignInContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isConnected = useSelector((state) => state.isConnected);

  const handleSubmit = async (event) => {
    const email = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const rememberMe = document.querySelector("#remember-me").checked;

    event.preventDefault();

    //API request to check the login infos
    const loginResponse = await login(email, password);

    if (loginResponse.status === 200) {
      document.querySelector(".login-failed-message").style.display = "none";

      const token = loginResponse.body.token;
      dispatch({ type: "addPayloadToState", payload: { token: token } });

      /* we could store the token in localStorage and wait that the user really need its user data to fetch them but this has security risks in my opinion.
      I rather fetch the user data right away. Even if the user don't need those data at the end.*/
      const fetchUserDataResponse = await fetchUserData(token);
      const userData = fetchUserDataResponse.body;

      dispatch({ type: "updateUserData", payload: userData });
      dispatch({ type: "handleIsConnected" });

      navigate(`/`);
    } else {
      console.log("wrong password or username");
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <p className="login-failed-message">Error: wrong login</p>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="email" id="username" required />
          <p className="error-message">An email is required</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
          <p className="error-message">A password is required</p>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
        {/* <a href="./user.html" className="sign-in-button">
          Sign In
        </a> */}
        {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
        <button className="sign-in-button" onClick={handleSubmit}>
          Sign In
        </button>
      </form>
    </section>
  );
};

export default SignInContent;
