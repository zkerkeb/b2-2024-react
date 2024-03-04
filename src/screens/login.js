import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import LoginForm from "../components/loginForm";
import Player from '../components/player';
import RegisterForm from "../components/registerForm";
const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Login</h1>
            {/* <Link to="/characters">Characters</Link>
            <button onClick={() => navigate('/characters')}>Characters</button> */}
            <RegisterForm/>
            <LoginFormContainer>
            <LoginForm/>
            </LoginFormContainer>
            <PlayerContainer>
            <Player></Player>
            </PlayerContainer>
            {/* <PokeList/> */}
        </div>
    );
}

const LoginFormContainer = styled.div`
display: flex;
justify-content: center;

`

const PlayerContainer = styled.div`
display: flex;
justify-content: center;

`


export default Login;