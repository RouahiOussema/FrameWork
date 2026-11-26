import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header(){
    return( < header className={style.header}>
    <h1>  Travel Agency</h1>
    <nav className={style.nav}>
    <NavLink to="/" className={({ isActive }) => (isActive ? style.active : "")}>Accueil</NavLink>
    <NavLink to="/destinations" className={({ isActive }) => (isActive ? style.active : "")}>Destinations</NavLink>
    <NavLink to="/apropos" className={({ isActive }) => (isActive ? style.active : "")}>A propos</NavLink>
    <NavLink to="/reservation" className={({ isActive }) => (isActive ? style.active : "")}>Réservation</NavLink>
    <NavLink to="/login" className={({ isActive }) => (isActive ? style.active : "")}>Connexion</NavLink>
    </nav>
    </header>
    );

}export default Header;
