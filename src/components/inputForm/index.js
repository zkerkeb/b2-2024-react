import styled from 'styled-components';

const InputForm = ({type, name, placeholder, ...rest}) => {
    return (
        <Input type={type} name={name} placeholder={placeholder} {...rest} />
    );
}

const Input = styled.input`
    padding: 4px;
    background-color: black;
    color:white;
`

export default InputForm;