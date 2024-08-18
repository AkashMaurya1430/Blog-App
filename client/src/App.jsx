import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./screens/Signup";
import Home from "./screens/Home";
// import { useState } from "react";

function App() {
  // const [dark, setDark] = useState(false);

  // const darkModeHandler = () => {
  //   setDark(!dark);
  //   document.body.classList.toggle("dark");
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign_up" element={<SignUp formType={"sign_up"} />} />
        <Route path="/" element={<SignUp formType={"login"} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
