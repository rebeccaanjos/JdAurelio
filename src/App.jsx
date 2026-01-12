import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dizimos from "./pages/Dizimos";
import Pastor from "./pages/Pastor";
import Irmas from "./pages/Irmas";
import Adolescentes from "./pages/Adolescentes";
import Jovens from "./pages/Jovens";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dizimos" element={<Dizimos />} />
      <Route path="/pastor" element={<Pastor />} />
      <Route path="/irmas" element={<Irmas />} />
      <Route path="/adolescentes" element={<Adolescentes />} />
      <Route path="/jovens" element={<Jovens />} />
    </Routes>
  );
}
