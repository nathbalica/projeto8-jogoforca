import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca2.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"

export default function Jogo(){
    return (
        <div className="container-game">
            <img src={forca0}/>
            <button>Escolher Palavra</button>
            <h3></h3>
        </div>
    )
}