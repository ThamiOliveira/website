import React from "react";
import './Resenha.css';
import BotaoMenu from "../BotaoMenu/BotaoMenu";

function Resenha(props) {
    const alterarValorLidos = (qtd) => {
        return qtd += 1
    }

    return (
        <div className="resenha">
            <div style={{ fontSize: '50px', marginBottom: '50px' }}>
                Resenha
            </div>
            <div className="conteudo">
                <div className="imagem">
                    <img src={props.imagemResenha} alt="" width={250} height={300} />
                </div>
                <div className="textos" style={{ marginLeft: '150px' }}>
                    <div className="titulo" style={{ textAlign: 'center', fontSize: '40px', width: '50%', }}>
                        <strong>
                            Título da Resenha
                        </strong>
                    </div>
                    <div className="desc" style={{ width: '50%', fontSize: '25px', textAlign: 'justify' }}>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </div>
                    <div className="botoes" style={{ width: '50%' }}>
                        <div onClick={e => props.setLidos(alterarValorLidos(props.lidos))}>
                            <BotaoMenu nome="Marcar como Lido" color="#FFDCE4"></BotaoMenu>
                        </div>
                        <div onClick={e => props.setVouLer(alterarValorLidos(props.vouLer))}>
                            <BotaoMenu nome="Vou Ler" color="#FFDCE4"></BotaoMenu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resenha;