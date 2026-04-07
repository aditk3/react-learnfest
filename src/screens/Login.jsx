import { useContext } from "react";
import AuthContext from "../contexts/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setIsLoggedIn } = useContext(AuthContext);
  let navigate = useNavigate();

  return (
    <>
      <h1>Click to Login</h1>
      
      <button
        className="btn btn-primary"
        onClick={() => {
          setIsLoggedIn(true);
          navigate("/");
        }}
      >
        Login
      </button>
    </>
  );
}
