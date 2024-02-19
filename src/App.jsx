import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home";
import 'animate.css/animate.min.css';
import Menu from "./pages/Menu";
import SpecialMenu from "./pages/SpecialMenu";

function App() {

  return (
      <BrowserRouter basename={''}>
          <Routes>
              <Route path={'/'} element={<Layout />}>
                  <Route index element={<Home/>}/>
                  <Route path={'menu'} element={<Menu/>}/>
                  <Route path={'special_menu'} element={<SpecialMenu/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
