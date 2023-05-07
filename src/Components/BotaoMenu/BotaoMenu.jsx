import React from "react";
import "./BotaoMenu.css";
import { Link } from "react-router-dom";

function BotaoMenu(props) {
    return (
        <Link to={props.link}>
            <button id="btnMenu" style={{ backgroundColor: props.color }}>
                {props.icone &&
                    <div className="icone-botao">
                        {props.icone}
                    </div>
                }
                {props.nome}
            </button>
        </Link>
    )
}
export default BotaoMenu;