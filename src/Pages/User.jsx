import Header from "../Components/Header";
import Account from "../Components/Account";

import { useSelector } from "react-redux";

const User = () => {
  const lightmode = useSelector((state) => state.lightMode);
  return (
    <main className={`main ${lightmode ? " bg-light" : " bg-dark"}`}>
      <Header />
      <h2 className="sr-only">Accounts</h2>
      <Account
        title={"Argent Bank Checking (x8349)"}
        description={"Available Balance"}
        amount={2.08279}
      />
      <Account
        title={"Argent Bank Savings (x6712)"}
        description={"Available Balance"}
        amount={10.92842}
      />
      <Account
        title={"Argent Bank Credit Card (x8349)"}
        description={"Current Balance"}
        amount={184.3}
      />
    </main>
  );
};

export default User;
