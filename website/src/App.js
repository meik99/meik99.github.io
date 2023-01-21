import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/home/home';
import CoffeeBank from "./pages/coffeebank/coffeebank";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/coffeebank" element={<CoffeeBank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
