import React, { useState } from "react";
import styled from "styled-components";

export default function Botao({ contador, setContador }) {

    const conteudoBotoes = ["Não lembrei", "Quase não lembrei", "Zap!"];

    function lembrarBotoes(c) {
        if (c === "Não lembrei") {
            setContador(contador + 1);
        } if (c === "Quase não lembrei") {
            setContador(contador + 1);
        } else {
            setContador(contador + 1);
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
