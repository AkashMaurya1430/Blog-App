import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./screens/Signup";
import Home from "./screens/Home";
import AddBlog from "./screens/AddBlog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [dark, setDark] = useState(false);

  // const darkModeHandler = () => {
  //   setDark(!dark);
  //   document.body.classList.toggle("dark");
  // };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign_up" element={<SignUp formType={"sign_up"} />} />
          <Route path="/" element={<SignUp formType={"login"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddBlog />} />
        </Routes>
        <ToastContainer autoClose={2000} />
      </BrowserRouter>
    </>
  );
}

export default App;
