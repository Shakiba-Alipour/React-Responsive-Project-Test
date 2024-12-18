import "./App.css";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Clients from "./components/Clients.js";
import Info from "./components/Info.js";
import Demo from "./components/Demo.js";
import Blog from "./components/Blog.js";
import CustomFooter from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Clients />
      <Info />
      <Blog />
      <Demo />
      <CustomFooter />
    </div>
  );
}

export default App;
