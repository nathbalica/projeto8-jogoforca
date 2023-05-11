
import alfabeto from "../alfabeto";

export default function Letras({onLetterClick, clickedLetters}){
    const handleLetterClick = (letter) => {
        onLetterClick(letter);
      };

    return (
        <div className="container-letter">
            {alfabeto.map((item) => (
                <button key={item} disabled={clickedLetters.includes(item)} onClick={() => handleLetterClick(item)}>
                    {item}
                </button>
            ))}
        </div>
    );
}

