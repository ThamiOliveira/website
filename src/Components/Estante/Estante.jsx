import React from "react";
import './Estante.css';
import Livro from "./Livros/Livro";
import Avaliacao from '../Avaliacao/Avaliacao';
import livro1 from '../../livro1.jpg';
import livro2 from '../../livro2.jpg';
import livro3 from '../../livro3.jpg';
import livro4 from '../../livro4.jpg';

function Estante(props, setImagemResenha) {
    return (
        <div className='estante'>
            <div style={{ fontSize: '50px', textAlign: 'left'}}>
                Minha estante
            </div>
            <div className='listaEstante'>
                <Livro
                    imagem={livro1}
                    setImagemResenha={e=> props.setImagemResenha(e)}
                /> 
                <Livro
                    imagem={livro2}
                    setImagemResenha={e=> props.setImagemResenha(e)}
                />
                <Livro
                    setImagemResenha={e=> props.setImagemResenha(e)}
                    imagem={livro3}
                />
                <Livro
                    setImagemResenha={e=> props.setImagemResenha(e)}
                    imagem={livro4}
                />
                <div className="avaliacoes" style={{ fontSize: '50px', textAlign: 'center' }}>
                    Ultimas avaliações
                    <div className=''>
                        <Avaliacao imagem={livro2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Estante;