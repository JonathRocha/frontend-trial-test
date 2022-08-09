import { Login } from "@/pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "@/App.scss";

export const App = () => {
  return (
    <main className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={5000} closeOnClick pauseOnHover pauseOnFocusLoss />
    </main>
  );
};
