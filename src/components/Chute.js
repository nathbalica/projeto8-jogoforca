
import { useState } from "react";

export default function Chute({ onChuteWord, disabled }) {
    const [chuteValue, setChuteValue] = useState("");

    const handleChuteChange = (event) => {
        setChuteValue(event.target.value);
    };

    const handleChuteSubmit = (event) => {
        event.preventDefault();
        onChuteWord(chuteValue);
        setChuteValue("");
    };
    return (
        <form className="container-chute" onSubmit={handleChuteSubmit}>
            <input
                data-test="guess-input"
                type="text"
                value={chuteValue}
                onChange={handleChuteChange}
                placeholder="Digite sua palavra"
                disabled={disabled}
            />
            <button data-test="guess-button" type="submit">
                Chutar
            </button>
        </form>
    )
}