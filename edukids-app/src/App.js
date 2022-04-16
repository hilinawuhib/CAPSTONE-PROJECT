import logo from "./logo.svg";
import "./App.css";
import MyNavBar from "./components/MyNavbar";
import MyJumbotron from "./components/MyJumbotron"
import MyFooter from "./components/MyFooter"
function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <MyJumbotron/>
      <MyFooter/>
    </div>
  );
}

export default App;
