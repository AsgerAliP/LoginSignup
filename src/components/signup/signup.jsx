import { useRef } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const SignUphandler = (e) => {
    e.preventDefault();

    const Newname = name.current.value;
    const Newemail = email.current.value;
    const Newpassword = password.current.value;

    if (Newname === "" || Newemail === "" || Newpassword === "") {
      alert("Please fill the form.");
    } else {
      const user = { name: Newname, email: Newemail, password: Newpassword };
      localStorage.setItem("userRegDetails", JSON.stringify(user));
      alert("Registration Successful.");
      name.current.value = "";
      email.current.value = "";
      password.current.value = "";
      navigate("/login");
    }
  };

  return (
    <form className="container" onSubmit={SignUphandler}>
      <div className="header">
        <div className="text">Sign Up</div>
      </div>
      <div className="inputs">
        <input type="text" placeholder="Enter Username" ref={name} />
        <input type="email" placeholder="Enter Email" ref={email} />
        <input type="password" placeholder="Enter Password" ref={password} />
      </div>
      <button type="submit" className="submit">
        Sign Up
      </button>
    </form>
  );
}

export default Signup;
