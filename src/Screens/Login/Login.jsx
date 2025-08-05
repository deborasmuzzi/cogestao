import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";

import {
    Pagina,
    Conteiner,
    Titulo,
    Input,
    Texto,
    Botao0,
    Botao1
} from "./Style";



function Login (){
    const [email, setEmail]= useState("");
    const [senha, setSenha]= useState("");

    const navigation = useNavigation();
    return ( 
        <Pagina> 
        <Conteiner>
            <Titulo>LOGIN</Titulo>
            <Input
                 placeholder="Email"
                 value={email}
                 onChangeText={setEmail}
            />
            <Input  
            placeholder="senha" 
            value = {senha}
            onChangeText= {setSenha}
            />
            <Texto>Já possui uma conta? Clique </Texto>
            <Botao0 onPress = {() => navigation.navigate("Cadastro")}> aqui </Botao0>
            <Botao1>CRIAR CONTA</Botao1>
        </Conteiner>
        </Pagina>


    )
}

/*navigation.navigate("AboutUs");*/

export default Login;