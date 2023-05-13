import { useState } from "react";
import Jogo from "./components/Jogo"
import Letras from './components/Letras';
import palavras from "./palavras";
import alfabeto from "./alfabeto";
import Chute from "./components/Chute";
import { remove as removeDiacritics } from "diacritics";
import { ContainerMain } from "./components/Styles"


function App() {

    const [errorCount, setErrorCount] = useState(0);
    const [chooseWord, setChooseWord] = useState([]);
    const [underWord, setUnderWord] = useState([])
    const [clickedLetters, setClickedLetters] = useState(alfabeto)
    const [colorWord, setColorWord] = useState("color-black")
    const [gameStarted, setGameStarted] = useState(false);
    const [gameEnded, setGameEnded] = useState(false);
    
    const startGame = () => {
      setErrorCount(0);
      setClickedLetters([])
      setColorWord("color-black")
      setGameStarted(true);
      setGameEnded(false);
      randomWord();
    }

    const randomWord = () => {
      const word = palavras[Math.floor(Math.random() * palavras.length)]
      console.log(word.split(""))

      const arrayWord = word.split("")
      setChooseWord(arrayWord)

      let underline = [];
      arrayWord.forEach(() => {underline.push(" _")})
      setUnderWord(underline)
    }

    const handleLetterClick = (letter) => {
      setClickedLetters([...clickedLetters, letter]);
    
      const normalizedLetter = removeDiacritics(letter);
    
      if (isLetterInWord(normalizedLetter)) {
        const updatedUnderWord = underWord.map((char, index) =>
          removeDiacritics(chooseWord[index]).toLowerCase() === normalizedLetter.toLowerCase() ? chooseWord[index] : char
        );
        setUnderWord(updatedUnderWord);
        rightWord(updatedUnderWord);
      } else {
        errorWord();
      }
    };
    
    const isLetterInWord = (letter) => {
      return chooseWord.some((char) => {
        const normalizedChar = removeDiacritics(char).toLowerCase();
        const normalizedLetter = removeDiacritics(letter).toLowerCase();
    
        if (normalizedChar === 'c' && normalizedLetter === 'ç') {
          return true;
        }
    
        return normalizedChar === normalizedLetter;
      });
    };
    
    const errorWord = () => {
      let errorsGame = errorCount+1
      setErrorCount(errorsGame)
      if (errorsGame === 6){
        setColorWord("color-red");
        gameEnd()
      }
    }

    const rightWord = (updatedUnderWord) => {
      if (!updatedUnderWord.includes(" _")) {
        setColorWord("color-green");
        gameEnd()
      }
    }

    const handleChuteWord = (chute) => {
      const normalizedChute = removeDiacritics(chute).toLowerCase();
      const normalizedChooseWord = removeDiacritics(chooseWord.join("")).toLowerCase();
  
      if (normalizedChooseWord === normalizedChute) {
        setColorWord("color-green");
        gameEnd();
      } else {
        setColorWord("color-red");
        gameEnd();
        setErrorCount(6);
        setGameEnded(true);
      }
    };

    const gameEnd = () => {
      setUnderWord(chooseWord)
      setClickedLetters(alfabeto)
      setGameEnded(true);
    }


    return (
      <ContainerMain>
        <Jogo startGame={startGame} onChooseWord={underWord} errors={errorCount} colorWord={colorWord}/>
        <Letras 
          onLetterClick={handleLetterClick} 
          clickedLetters={clickedLetters}
        />
        <Chute 
          chooseWord={chooseWord} 
          onChuteWord={handleChuteWord}
          disabled={!gameStarted || gameEnded}
        />
      </ContainerMain>
    );
}

export default App;
