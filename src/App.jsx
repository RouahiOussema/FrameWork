import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Destinations from "./components/Destinations/Destinations";
import Reservation from "./components/Reservation/Reservation";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <div className="app">
        {/* En-tête du site */}
        <Header />

        {/* Contenu principal */}
        <main>
          {/* Section Destinations */}
          <Destinations />

          {/* Section Réservation */}
          <Reservation />

          {/* Section Connexion (affichée après Réservation) */}
          <Login />
        </main>

        {/* Pied de page */}
        <Footer />
      </div>
    </>
  );
}

export default App;
