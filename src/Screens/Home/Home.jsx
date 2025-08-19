import {
  Pagina,
  Conteiner,
  Titulo,
  Botao0,
  TextoBotao0,
} from "./Style";


function Home (){


    return(
        <Pagina>
            <Conteiner>
                <Titulo>HOME</Titulo>
                <Botao0>
                    <TextoBotao0>
                        LOGOUT
                    </TextoBotao0>
                </Botao0>
            </Conteiner>
        </Pagina>
    )
}


export default Home;