import React from "react";
import styled from "styled-components";
import logo from "./Imagens/logo.png";
import GlobalStyle from "./GlobalStyled";
import FlashCard from "./FlashCard";

export default function App() {
    //funções

    const listaPerguntasDesviradas = [
        { pergunta: "O que é JSX?", resultado: "Uma extensão de linguagem do JavaScript" },
        { pergunta: "O React é __?", resultado: "Uma biblioteca JavaScript para construção de interfaces" },
        { pergunta: "Componentes devem iniciar com __", resultado: "Letra maiúscula" },
        { pergunta: "Podemos colocar __ dentro do JSX", resultado: "Expressões" },
        { pergunta: "O ReactDOM nos ajuda __?", resultado: "Interagindo com a DOM para colocar componentes React na mesma" },
        { pergunta: "Usamos o npm para __?", resultado: "Gerenciar os pacotes necessários e suas dependências" },
        { pergunta: "Usamos props para __?", resultado: "Passar diferentes informações para componentes" },
        { pergunta: "Usamos estado (state) para __?", resultado: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
    ]

    const [contador, setContador] = React.useState(0);

    function incrementaContador() {
        setContador(prev => prev + 1);
    }

    return (
        //JSX
        <All>
            <GlobalStyle />
            <Topo>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </Topo>
            <>
                {listaPerguntasDesviradas.map((elemento, indice) =>
                    <FlashCard
                        data-identifier="flashcard"
                        key={indice}
                        pergunta={elemento.pergunta}
                        resultado={elemento.resultado}
                        indice={indice}
                        incrementaContador={incrementaContador}
                        
                    />
                )}
            </>
            <Rodape>
                <h1 data-identifier="flashcard-counter">{contador}/{listaPerguntasDesviradas.length} concluidos</h1>
            </Rodape>
        </All>
    )
}

const All = styled.div`
    background-color:  #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`

const Topo = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
    }
`
const Rodape = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`