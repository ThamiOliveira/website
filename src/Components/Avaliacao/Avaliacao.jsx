import React from "react";
import './Avaliacao.css';

function Avaliacao(props) {
    return (
        <div className="avalicao">
            <div className="cardsAvaliacao">
                <div className="imagem">
                    <img src={props.imagem} alt="" width={150} height={200} />
                </div>
                <div className="textos">
                    <div className="titulo">
                        Título da Resenha
                    </div>
                    <div className="desc">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </div>
                </div>
            </div>

            <div className="cardsAvaliacao">
                <div className="imagem">
                    <img src={props.imagem} alt="" width={150} height={200} />
                </div>
                <div className="textos">
                    <div className="titulo">
                        Título da Resenha
                    </div>
                    <div className="desc">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Avaliacao;