import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./screens/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
