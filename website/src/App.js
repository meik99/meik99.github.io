import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import CoffeeBank from "./pages/coffeebank/CoffeeBank";
import DynatraceOperator from "./pages/dynatrace-operator/DynatraceOperator";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/coffeebank" element={<CoffeeBank />} />
          <Route path="/dynatrace-operator" element={<DynatraceOperator />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
