import { useContext } from "react";
import { AuthContext } from "../App";

const fakeUser = { username: "ploy1501", fullname: "Thanaporn" };

function LoginBox() {
  const { authState, authDispatch } = useContext(AuthContext);

  function loginSubmit(event) {
    event.preventDefault();
    authDispatch({ type: "login", payload: fakeUser });
  }

  function logoutSubmit() {
    authDispatch({ type: "logout" });
  }

  if (!!authState) {
    return (
      <div>
        <p>Auth username :: {authState.username} </p>
        <p>Auth fullname :: {authState.fullname} </p>
        <p>
          <button onClick={logoutSubmit} className="btn-logout">
            Logout
          </button>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={loginSubmit}>
      <p>
        <input type="text" placeholder="username" />
      </p>
      <p>
        <input type="password" placeholder="password" />
      </p>
      <p>
        <button type="submit" className="btn-login">
          Log in
        </button>
      </p>
    </form>
  );
}

export default LoginBox;
