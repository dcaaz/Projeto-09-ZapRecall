import styled from "styled-components";

export default function inicialRetorno(imagem, cor, indice) {

    return (
        <PerguntaFrenteRetorno cor={cor}>
            <p>Pergunta {indice + 1}</p>
            <button>
                <img data-identifier="flashcard-status" src={imagem} alt="imagem certo/errado/interrogação" />
            </button>
        </PerguntaFrenteRetorno>
    )
}


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
    color: ${props => props.cor};
    // outra forma de fazer: color: ${props => props.cor === "teste" ? "pink" : "orange"};
    text-decoration-line: line-through;
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