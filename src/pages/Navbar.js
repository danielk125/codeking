import logo from '../CodeKingTrans.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const login = () => {
        navigate('/');
      }

    return(
        <div className='navbar'>
            <img alt='Code King Logo' src={logo}></img>
            <h1>
            CODE KING
            </h1>
            <div className='nav_buttons'>
            <button onClick={login}>
                LOGIN
            </button>
            <button>
                ABOUT
            </button>
            <button>
                HOME
            </button>
            </div>
        </div>
    );
}

export default Navbar;