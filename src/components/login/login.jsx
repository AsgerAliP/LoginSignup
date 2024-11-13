import { useRef } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const navigate = useNavigate();

  const Loginhandler = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("userRegDetails"));

    if (
      user &&
      user.email === enteredEmail.current.value &&
      user.password === enteredPassword.current.value
    ) {
      alert(`Welcome, ${user.name}`);
      enteredEmail.current.value = "";
      enteredPassword.current.value = "";
      navigate("/welcome");
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <>
      <form className="container" onSubmit={Loginhandler}>
        <div className="header">
          <div className="text">Login</div>
        </div>
        <div className="inputs">
          <input type="email" placeholder="Email" ref={enteredEmail} />
          <input type="password" placeholder="Password" ref={enteredPassword} />
        </div>
        <button type="submit" className="submit">
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
