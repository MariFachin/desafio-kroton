import '../App.css';
import imgblue1 from '../img/Group 2541.png';
import imgblue2 from '../img/Group 29.png';



function Banner1() {
  return (
    <div className="content-banner1">
        <section>
            <img src={imgblue1} alt="wpp" />
            <div className="banner1-text">
              <h2>Titulo 1</h2>
              <p>Content..  ... content. ... content.. .. content.. .. content .. 
              content.... content.... content.... content.... content....
              content.... content....</p>
              <button>Botão para detalhes....</button>
            </div>
        </section>
        <section>
            <img src={imgblue2} alt="wpp" />
            <div className="banner1-text">
              <h2>Titulo 1</h2>
              <p>Content..  ... content. ... content.. .. content.. .. content .. 
              content.... content.... content.... content.... content....
              content.... content....</p>
              <button>Botão para detalhes....</button>
            </div>
        </section>
    </div>
  );
}

export default Banner1;
