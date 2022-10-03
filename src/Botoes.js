import React from "react";
import styled from "styled-components";
import certo from "./Imagens/icone_certo.png";
import erro from "./Imagens/icone_erro.png";
import interrogacao from "./Imagens/icone_quase.png";
import inicialRetorno from "./Retorno";

export default function Botao({ incrementaContador, setConteudo, indice }) {

    const conteudoBotoes = ["Não lembrei", "Quase não lembrei", "Zap!"];

    function lembrarBotoes(c) {
        let imagem;
        let cor;

        if (c === "Não lembrei") {
            imagem = erro;
            cor = "#FF3030";
        } else if (c === "Quase não lembrei") {
            imagem = interrogacao;
            cor = "#FF922E";
        } else {
            imagem = certo;
            cor = "#2FBE34";
        }

        setConteudo(inicialRetorno(imagem, cor, indice));
        incrementaContador();
    }

    let correcao = ["forgot-btn", "almost-forgot-btn", "zap-btn"];
    
    return (
        <Botoes>
            {conteudoBotoes.map((c, indice) => {
                return <button
                    data-identifier={correcao[indice]}
                    key={indice}
                    onClick={() => lembrarBotoes(c)}>{c}</button>;
            })}
        </Botoes>
    )
}
//          OURTRA FORMA:
//       <Botoes>
//           {conteudoBotoes.map((c, indice) => {
//               const background = indice == 0 ? "#FF3030" : indice == 1 ? "#FF922E" : "#2FBE34";
//               return <button style={{"background": background}} key={indice} onClick={() => lembrarBotoes(c)}>{c}</button>;
//           }
//           )}
//       </Botoes>
//   )

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
    border: 1px solid;
    padding:5px;
    margin-left: 7px;
    }
    & button:first-child {
        background-color: #FF3030;
    }
    & button:nth-child(2) {
        background-color: #FF922E;
    }
    & button:last-child {
        background-color: #2FBE34;
    }
`