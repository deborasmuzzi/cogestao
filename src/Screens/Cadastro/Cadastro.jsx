import {useState} from "react";
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
} from "./Styles";
//import {Text, View} from "react-native";
import { useNavigation } from "@react-navigation/native";

 function Cadastro (){
   const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

    return ( 
        <Pagina> 
        <Conteiner>
            <Titulo>CADASTRO</Titulo>
            <Input
              placeholder="Nome"
              value={nome}
              onChangeText={setNome}
            />

            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />

            <Input
              placeholder="Cargo"
              value={cargo}
              onChangeText={setCargo}
            />

            <Input
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
            />

            <Input
              placeholder="Confirme sua senha"
              value={confirmaSenha}
              onChangeText={setConfirmaSenha}
            />
            <Botao1>
                <TextoBotao1>CRIAR CONTA</TextoBotao1>
            </Botao1>
            <Botao0 onPress={() => navigation.navigate("Login")}>
            <Texto>Já possui uma conta? </Texto>  
            <TextoBotao0>Faça o login aqui. </TextoBotao0>
            </Botao0>
        </Conteiner>
        </Pagina>


    )
}

export default Cadastro;