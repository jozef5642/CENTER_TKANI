import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SingUp } from "./pages/singUp/SingUp";
import { LogIn } from "./pages/logIn/LogIn";
import { Forgot } from "./pages/forgot/Forgot";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sing_up" element={<SingUp />} />
            <Route path="log_in" element={<LogIn />} />
            <Route path="forgot" element={<Forgot />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
