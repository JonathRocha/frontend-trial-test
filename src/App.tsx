import { Login } from "@/pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@/App.scss";

export const App = () => {
  return (
    <main className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
