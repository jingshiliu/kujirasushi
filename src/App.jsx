import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home";
import 'animate.css/animate.min.css';

function App() {

  return (
      <BrowserRouter basename={''}>
          <Routes>
              <Route path={'/'} element={<Layout />}>
                  <Route index element={<Home/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
