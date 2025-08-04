//import React, {useState} from "react";
import {
    Pagina,
    Conteiner,
    Titulo,
    Input,
    Texto,
    Botao0,
    Botao1
} from "./Styles";
//import {Text, View} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro (){

    const navigation = useNavigation();

    return ( 
        <Pagina> 
        <Conteiner>
            <Titulo>CADASTRO</Titulo>
            <Input {...register("nome")} placeholder="Nome"></Input>
            <Input {...register("email")} placeholder="Email"></Input>
            <Input {...register("cargo")} placeholder="Cargo"></Input>
            <Input {...register("senha")} placeholder="senha"></Input>
            <Input {...register("senha2")} placeholder="Confirme sua senha"></Input>
            <Texto>Já possui uma conta? Clique </Texto>
            <Botao0 onPress={() => navigation.navigate("Login")}> aqui </Botao0>
            <Botao1>CRIAR CONTA</Botao1>
        </Conteiner>
        </Pagina>


    )
}