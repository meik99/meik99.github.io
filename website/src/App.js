import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import CoffeeBank from "./pages/coffeebank/CoffeeBank";
import DynatraceOperator from "./pages/dynatrace-operator/DynatraceOperator";
import About from "./pages/about/About";
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/coffeebank" element={<CoffeeBank />} />
          <Route path="/dynatrace-operator" element={<DynatraceOperator />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy/:app" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
