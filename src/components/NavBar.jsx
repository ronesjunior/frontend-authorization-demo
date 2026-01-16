// Nova importação – useNavigate
import { NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../utils/token";
import Logo from "./Logo";
import "./styles/NavBar.css";
import { useContext } from "react"; // Nova importação
import AppContext from "../context/Appcontext";

function NavBar() {
  // Invoque o hook.
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);

  // A função signOut remove o token do armazenamento
  // local, manda os usuários de volta  para a página de login e
  // define isLoggedIn como false.
  function signOut() {
    removeToken();
    navigate("/login");
    setIsLoggedIn(false);
  }
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>
      <ul className="navbar__nav">
        <li>
          <NavLink to="/ducks" className="navbar__link">
            Ducks
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-profile" className="navbar__link">
            Meu perfil
          </NavLink>
        </li>
        <li>
          <button onClick={signOut} className="navbar__link navbar__button">
            Sair
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
