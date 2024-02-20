import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import LoginForm from "../components/loginForm";
import Player from '../components/player';
const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Login</h1>
            {/* <Link to="/characters">Characters</Link>
            <button onClick={() => navigate('/characters')}>Characters</button> */}
            <LoginForm/>
            <PlayerContainer>
            <Player></Player>
            </PlayerContainer>
            {/* <PokeList/> */}
        </div>
    );
}
const PlayerContainer = styled.div`
display: flex;
justify-content: center;

`


export default Login;