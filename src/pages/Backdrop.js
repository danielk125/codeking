import logo from '../CodeKingTrans.png';
import Navbar from './Navbar';
import '../App.css';

function Layout(){
    return (
        <div className="App">
            <Navbar />
            <div class='backdrop'>
                <img alt='Code King Logo' src={logo}></img>
                
            </div>
            <div class='footer'>
                <img alt='instagram logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'></img>
                <img alt='x logo' src='https://acrm.org/wp-content/uploads/2024/03/twitter-x-logo-101c7d2420-seeklogocom.png'></img>
                <img alt='facebook logo' src='https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png'></img>
            </div>
        </div>
    );
}

export default Layout;