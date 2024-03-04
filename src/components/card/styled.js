import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: ${(props) => props.backgroundColor};
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 300px;
    border-radius: 10px;
    border: 1px solid black;
    justify-content: center;
    align-items: center;

`

