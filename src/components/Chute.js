
import { useState } from "react";
import { ContainerChute, ButtonChute, InputButton } from "./Styles";

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
        <ContainerChute onSubmit={handleChuteSubmit}>
            <InputButton
                data-test="guess-input"
                type="text"
                value={chuteValue}
                onChange={handleChuteChange}
                placeholder="Digite sua palavra"
                disabled={disabled}
            />
            <ButtonChute data-test="guess-button" type="submit">
                Chutar
            </ButtonChute>
        </ContainerChute>
    )
}