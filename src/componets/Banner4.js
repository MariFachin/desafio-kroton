import '../App.css';
import img from '../img/Rectangle 270.png';



function Banner4() {
  return (
    <section className="content-banner4">
        <img src={img} className="" alt="wpp" />
        <div className="text-banner4">
            <p>Titulo.......</p>
            <h2>Titulo.......</h2>
            <button>Acessar</button>
        </div>
    </section>
  );
}

export default Banner4;
