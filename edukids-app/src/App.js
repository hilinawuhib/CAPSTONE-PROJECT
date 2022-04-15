import logo from "./logo.svg";
import "./App.css";
import MyNavBar from "./components/MyNavbar";
import MyJumbotron from "./components/MyJumbotron"
function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyJumbotron/>
    </div>
  );
}

export default App;
