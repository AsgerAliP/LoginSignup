import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Welcome from "./components/welcome/welcome";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;

// react toastify
// tailwind css
