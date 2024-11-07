import logo from '../CodeKingTrans.png';

function Navbar() {
    return(
        <div className='navbar'>
            <img alt='Code King Logo' src={logo}></img>
            <h1>
            CODE KING
            </h1>
            <div className='nav_buttons'>
            <button>
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