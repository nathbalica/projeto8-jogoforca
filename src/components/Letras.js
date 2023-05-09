
import alphabet from "../alphabet";

export default function Letras(){
    return (
        <div className="container-letter">
            {alphabet.map((item) => (
                <button>{item}</button>
            ))}
        </div>
    );
}

