import React from "react";
import "./BotaoMenu.css";

function BotaoMenu(props) {
    return (
        <button id="btnMenu">
            <div className="icone-botao">
                {props.icone}
            </div>
            {props.nome}
        </button>
    )
}
export default BotaoMenu;