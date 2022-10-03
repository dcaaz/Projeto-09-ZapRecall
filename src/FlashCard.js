import React from "react";
import styled from "styled-components";
import play from "./Imagens/seta_play.png";
import setaVirar from "./Imagens/seta_virar.png";
import Botao from "./Botoes";

export default function FlashCard({ pergunta, resultado, indice, incrementaContador, imagem, setImagem }) {

    const inicial =
        <PerguntaFrente data-identifier="flashcard-index-item" key={indice} onClick={verPerguntas}>
            <p>Pergunta {indice + 1}</p>
            <button>
                <img src={play} alt="simbolo de play/start" />
            </button>
        </PerguntaFrente>

    const [conteudo, setConteudo] = React.useState(inicial)

    const desvirada =
        <PerguntaDesvirada data-identifier="flashcard-show-btn" key={indice}>
            <p>{pergunta}</p>
            <div onClick={respostaPerguntas}>
                <img data-identifier="flashcard-turn-btn" src={setaVirar} alt="simbolo de virar" />
            </div>
        </PerguntaDesvirada>

    const respostaPergunta =
        <PerguntaDesvirada data-identifier="flashcard-question" key={indice}>
            <p data-identifier="flashcard-answer">{resultado}</p>
            <Botao
                incrementaContador={incrementaContador}
                setConteudo={setConteudo}
                indice={indice}
                imagem={imagem}
                setImagem={setImagem}
            />
        </PerguntaDesvirada>


    function verPerguntas() {
        setConteudo(desvirada);
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