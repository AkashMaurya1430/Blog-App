import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./screens/Signup";
import Home from "./screens/Home";
import AddBlog from "./screens/AddBlog";
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
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
