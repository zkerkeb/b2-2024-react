import randomColor from 'randomcolor';
import styled from 'styled-components';

const Card = ({card}) => {
    console.log("🚀 ~ Card ~ card:", card)
    // const templateStringExemple = `Bonjour ${card.name}`

    return ( 
        <CardContainer backgroundColor={randomColor()}>
            {/* {templateStringExemple} */}
        <h3>{card.name}</h3>
        <h4>{card.type}</h4>
        <span>{card.description}</span>
        <span>{card.hp}</span>
        <span>{card.attack}</span>
        <span>{card.defense}</span>
        <span>{card.speed}</span>
        <span>{card.character}</span>

    </CardContainer>
    );
}

const CardContainer = styled.div`
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


export default Card;