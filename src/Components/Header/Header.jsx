import React from "react";
import './Header.css';

function Header(props) {
    return (
        <header>
            <div className="infosPessoais"> 
                <div>
                    <img className="fotoPessoal" src={props.imagem} alt="imagem" />
                </div>
                <h2>Thamiris Oliveira</h2>
            </div>
            <div className="infosLeitura">
                <div className="lidos">
                    <span>
                        130
                    </span>
                    <span>
                        lidos
                    </span>
                </div>
                <div className="vouLer">
                    <span>
                        60
                    </span>
                    <span>
                        vou ler
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header;