import React from "react";
import styled from "styled-components";
import logo from "./Imagens/logo.png"
import certo from "./Imagens/icone_certo.png"
import erro from "./Imagens/icone_erro.png"
import interrogacao from "./Imagens/icone_quase.png"
import festa from "./Imagens/party.png"
import play from "./Imagens/seta_play.png"
import triste from "./Imagens/sad.png"
import setaVirar from "./Imagens/seta_virar.png"
import GlobalStyle from "./GlobalStyled";

export default function App() {
    //funções

    return (
        //JSX
        <All>
            <GlobalStyle />
            <Topo>
                <img src={logo} />
                <h1>ZapRecall</h1>
            </Topo>
            <>
                <Pergunta>
                    <p>Pergunta 1</p>
                    <button><img src={play} /></button>
                </Pergunta>
                <Pergunta>
                    <p>Pergunta 2</p>
                    <button><img src={play} /></button>
                </Pergunta>
                <Pergunta>
                    <p>Pergunta 3</p>
                    <button><img src={play} /></button>
                </Pergunta>
            </>
            <Rodape>
                <Botoes>
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </Botoes>
                <h1>0/4 concluidos</h1>
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

const Pergunta = styled.div`
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
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
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
    }
`
