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



export default function Cadastro (){
    
    const navigation = useNavigation();
    return ( 
        <Pagina> 
        <Conteiner>
            <Titulo>LOGIN</Titulo>
            <Input {...register("email")} placeholder="Email"></Input>
            <Input {...register("senha")} placeholder="senha"></Input>
            <Texto>Já possui uma conta? Clique </Texto>
            <Botao0 onPress = {() => navigation.navigate("Cadastro")}> aqui </Botao0>
            <Botao1>CRIAR CONTA</Botao1>
        </Conteiner>
        </Pagina>


    )
}

/*navigation.navigate("AboutUs");*/