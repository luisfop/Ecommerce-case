import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { AuthProvider } from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoute/PrivateRoute";

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/u" element={<PrivateRoutes />}>
            <Route path="layout" element={<Layout />} />
          </Route>
          <Route path="/" element={<Auth/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
