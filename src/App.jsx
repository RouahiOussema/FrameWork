import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Accueil from "./components/Accueil/Accueil";
import Destinations from "./components/Destinations/Destinations";
import Apropos from "./components/Apropos/Apropos";
import Reservation from "./components/Reservation/Reservation";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* En-tête du site */}
        <Header />

        {/* Contenu principal avec routage */}
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* Pied de page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
