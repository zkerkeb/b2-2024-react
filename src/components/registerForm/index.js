import styled from 'styled-components';
import InputForm from '../inputForm';
import { Subtitle } from '../texts';

const RegisterForm = () => {
    return (
        <Form>
            <Subtitle>Register</Subtitle>
            <InputForm type="text" name="username" placeholder="enter username"  />
            <InputForm type="password" name="password" placeholder="enter password"/>
        </Form>
        
    );
}



const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #222222;

`

export default RegisterForm;