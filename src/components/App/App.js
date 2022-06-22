import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "../../pages/Home.jsx";
import Menu from "../../pages/Menu.jsx";
import Chef from "../../pages/Chef.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/Menu" element={Menu} />
        <Route path="/Chef" element={Chef} />
      </Routes>
    </BrowserRouter>
  );
}

  
  export default App;
