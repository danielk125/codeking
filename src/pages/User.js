import logo from '../CodeKingTrans.png';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import List from '../components/List.js';
import useFetch from '../hooks/useFetch';
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
    const { data: users, loading, error } = useFetch("http://localhost:5432/users");
    


    return (
        <div className="App">
            <Navbar />
            <div className='backdrop'>
                <img alt='Code King Logo' src={logo}></img>
                <div className="userList">
                    <div className='userListTitle'>
                        <h1>Friends:</h1>
                    </div>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error.message}</p>}
                    {users && (
                        <List items={users} renderItem={(user) => <UserCard key={user.id} user={user} />} />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default User;
