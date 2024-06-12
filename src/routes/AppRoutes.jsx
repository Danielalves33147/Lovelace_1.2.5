import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login/index_log.jsx";
import { Register } from "../pages/Register/index_cad.jsx";
import { Tool } from "../pages/Tool/index_lov.jsx";
import { Practice } from "../pages/Practice/index_game.jsx";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tool" element={<Tool />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
}
