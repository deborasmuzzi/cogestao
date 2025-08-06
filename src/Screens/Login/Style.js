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
font-size: 50px;
font-weight: bold;
color: #ffd100;

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
        margin-bottom: 4px;
        outline:none;
        margin-top: 20px;
        padding-left: 10px;
    
`
export const Texto= styled.Text`
margin-top: 50px;
color: white;
display: flex;
font-size: 18px;
font-weight: bold;
text-align: center;
place-items: center;
justify-content: center;
margin-right: 2px;
`
export const Botao0 = styled.TouchableOpacity`
        font-size: 20px;
        font-weight: bold;
        color: #ffd100;
        background-color: black;
        border-radius: 6px;
        border: none;

        flex-direction: row;
        justify-content: center;
        `

export const TextoBotao0= styled.Text`
        margin-top: 50px;
        color: #ffd100;
        font-size: 18px;
        font-weight: bold;
`

export const Botao1 = styled.TouchableOpacity`
      
        background-color: #ffd100;
        border-radius: 20px;
        height: 60px;
        width: 90%;
        justify-content: center;
        margin-top: 20px;
     
`
export const TextoBotao1 = styled.Text`
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        color: black;
`