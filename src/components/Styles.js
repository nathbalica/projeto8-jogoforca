import styled from 'styled-components';

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const ContainerGame = styled.div`
    width: 834px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    margin-bottom: 50px;
`
export const GameImage = styled.img`
  width: 400px;
`;

export const StartButton = styled.button`
  min-width: 200px;
  height: 60px;
  border-radius: 8px;
  border: none;
  position: absolute;
  top: 28px;
  right: 0;
  background-color: #27AE60;

  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const WordTitle = styled.h3`
  font-size: 40px;
  font-family: 'Noto Sans', sans-serif;
  color: ${({ colorWord }) => colorWord === "color-red" ? "#FF0000" : colorWord === "color-green" ? "#27AE60" : "black"};
`;

export const ContainerLetter = styled.div`
    width: 625px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 60px;
    margin-bottom: 40px;
`

export const ButtonLetter = styled.button `
    width: 40px;
    height: 40px;
    margin: 4px;

    background-color: #e1ecf4;
    border: 1px solid #7AA7C7;
    border-radius: 3px;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    color: #39739d;
    text-transform: uppercase;

    &:hover{
        cursor: pointer;
        background-color: #a4c3da;
        color: #2c5777;
    }

    &:disabled{
        cursor: default;
        background-color: #9faab5;
        color: #79818a;
        border: 1px solid #9faab5;
    }
`

export const ContainerChute = styled.form`
    width: 468px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ButtonChute = styled.button`
    width: 100px;
    height: 100%;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #3C76A1;
    cursor: pointer;

    background: #E1ECF4;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
`

export const InputButton = styled.input`
    width: 353px;
    height: 90%;

    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;

    color: #3C76A1;
    font-size: 14px;
`
