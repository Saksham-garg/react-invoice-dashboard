import "./App.css";
import MainLayout from "./layout/MainLayout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Accounting from "./pages/Accounting";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to={"/accounting"} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounting" element={<Accounting />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
