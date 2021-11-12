import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";

import WelcomePage from "./pages/WelcomePage/WelcomePage";
import GlobalStyles from "./GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/welcomepage" element={<WelcomePage />}></Route>
        <Route path="/" element={<Navigate replace to="/homepage" />} />
      </Routes>
    </>
  );
};

export default App;
