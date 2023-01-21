import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import CoffeeBank from "./pages/coffeebank/CoffeeBank";
import DynatraceOperator from "./pages/dynatrace-operator/DynatraceOperator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/coffeebank" element={<CoffeeBank />} />
          <Route path="/dynatrace-operator" element={<DynatraceOperator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
