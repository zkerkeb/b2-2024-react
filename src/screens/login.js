import { useNavigate } from "react-router-dom";
import LoginForm from "../components/loginForm";


const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Login</h1>
            {/* <Link to="/characters">Characters</Link>
            <button onClick={() => navigate('/characters')}>Characters</button> */}
            <LoginForm/>
        </div>
    );
}

export default Login;