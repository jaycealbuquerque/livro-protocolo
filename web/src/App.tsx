import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

import ListarProtocolos from "./pages/ListarProtocolos";


export function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<ListarProtocolos />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </Router>
    </>

  )
}


