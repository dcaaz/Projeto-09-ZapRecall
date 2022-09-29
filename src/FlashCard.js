import React, { useState } from "react";
import styled from "styled-components";
import certo from "./Imagens/icone_certo.png"
import erro from "./Imagens/icone_erro.png"
import interrogacao from "./Imagens/icone_quase.png"
import festa from "./Imagens/party.png"
import play from "./Imagens/seta_play.png"
import triste from "./Imagens/sad.png"
import setaVirar from "./Imagens/seta_virar.png"
import GlobalStyle from "./GlobalStyled";

export default function FlashCard({ pergunta, resultado, indice }) {
    const inicial =
        <PerguntaFrente key={indice} onClick={verPerguntas}>
            <p>Pergunta {indice + 1}</p>
            <button>
                <img src={play} />
            </button>
        </PerguntaFrente>

    const virada =
        <PerguntaDesvirada key={indice}>
            <p>{pergunta}</p>
            <button onClick={respostaPerguntas}>
                <img src={setaVirar} />
            </button>
        </PerguntaDesvirada>

    const respostaPergunta =
        <PerguntaDesvirada key={indice}>
            <p>{resultado}</p>
        </PerguntaDesvirada>

    const [conteudo, setConteudo] = React.useState(inicial)

    function verPerguntas() {
        setConteudo(virada);
    }

    function respostaPerguntas() {
        setConteudo(respostaPergunta);
    }

    return (
        <>
        {conteudo}
        </>
    )
}

const PerguntaFrente = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
        p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    }
    button {
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background-color:  #FFFFFF;
    border-radius: 5px;
    border: 1px solid;
    padding:5px;
    }
`

const PerguntaDesvirada = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
    position: absolute;
    bottom: 10px;
    right: 10px;
    }
`