import React, { useState } from "react";
import styled from "styled-components";
import certo from "./Imagens/icone_certo.png"
import erro from "./Imagens/icone_erro.png"
import interrogacao from "./Imagens/icone_quase.png"

export default function Botao({ incrementaContador, setConteudo, indice }) {

    const conteudoBotoes = ["Não lembrei", "Quase não lembrei", "Zap!"];

    const inicialRetorno =
        <PerguntaFrenteRetorno>
            <p>Pergunta {indice + 1}</p>
            <button>
                <img src={certo} />
            </button>
        </PerguntaFrenteRetorno>

    function lembrarBotoes(c) {
        setConteudo(inicialRetorno);
        incrementaContador();
        if (c === "Não lembrei") {

        } if (c === "Quase não lembrei") {

        } else {

        }
    }

    return (
        <Botoes>
            {conteudoBotoes.map((c, indice) =>
                <button key={indice} onClick={() => lembrarBotoes(c)}>{c}</button>
            )}
        </Botoes>
    )
}

const Botoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
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
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
    margin-left: 7px;
    }
`

const PerguntaFrenteRetorno = styled.div`
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