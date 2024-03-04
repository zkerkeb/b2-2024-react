import randomColor from 'randomcolor';
import { CardContainer } from './styled';

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



export default Card;