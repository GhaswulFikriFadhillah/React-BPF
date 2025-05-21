import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Suspense } from "react";

const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const NotFound400 = React.lazy(() => import("./pages/NotFound400"));
const NotFound401 = React.lazy(() => import("./pages/NotFound401"));
const NotFound403 = React.lazy(() => import("./pages/NotFound403"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));
const Landing = React.lazy(() => import("./pages/Guest/Landing"));
const About = React.lazy(() => import("./pages/Guest/About"));
const TopProduk = React.lazy(() => import("./pages/Guest/TopProduk"));
const Testimoni = React.lazy(() => import("./pages/Guest/Testimoni"));
const CekMember = React.lazy(() => import("./pages/Guest/CekKeanggotaan"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/top-produk" element={<TopProduk />} />
          <Route path="/testimoni" element={<Testimoni />} />
          <Route path="/cek-member" element={<CekMember />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="*1" element={<NotFound />} />
        <Route path="*2" element={<NotFound400 />} />
        <Route path="*3" element={<NotFound403 />} />
        <Route path="*4" element={<NotFound401 />} />
      </Routes>
    </Suspense>
  );
}

export default App;
