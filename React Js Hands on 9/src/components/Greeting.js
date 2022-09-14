import LoginPage from "./LoginPage";
import UserPage from "./UserPage";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserPage />;
  }
  return <LoginPage />;
}
export function LoginButton(props) {
  return (
    <div className="container mt-2 d-flex justify-content-center">
      <button className="btn btn-primary" onClick={props.onClick}>
        Login
      </button>
    </div>
  );
}
export function LogoutButton(props) {
  return (
    <div className="container mt-2 d-flex justify-content-center">
      <button className="btn btn-primary" onClick={props.onClick}>
        Logout
      </button>
    </div>
  );
}
export default Greeting;
