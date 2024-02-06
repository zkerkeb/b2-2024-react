import styled from 'styled-components';

const CircleText = () => {
    const customText = 'Hello World!'
    const arrayText = customText.split('');
    return (
        <Container>
        <Circle>
            {arrayText.map((letter, index) => {
                console.log("🚀 ~ {arrayText.map ~ index:", index)
                return (
                    <TextPositionner  position={index}>
                    <span key={index}>{letter}</span>
                    </TextPositionner>
                );
            })
        }
        </Circle>
        </Container>

    );
}

const TextPositionner = styled.div`
    position: absolute;
    left: ${props => 174 + props.position * 20}px;
    top: ${props => props.position * 20}px;
    transform: rotate(${props => props.position * 20}deg);
    color: white;
`

const Container = styled.div`
background-color: green;
display: flex;
position: relative;
padding: 24px;
width: 100%;
`

const Circle = styled.div`
    background-color: red;
    width: 300px;
    height: 300px;
    border-radius: 50%;

`


export default CircleText;