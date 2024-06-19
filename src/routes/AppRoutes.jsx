import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login/index_log.jsx";
import { Register } from "../pages/Register/index_cad.jsx";
import { Tool } from "../pages/Tool/index_lov.jsx";
import { Practice } from "../pages/Practice/index_game.jsx";


import CreateActivity from "../components/pages/CreateActivity.jsx";
import AccessActivity from "../components/pages/AccessActivity.jsx";
import Container from "../components/layout/Container.jsx";
import Activity from "../components/pages/Activity.jsx";
import AccessCode from "../components/pages/AccessCode.jsx";



export function AppRoutes() {
  return (
    <BrowserRouter>
    <Container className="container_all">
      <Routes>
        <Route path="/Lovelace_1.2.4" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tool" element={<Tool />} />
        <Route path="/practice" element={<Practice />} />
        <Route path='/createactivity' element={<CreateActivity/>}/>
        <Route path='/access/:id' element={<AccessActivity/>}/>
        <Route path='/activity/:id' element={<Activity/>}/>
        <Route path='/accesscode' element={<AccessCode/>}/>
      </Routes>
    </Container>

    </BrowserRouter>
  );
}
