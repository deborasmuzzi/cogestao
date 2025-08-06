import {useState} from "react";
import { useNavigation } from "@react-navigation/native";

import {
    Pagina,
    Conteiner,
    Titulo,
    Input,
    Texto,
    Botao0,
    Botao1,
    TextoBotao0,
    TextoBotao1
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

            <Botao1>
                <TextoBotao1>
                    ENTRAR
                </TextoBotao1>
            </Botao1>
         
            <Botao0 onPress = {() => navigation.navigate("Cadastro")}> 
                <Texto> Não tem login? </Texto>
                <TextoBotao0>
                    Faça seu cadastro aqui.
                </TextoBotao0>
             </Botao0>
     
        </Conteiner>
        </Pagina>


    )
}

/*navigation.navigate("AboutUs");*/

export default Login;