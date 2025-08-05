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
        //font-family: Montserrat, sans-serif;
        font-size: 40px;
        font-weight: bold;
        color: white;
        margin-top: 50px;
        margin-bottom: 30px;

`

export const Input = styled.TextInput`
        font-size: 20px;
        color: gray;
        background-color: white;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        width: 90%;
        height: 60px;
        margin-bottom: 2px;
        outline:none;
        margin-top: 10px;
        padding-left: 10px;
    
`

export const Texto= styled.Text`
        margin-top: 40px;
        color: white;

        font-size: 18px;
        font-weight: bold;
        
`

export const TextoBotao0= styled.Text`
        margin-top: 50px;
        color: #ffd100;
        display: flex;
        font-size: 18px;
        font-weight: bold;
`
export const TextoBotao1 = styled.Text`
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        color: black;
`
export const Botao0 = styled.TouchableOpacity`
        background-color: black;
        border: none;
        margin-left: 9px;
        justify-content: flex-end;
 `;

export const Botao1 = styled.TouchableOpacity`
        background-color: #ffd100;
        border-radius: 40px;
        margin-top: 20px;
        width: 90%;
        justify-content: center;
        height: 60px;
`