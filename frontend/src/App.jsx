import './App.css';

function App() {
  return (
    <div className='body'>
      <header>
        <div className='giuzzo'>
          <h1>Conheça a Giuzzo</h1>
          <p>
            Realce sua beleza única com a GIUZZO. Descubra nossa maquiagem de qualidade,
            realce sua essência e brilhe. Junte-se a nós nessa jornada de autodescoberta
            e empoderamento.
          </p>
          <button className='btn'>Venha nós conhecer</button>
        </div>
      </header>
      <main>
        <section className='noivas'>
          <div className='div-noivas'>
            <div className='contaudo-noivas'>
              <h1>Noivas</h1>
              <p>
                Deixe-nos ser parte do dia mais importante da sua vida. Prepare-se para brilhar
                intensamente no seu grande dia. Confie em nós para tornar cada momento inesquecível. 
              </p>
              <button className='btn'>Agende seu dia de noiva</button>
            </div>
          </div>
        </section>
        <section className='breack'></section>
        <section className='automaquiagem'>
          <div className='div-automaquiagem'>
            <div className='giuzzo'>
              <h1>Curso automaquiagem</h1>
              <p>
                Descubra o poder da sua beleza.
                Aprenda a destacar suas melhores qualidades e se sentir confiante
                e radiante todos os dias. 
              </p>
              <button className='btn'>Venha aprender a se automaquiar</button>
            </div>
          </div>
        </section>
        <section className='lipglow'>
          <div>
            <div className='text-glow'>
              <h1>Lip Glow</h1>
              <p>
                Não perca a oportunidade de se sentir confiante e deslumbrante. Deixe o Lip Glow ser
                o seu segredo de beleza e encante a todos com seus lábios irresistíveis!
              </p>
              <button className='btn'>Venha descobrir seu novo vício</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section>
          <div>
            <h1>Tik tok GRWM</h1>
            <p></p>
            <button></button>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
