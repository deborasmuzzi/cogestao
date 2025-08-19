import {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import  useAuthStore from "../../Store/Auth"
import api from "../../Services/api";
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
     const navigation = useNavigation();
    const [email, setEmail]= useState("");
    const [senha, setSenha]= useState("");

    const [carregando, setCarregando]= useState(false);
    const setToken = useAuthStore((state) => state.setToken);


    const handleSubmit = async (e) => {

    try {
        setCarregando(true);
       const res = await api.post("/", {email, senha});
        const {token} = res.data;
        
        setToken(token);
        navigation.navigate("Home");
      
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

            <Botao1 onPress={handleSubmit}  disabled={carregando}>
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



export default Login;