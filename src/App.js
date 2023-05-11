import { useState } from "react";
import Jogo from "./components/Jogo"
import Letras from './components/Letras';
import palavras from "./palavras";
import alfabeto from "./alfabeto";


function App() {

    // const [enabledLetters, setEnabledLetters] = useState(alfabeto);
    const [errorCount, setErrorCount] = useState(0);
    const [chooseWord, setChooseWord] = useState([]);
    const [underWord, setUnderWord] = useState([])
    const [clickedLetters, setClickedLetters] = useState(alfabeto)
    const [colorWord, setColorWord] = useState("color-black")
    
    const startGame = () => {
      setErrorCount(0);
      setClickedLetters([])
      setColorWord("color-black")
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

      if(chooseWord.includes(letter)){
        const updatedUnderWord = underWord.map((char, index) =>
        chooseWord[index] === letter ? letter : char);
        setUnderWord(updatedUnderWord);
        rightWord(updatedUnderWord)
      }else{
        errorWord()
      }
    };

    const errorWord = () => {
      
      let errorsGame = errorCount+1
      setErrorCount(errorsGame)
      if (errorsGame === 6){
        setColorWord("color-red");

      }
    }

    const rightWord = (updatedUnderWord) => {
      if (!updatedUnderWord.includes(" _")) {
        setColorWord("color-green");
      }
    }


    return (
      <div className='container-main'>
        <Jogo startGame={startGame} onChooseWord={underWord} errors={errorCount} colorWord={colorWord}/>
        <Letras 
          onLetterClick={handleLetterClick} 
          clickedLetters={clickedLetters}
        />
      </div>
    );
}

export default App;
