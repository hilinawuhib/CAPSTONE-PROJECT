import "./App.css";
import MyNavBar from "./components/MyNavbar";
import MyJumbotron from "./components/MyJumbotron";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Loginpage from "./components/LoginPage";
import MyCourse from "./components/MyCourse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <MyNavBar />
                <MyJumbotron />
                <MyFooter />
              </div>
            }
          ></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/login" element={<Loginpage />}></Route>
          <Route
            path="/courses"
            element={
              <div>
                <MyNavBar />
                <MyCourse />
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
