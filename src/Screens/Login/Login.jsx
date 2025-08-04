import React, {useState} from "react";
import {
    Pagina,
    Conteiner,
    Titulo,
    Input,
    Texto,
    Botao0,
    Botao1
} from "./Styles";
import {Text, View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import api from "../../services/api/api";
import {useAuthStore} from "../../stores/auth";


export default function Cadastro (){
 const [email, setEmail]= useState("");
 const [senha, setSenha]= useState("");
 const [carregando, setCarregando]= useState(false);
 const setToken = useAuthStore((state) => state.setToken);
 const navigation = useNavigation();

  const handleSubmit = async (e) => {
        e.preventDefault();

    try {
        setCarregando(true);
       const res = await api.post("/", {email, senha});
        const {token} = res.data;
        
        setToken(token);
        navigation.navigate("Home")
      
    } catch (erro) {
        console.error(erro);
        alert(erro.response.data.message);
    } finally{
        setCarregando(false);
    }
}
    return ( 
        <Pagina> 
        <Conteiner>
            <Titulo>LOGIN</Titulo>
            <Input {...register("email")} placeholder="Email"></Input>
            <Input {...register("senha")} placeholder="senha"></Input>
            <Texto>Já possui uma cont? Clique </Texto>
            <Botao0 onPress = {() => navigation.navigate("Cadastro")}> aqui </Botao0>
            <Botao1>CRIAR CONTA</Botao1>
        </Conteiner>
        </Pagina>


    )
}

/*navigation.navigate("AboutUs");*/