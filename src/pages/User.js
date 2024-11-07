import { useState, useEffect } from 'react';
import logo from '../CodeKingTrans.png';
import Navbar from './Navbar';
import '../App.css';

function UserCard({ user }){
    return (
        <div className='userCard'>
            <img alt='profile logo' src='https://cdn-icons-png.flaticon.com/512/12225/12225773.png'></img>
            <h2>{user.firstName + ' ' + user.lastName}</h2>
        </div>
    );
}


function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getData(){
            const response = await fetch("https://disc-assignment-5-users-api.onrender.com/api/users")
            const json = await response.json();
            setUsers(json);
        }
        getData();
    });
    

    return (
        
        <div className="App">
            <Navbar />
            <div className='backdrop'>
                <img alt='Code King Logo' src={logo}></img>
                <div className="userList">
                    <div className='userListTitle'>
                        <h1>Friends:</h1>
                    </div>
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </div>
            
            <div className='footer'>
                <img alt='instagram logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'></img>
                <img alt='x logo' src='https://acrm.org/wp-content/uploads/2024/03/twitter-x-logo-101c7d2420-seeklogocom.png'></img>
                <img alt='facebook logo' src='https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png'></img>
            </div>
        </div>
    );
}

export default User;
