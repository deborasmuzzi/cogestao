import styled from "styled-components/native";

export const Pagina = styled.View`
     background-color: black;
     flex: 1;
     justify-content: center;
     align-items: center;
`
export const Conteiner = styled.View`
     width: 90%;
     align-items: center;
`

export const Titulo = styled.Text`
font-family: Montserrat, sans-serif;
font-size: 50px;
font-weight: bold;
color: #ffd100;

`

export const Input = styled.TextInput`
font-size: 30px;
        color: gray;
        background-color: white;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        width: 50%;
        height: 70px;
        margin-left: 25%;
        margin-bottom: 10px;
        outline:none;
        margin-top:50px;
        padding-left: 10px;
    
`

export const Texto= styled.Text`
width: 100%;
margin-top: 50px;
color: white;
display: flex;
font-size: 23px;
font-family: Montserrat, sans-serif;
text-align: center;
place-items: center;
justify-content: center;
`
export const Botao0 = styled.TouchableOpacity`
        font-size: 20px;
        font-weight: bold;
        color: #ffd100;
        background-color: black;
        border-radius: 6px;
        border: none;
        margin-left: 9px;
 `;

export const Botao1 = styled.TouchableOpacity`
    display: inline-block;
        padding: 25px;
        font-size: 30px;
        width: 40%;
        font-weight: bold;
        text-align: center;
        color: black;
        background-color: #ffd100;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        justify-content: flex-end;
        margin-top: 20px;
        margin-left: 30%;
`