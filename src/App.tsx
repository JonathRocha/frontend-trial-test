import { Header } from "@/components/header";
import { PrivateRoute } from "@/components/privateRoute";
import { Account } from "@/pages/account";
import { NotFound } from "@/pages/errors";
import { Login } from "@/pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "@/App.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="app">
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer autoClose={5000} closeOnClick pauseOnHover pauseOnFocusLoss />
      </main>
    </BrowserRouter>
  );
};
