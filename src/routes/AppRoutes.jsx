// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout.jsx";
import Home from "../pages/Home.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
