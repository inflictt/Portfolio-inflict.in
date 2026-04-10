import { Outlet } from "react-router-dom";
import Snowfall from "react-snowfall";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";

export default function RootLayout() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Snowfall
        color="#ffffff"
        snowflakeCount={150}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Main centered wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  border-l border-r  border-amber-50/25">
        <Header   />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
}