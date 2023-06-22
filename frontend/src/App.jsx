import './bigScreens.css';
import './App.css';
import './desktop.css';

import { useEffect } from 'react';

// window.addEventListener('scroll', function() {
    //   const scrolledY = window.pageYOffset;

    //   let images = [
    //     { id: '.sumario', initialPosition: 0 },
    //     { id: '.noivas', initialPosition: 500 },
    //     { id: '.automaquiagem', initialPosition: 900 }
    //   ];
      
    //   images.forEach(function(image) {
    //     const element = document.querySelector(image.id);
    //     const newPosition = image.initialPosition - scrolledY;
    //     element.style.backgroundPosition = 'left ' + newPosition + 'px';
    //   });
    // });

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const scrolledY = window.scrollY * 0.3;
      const scrolledYIMG = window.scrollY * 0.2;
      document.querySelector('.sumario').style.backgroundPosition = `left ${scrolledY}px`;
      document.querySelector('.noivas').style.backgroundPosition = `left ${scrolledYIMG - 270}px`;
      document.querySelector('.automaquiagem').style.backgroundPosition = `left ${scrolledYIMG - 580}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div className='body'>
      <div className='sumario'>
        <div className='g-pantuzzo'>
          <h1>g.pantuzzo</h1>
          <p>
            Giulia Pantuzzo é uma artista multidisciplinar
            que traduz seu estudo da Arte da Beleza em todas as
            suas criações. Suas produções únicas provocam
            experiências que rompem com a normalidade e celebram a potência do feminino.
          </p>
        </div>
      </div>
      <div className='nav'>
        <div className='div-nav'>
          <button className='btn'>
            <a href="#noivas">Contato</a>
          </button>
          <button className='btn'>
            <a href="#noivas">Dia de Noiva</a>
          </button>
          <button className='btn'>
            <a href="#automaquiagem">Curso de Automaquiagem</a>
          </button>
          <button className='btn'>
            <a href="#giuzzo">Conheça a Giuzzo</a>
          </button>
          <button className='btn'>
            <a href="#lipGlow">Compre o Lip Glow</a>
          </button>
        </div>
      </div>
      <section className='noivas' id='noivas'>
          <div className='div-noivas'>
            <div className='contaudo-noivas'>
              <h1>Weddings</h1>
              <h3>G. Pantuzzo convida para uma experiencia artística no seu casamento.</h3>
              <p>
                Para mim, é uma honra ser escolhida para produzir a Beleza do seu Dia de Noiva. Venha ceder o seu
                rosto como tela para que juntas possamos concretizar o seu sonho para este dia especial. Desejo fazer
                de você uma verdadeira obra prima, te deixando mais confiante do que nunca!
              </p>
              <button className='btn'>DIA DE NOIVA</button>
            </div>
          </div>
      </section>
      <section className='wedding-art'>
        <div className='wedding-art-text'>
          <h1>WEDDING ART</h1>
          <p>
            Transforme o seu casamento em uma experiência sensorial inesquecível e cocrie os detalhes artísticos
            do seu grande dia. Vamos desenvolver desde a Identidade Visual, Convites, Kits Personalizados, e tudo
            que você sonha para que a arte esteja em todos os detalhes.
          </p>
          <button className='btn'>Wedding Art</button>
        </div>
      </section>
      <section className='automaquiagem' id='automaquiagem'>
          <div className='div-automaquiagem'>
            <div className='mack'>
              <h1>CURSO DE AUTOMAQUIAGEM</h1>
              <p>
                Quer aprender a ressaltar sua beleza de um jeito divertido e artístico? A “Arte da Beleza” é o meu
                Curso de Automaquiagem em um formato de um Brunch & Make, onde irei desmistificar o mundo da
                beleza para você e passar todos os meus segredos dessa Arte.
              </p>
              <button className='btn'>Descubra a arte da beleza</button>
            </div>
          </div>
        </section>
      <header>
        {/* <h1>giuzzo</h1> */}
      </header>
      <main>
        <section className='breack'>
          <div className='text-breack'>
            <div className='giuzzo' id='giuzzo'>
              {/* <h1>giuzzo</h1> */}
              <p>
                GIUZZO, uma marca de arte idealizada por Giulia Pantuzzo, para materializar o seu universo criativo.
                Através de uma estética inovadora e posicionamento subversivo, suas criações não passam
                despercebidas. A GIUZZO é um convite para experimentar a arte no seu dia a dia.
              </p>
              <button className='btn'>giuzzo BRASIL</button>
              <button className='btn'>SHOP INTERNATIONAL</button>
            </div>
          </div>
        </section>
        <section className='lipglow' id='lipGlow'>
          <div>
            <div className='text-glow'>
              <h1>Lip Glow</h1>
              <p>
                Hidratação, Refrescância, Arte e Beleza em um só potinho. O Lip Glow é o hidratante labial formulado
                para realçar a sua beleza natural. Com uma combinação exclusiva de ativos, este produto foi
                desenhado para incentivar o seu autocuidado e aumentar sua autoconfiança.
              </p>
              <button className='btn'>Descubra o seu <br /> mais novo vício...</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section className='links'>
          <h1>CONHEÇA MEUS TRABALHOS</h1>
          <nav>
            <a href="https://www.instagram.com/gpantuzzo/" target="_blank" rel="noreferrer">Instagram de Art <span></span><span></span></a>
            <a href="https://www.instagram.com/giuliapantuzzobeauty/" target="_blank" rel="noreferrer">Instagram Beauty <span></span> <span></span></a>
            <a href="https://www.instagram.com/giuzzo.co/" target='_blank' rel="noreferrer">Instagram Giuzzo <span></span> <span></span></a>
            <a href="https://www.tiktok.com/@gpantuzzo" target="_blank" rel="noreferrer">TikTok <span></span> <span></span></a>
          </nav>
        </section>
      </footer>
    </div>
  );
}

export default App;
