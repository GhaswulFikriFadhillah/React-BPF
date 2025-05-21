import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function GuestLayout() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex flex-col">
      <NavBar />
      <main id="main-content" className="flex-1 p-4 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
