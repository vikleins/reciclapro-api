import './Header.css'
import { Link } from "react-router-dom";


export default function Header({user}){
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    
    return (
        <header>
          <div className="logo">
                recicla-<span>PRO</span>
          </div>
          <div className="items">
            <Link to="/">
                    Home
            </Link>
                <Link to="/sobre-nos">
                    Sobre nós
                </Link>
                {user ? (
                    <>
                        <Link to="/agendamentos">
                            Ver Agendamentos
                        </Link>
                        <button id="logout" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                    
                ) : (
                    <>
                            <Link to="/agendamentos">
                                Fazer Agendamento
                            </Link>
                            <Link to="/login">
                                <button type="button" id="login">
                                    Log In
                                </button>
                            </Link>
                    </>
                    
                )}
          </div>
          
        
        </header>
    )
}