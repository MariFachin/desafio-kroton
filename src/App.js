import './App.css';
import wpp from './img/Frame.png';
import lupa from './img/Vector.png';

import Banner1 from './componets/Banner1'
import Banner4 from './componets/Banner4'


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="contact">
          <img src={wpp}  alt="wpp"/>
          <a href="#/">Fale conosco</a> 
        </div>
      </header>
      <Banner1/>
      <section className="forms-content">
        <h2>Titulo 3</h2>
        <form>
          <div className="all-inputs">
            <label for="pergunta1">Pergunta 1 ?</label>
            <input type="text" id="pergunta1" name="pergunta1" placeholder="Digite a resposta"></input>
          </div>
          <div  className="all-inputs">
            <label for="pergunta2">Pergunta 2 ?</label>
            <input type="text" id="pergunta2" name="pergunta2" placeholder="Digite a resposta"></input>
          </div>
          <div  className="all-inputs select">
            <label for="respostas">Pergunta 3 ?</label>
            <select id="respostas" name="respostas">
              <option value="resposta1">Resposta 1</option>
              <option value="resposta2">Resposta 2</option>
              <option value="resposta3">Resposta 3</option>
              <option value="resposta4">Resposta 4</option>
            </select>          
          </div>
          <button className="input-button"><img src={lupa}  alt="wpp" /></button>
        </form>
      </section>
      <div className="banner4">
        <h2>Titulo 4</h2>
        <div className="all-banner4">
          <Banner4/>
          <Banner4/>
          <Banner4/>
          <Banner4/>
        </div>
        <div className="all-banner4">
          <Banner4/>
          <Banner4/>
          <Banner4/>
          <Banner4/>
        </div>
      </div>
      <h3>+ Carregar mais cursos</h3>
    </div>
  );
}

export default App;
