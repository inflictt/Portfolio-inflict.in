import { Outlet } from "react-router-dom";
import Snowfall from "react-snowfall";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 sm:border-l sm:border-r border-amber-50/25">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
}