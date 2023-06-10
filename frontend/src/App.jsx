import './bigScreens.css';
import './App.css';
import './desktop.css';

// import img from './images/g.pantuzzo.tnsp.png'

function App() {
  return (
    <div className='body'>
      <div className='sumario'>
        <div className='g-pantuzzo'>
          <h1>G.Pantuzzo</h1>
          {/* <h2><img src={ img } alt="" /></h2> */}
          <p>
            Giulia Pantuzzo é uma artista multidisciplinar
            que traduz seu estudo da Arte da Beleza em todas as
            suas criações. Suas produções únicas provocam
            experiências que rompem com a normalidade e celebram a potência do feminino.
          </p>
          <button className='btn'>
            Contato e Agendamento
          </button>
          {/* <button className='btn'>
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
          </button> */}
        </div>
      </div>
      <section className='noivas' id='noivas'>
          <div className='div-noivas'>
            <div className='contaudo-noivas'>
              <h1>Noivas</h1>
              <h3>G. Pantuzzo convida para uma experiencia artística no seu casamento.</h3>
              <p>
                Para mim, é uma honra ser escolhida para produzir a Beleza do seu Dia de Noiva. Venha ceder o seu
                rosto como tela para que juntas possamos concretizar o seu sonho para este dia especial. Desejo fazer
                de você uma verdadeira obra prima, te deixando mais confiante do que nunca!
              </p>
              <button className='btn'>Dia de noiva com a GIU</button>
              <p>
                Transforme o seu casamento em uma experiência sensorial inesquecível e cocrie os detalhes artísticos
                do seu grande dia. Vamos desenvolver desde a Identidade Visual, Convites, Kits Personalizados, e tudo
                que você sonha para que a arte esteja em todos os detalhes.
              </p>
              <button className='btn'>Wedding Art</button>
            </div>
          </div>
      </section>
      <section className='automaquiagem' id='automaquiagem'>
          <div className='div-automaquiagem'>
            <div className='giuzzo'>
              <h1>Curso automaquiagem</h1>
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
        <div className='giuzzo' id='giuzzo'>
          <h1>giuzzo</h1>
          <p>
            GIUZZO, uma marca de arte idealizada por Giulia Pantuzzo, para materializar o seu universo criativo.
            Através de uma estética inovadora e posicionamento subversivo, suas criações não passam
            despercebidas. A GIUZZO é um convite para experimentar a arte no seu dia a dia.
          </p>
          <button className='btn'>SHOP SITE | Brasil</button>
          <button className='btn'>SHOP SITE | Internacional</button>
        </div>
      </header>
      <main>
        <section className='breack'></section>
        <section className='lipglow' id='lipGlow'>
          <div>
            <div className='text-glow'>
              <h1>Lip Glow</h1>
              <p>
                Hidratação, Refrescância, Arte e Beleza em um só potinho. O Lip Glow é o hidratante labial formulado
                para realçar a sua beleza natural. Com uma combinação exclusiva de ativos, este produto foi
                desenhado para incentivar o seu autocuidado e aumentar sua autoconfiança.
              </p>
              <button className='btn'>Descubra o seu mais novo vício</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section className='links'>
          <h1>Me encontre</h1>
          <nav>
            <a href="https://www.instagram.com/gpantuzzo/" target="_blank" rel="noreferrer">Intagram de Art <span></span><span></span></a>
            <a href="https://www.instagram.com/giuliapantuzzobeauty/" target="_blank" rel="noreferrer">Intagram Beauty <span></span> <span></span></a>
            <a href="https://www.instagram.com/giuzzo.co/" target='_blank' rel="noreferrer">Intagram Giuzzo <span></span> <span></span></a>
            <a href="https://www.tiktok.com/@gpantuzzo" target="_blank" rel="noreferrer">TikTok <span></span> <span></span></a>
          </nav>
        </section>
      </footer>
    </div>
  );
}

export default App;
