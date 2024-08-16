import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./screens/Signup";
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
        <Route path="/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
