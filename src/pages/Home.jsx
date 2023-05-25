import {useUserContext} from "../context/UserContext";


const Home = () =>{

    const {user, setUser} = useUserContext()
    const handleLogin = () =>{
        setUser(true);
    };

    return (
        <>
        <h1>Home</h1>
        <button onClick={handleLogin}>Login</button>
        </>
    );
}

export default Home;