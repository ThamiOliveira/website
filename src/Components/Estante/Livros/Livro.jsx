import React from "react";
import './Livro.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Livro(props, { setImagemResenha }) {
    return (
        <div className="cards">
            <Link to="/resenha">
                <img src={props.imagem} onClick={e => props.setImagemResenha(props.imagem)} alt="" width={150} height={200} />
            </Link>
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

export default Livro;