import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

import GetAllProtocolos from "./pages/GetAllProtocolos";
import CreateProtocolos from "./pages/CreateProtocolo";


export function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<CreateProtocolos />} />
          <Route path="/getAllProtocolos" element={<GetAllProtocolos />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </Router>
    </>

  )
}


