import './App.css';
import Header from './Components/Header/Header';
import BotaoMenu from './Components/BotaoMenu/BotaoMenu';
import imagem from './img.png';
import Estante from './Components/Estante/Estante';
import Avaliacao from './Components/Avaliacao/Avaliacao';
import livro1 from './livro1.jpg';
import livro2 from './livro2.jpg';
import livro3 from './livro3.jpg';
import livro4 from './livro4.jpg';
import { AiFillHeart, AiOutlineStar, AiFillGift, AiOutlineMessage } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <Header imagem={imagem} />

      <div className='conteudo'>
        <div className='acoes'>
          <BotaoMenu icone={<AiFillHeart />} nome="Favoritos" />
          <BotaoMenu icone={<AiFillGift />} nome="Desejados" />
          <BotaoMenu icone={<AiOutlineStar />} nome="Avaliados" />
          <BotaoMenu icone={<AiOutlineMessage />} nome="Resenhas" />
        </div>
        <div className='estante'>
          <div style={{ fontSize: '50px' }}>
            Minha estante
          </div>
          <div className='listaEstante'>
            <Estante

              imagem={livro1}
            />
            <Estante

              imagem={livro2}
            />
            <Estante

              imagem={livro3}
            />
            <Estante

              imagem={livro4}
            />


          </div>
        </div>
      </div>
      <div className="avaliacoes" style={{ fontSize: '50px' }}>
        Minha estante
        <div className=''>
          <Avaliacao imagem={livro2} />
        </div>
      </div>
    </div>
  );
}
export default App;
