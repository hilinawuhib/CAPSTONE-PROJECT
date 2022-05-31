import "./App.css";
import MyNavBar from "./components/MyNavbar";
import MyNav from "./components/MyNav";
import MyJumbotron from "./components/MyJumbotron";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Loginpage from "./components/LoginPage";
import MyCourse from "./components/MyCourse";
import Moreinfo from "./components/Moreinfo";
import AddActivity from "./components/AddActivity";
import CourseDetail from "./components/CourseDetail";
import Dashboard from "./components/Dashboard";
import Addcourses from "./components/AddCourses";
import Myprofile from "./components/Profile";

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
                <Moreinfo />
                <MyFooter />
              </div>
            }
          ></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route
            path="/login"
            element={
              <div>
                
                <Loginpage />
              </div>
            }
          ></Route>
          <Route
            path="/courses"
            element={
              <div>
                <MyNavBar />
                <MyCourse />
              </div>
            }
          ></Route>
          <Route
            path="/addcourses"
            element={
              <div>
                <Addcourses />
              </div>
            }
          ></Route>
          <Route
            path="/CourseDetail"
            element={
              <div>
                <MyNav />
                <CourseDetail />
              </div>
            }
          ></Route>
          <Route
            path="/Dashboard"
            element={
              <div>
                <Dashboard />
              </div>
            }
          ></Route>
          <Route
            path="/profiles"
            element={
              <div>
                <Myprofile />
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
