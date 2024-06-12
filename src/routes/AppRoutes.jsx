import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login/index_log.jsx";
import { Register } from "../pages/Register/index_cad.jsx";
import { Tool } from "../pages/Tool/index_lov.jsx";
import { Practice } from "../pages/Practice/index_game.jsx";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Lovelace_1.2.4/login" element={<Login />} />
        <Route path="/Lovelace_1.2.4/register" element={<Register />} />
        <Route path="/Lovelace_1.2.4/tool" element={<Tool />} />
        <Route path="/Lovelace_1.2.4/practice" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
}
