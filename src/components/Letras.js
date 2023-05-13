
import {ContainerLetter, ButtonLetter} from "./Styles"
import alfabeto from "../alfabeto";


export default function Letras({onLetterClick, clickedLetters}){
    const handleLetterClick = (letter) => {
        onLetterClick(letter);
      };

    return (
        <ContainerLetter>
            {alfabeto.map((item) => (
                <ButtonLetter 
                    data-test="letter"
                    key={item} 
                    disabled={clickedLetters.includes(item)} 
                    onClick={() => handleLetterClick(item)}
                >
                    {item}
                </ButtonLetter>
            ))}
        </ContainerLetter>
    );
}

