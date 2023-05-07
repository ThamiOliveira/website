import './App.css';
import Header from './Components/Header/Header';
import BotaoMenu from './Components/BotaoMenu/BotaoMenu';
import imagem from './img.png';
import Estante from './Components/Estante/Estante';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Resenha from './Components/Resenha/Resenha';
import { AiFillHeart, AiOutlineStar, AiFillGift, AiOutlineMessage } from "react-icons/ai";
import { useState } from 'react';

function App() {
  const [imagemResenha, setImagemResenha] = useState('');
  const [lidos, setLidos] = useState(130);
  const [vouLer, setVouLer] = useState(60);
  
  return (
    <BrowserRouter>
      <Header imagem={imagem}  lidos={lidos} vouLer={vouLer} />
      <div style={{display: 'flex'}}>
        <div className='acoes'>
          <BotaoMenu icone={<AiFillHeart />} nome="Favoritos" color="#ddeeee" />
          <BotaoMenu icone={<AiFillGift />} nome="Desejados" color="#ddeeee" />
          <BotaoMenu icone={<AiOutlineStar />} nome="Avaliados" link="/estante" color="#ddeeee" />
          <BotaoMenu icone={<AiOutlineMessage />} nome="Resenhas" link="/resenha" color="#ddeeee" />
        </div>
        <Routes>
          <Route path="/estante" element={<Estante setImagemResenha={e=> setImagemResenha(e)} />}  />
          <Route path="/resenha" element={<Resenha imagemResenha={imagemResenha} lidos={lidos} vouLer={vouLer} setLidos={e=> setLidos(e)} setVouLer={e=> setVouLer(e)}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
