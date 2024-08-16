import React from 'react';
import './css.css';
import image from "./mo.jpg";
import youtubeicon from "./youtube.png";
import spotifyicon from "./spotify.png";
import x from "./twitter.png";
import instagram from "./instagram.png";
import discord from "./discord.png";
import image2 from './imagen2.jpg';
import symmetry from "./descarga.png"

function App() {
  return (
    <div className="App">
      <img src={image} className='image-mo' /><br />
      <h2 className='text'>Miguel Ortiz</h2>
      <h3 className='text'>Emprendedor | Matemático | YouTuber | Experto en pochitas</h3>
      <a href="https://www.youtube.com/@miguel11mom" className='youtube' target="_blank" rel="noopener noreferrer">
        <img src={youtubeicon} alt="YouTube Icon" className='icon' />
        Canal de Youtube (Miguel Ortiz)
      </a>
      <a href="https://www.youtube.com/@momelamo" className='youtube'>
        <img src={youtubeicon} alt="YouTube Icon" className='icon' />
        Podcast YouTube (mom)
      </a>
      <a className='spotify' href="https://open.spotify.com/show/2BUJWA0Cv2nlaGZ46TBEmP">
        <img src={spotifyicon} alt="Spotify Icon" className='icon' />
        Podcast Spotify (mom)
      </a>
      <a className='x' href="https://x.com/miguel11mom">
        <img src={x} alt="x Icon" className='icon' />
        Twitter X
      </a>
      <a className='instagram' href="https://www.instagram.com/miguel11mom/">
        <img src={instagram} alt="Ig Icon" className='icon' />
        Instagram
      </a>
      <a className='discord' href="https://discord.com/invite/pXaenh6znC" >
        <img src={discord} alt="Discord Icon" className='icon' />
        Comunidad De Discord (Gratis)
      </a>

      <a className='symmetry' href="https://www.symmetry.club/miguel" >
        <img src={symmetry} alt="Discord Icon" className='icon' />
        Symmetry
      </a>

      <div className="from">
        <div className="card">
          <div className="card-header">
            <img src={image2} alt="Imagen" className="card-image" />
            <div className="card-text-container">
              <span className="card-title">IMPORTANTE</span>
              <span className="card-text">Pon tu información aquí abajo si quieres ser el primero en enterarse cuando saque cosas nuevas y que te envíe emails de valor.</span>
            </div>
          </div>
          <form className="card-form">
            <input type="text" placeholder="Nombre" className="form-input" />
            <input type="text" placeholder="Email" className="form-input" />
            <div className="checkbox-container">
              <input type="checkbox" id="permission" value="sdas" className="form-checkbox" />
              <label htmlFor="permission" className="checkbox-label">Si, doy permiso para que Miguel me envíe emails.</label>
            </div>
            <button type="submit" className="form-button">Enviar</button>
          </form>
        </div>
      </div>

      <a className='symmetry' href="https://symmetry-graphic-designer.webflow.io/" >
      Buscamos Diseñador Gráfico
      </a>

      <a className='symmetry' href="https://symmetry-fullstack-developer.webflow.io/" >
      Buscamos Programador Fullstack (Con experiencia)
      </a>

      <a className='symmetry' href="https://symmetry-programmer.webflow.io/" >
      Buscamos Programador (Sin experiencia)
      </a>

      <a className='symmetry' href="https://symmetry-editor.webflow.io/" >
      Buscamos Editores de Video (Sin experiencia)
      </a>

    </div>
  );
}

export default App;
