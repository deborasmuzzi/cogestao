import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
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
} from "./Styles";

function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const handleCadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
      return;
    }
    if (senha !== confirmaSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }
    console.log("Enviando dados:", { nome, email, cargo, senha });
  const res = await api.post("/usuario", { nome, email, cargo, senha });
  console.log("Resposta do backend:", res.data);
    try {
      const res = await api.post("/usuario", {
        nome,
        email,
        cargo,
        senha,
      });

      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Erro ao cadastrar usuário.");
    }
  };

  return (
    <Pagina>
      <Conteiner>
        <Titulo>CADASTRO</Titulo>

        <Input placeholder="Nome" value={nome} onChangeText={setNome} />
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Input placeholder="Cargo" value={cargo} onChangeText={setCargo} />
        <Input placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
        <Input placeholder="Confirme sua senha" value={confirmaSenha} onChangeText={setConfirmaSenha} secureTextEntry />

        <Botao1 onPress={handleCadastro}>
          <TextoBotao1>CRIAR CONTA</TextoBotao1>
        </Botao1>

        <Botao0 onPress={() => navigation.navigate("Login")}>
          <Texto>Já possui uma conta? </Texto>
          <TextoBotao0>Faça o login aqui.</TextoBotao0>
        </Botao0>
      </Conteiner>
    </Pagina>
  );
}

export default Cadastro;