import "../styles/MainNav.css";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import argentBankLogo from "../img/argentBankLogo.png";

import { useSelector, useDispatch } from "react-redux";

const MainNav = () => {
  const isConnected = useSelector((state) => state.isConnected);
  const firstName = useSelector((state) => state.firstName);
  const dispatch = useDispatch();

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to={isConnected ? "/user" : "/sign-in"}>
          <i className="fa fa-user-circle"></i>
          {isConnected ? firstName : "Sign In"}
        </Link>
        {isConnected ? (
          <Link
            className="main-nav-item"
            onClick={() => dispatch({ type: "handleIsConnected" })}
            to="/"
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        ) : null}
      </div>
    </nav>
  );
};

MainNav.propTypes = {
  firstname: PropTypes.string,
};
export default MainNav;
