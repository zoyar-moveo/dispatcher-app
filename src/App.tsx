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
        <Route path="/" element={<Navigate replace to="/welcomepage" />} />
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/welcomepage" element={<WelcomePage />}></Route>
      </Routes>
    </>
  );
};

export default App;
