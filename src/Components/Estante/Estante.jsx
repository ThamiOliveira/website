import React from "react";
import './Estante.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Estante(props) {
    return (
        <div className="cards">
            <img src={props.imagem} alt="" width={150} height={200} />
            <div className="estrelas">
                <AiFillStar color="yellow" size={30} />
                <AiFillStar color="yellow" size={30} />
                <AiOutlineStar size={30} />
                <AiOutlineStar size={30} />
                <AiOutlineStar size={30} />
            </div>
        </div>
    );
}

export default Estante;