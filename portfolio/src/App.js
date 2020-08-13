import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
  

        <body>

          <ul id=menu >
            <h2>Business</h2>
            <li><a href="#">about</a></li>
            <li><a href="#">work</a></li>
            <li><a href="#">team</a></li>
            <li><a href="#">blog</a></li>
            <li><a href="#">contact</a></li>

            <a href="#" className="tron">Login</a>
          </ul>

          <header>

            <div className="quadrado">
              <h1>Victor Degaspari Desenvolvedor Web</h1>
              <p>criando oportunidades</p>
              <a href="#" className="botoes">Saiba mais</a>

            </div>

          </header>

          <main className="container">

            <div className="acreditamos">
              <p>EM QUE ACREDITAMOS?</p>
              <h2>TRABALHAMOS PARA FORNECER QUALIDADE AO CLIENTE POR UM PREÇO ACESSÍVEL</h2>
            </div>

            <section>
              <div className="meugrid">
                <div className="textogrid">
                  <p></p>
                  <p>SOBRE</p>
                  <h2>QUEM SOU</h2>
                  <p></p>
                  <p>Meu nome é Victor Degaspari tenho 18 anos e atualmete cursando Análise e Desenvolvimento na UTFPR.</p>
                  <p>Sou um amante da tecnologia, dedico meu tempo estudando programação.</p>
                  <p>nas horas livres assisto séries e jogo games online.</p>
                  <a href="#" className="botoes">Saber mais</a>
                </div>
                <div><img className="eu" src="../imagens/eu.jpg"></div>

                </div>

            </div>

              
                <div className="desenvolvemos">
                  <div className="desenvolvimento"> <img class="time " src="../imagens/desenvolvimento-web-mobile.png"></div>
                    <div className="textosgridbaixo">
                      <p></p>
                      <p>TEAM</p>
                      <H2>O QUE FAZEMOS</H2>
                      <p></p>
                      <p>Fornecemos serviços na área de construção de web sites e aplicativos mobile.</p>
                      <p>Já foram feitos diversos projetos, todos com a qualidade de sempre a um preço acessível!</p>
                      <a href="#" className="botoes">Saber mais</a>
                    </div>
                  </div>
       

                <div className="novidades">
                  <p></p>
                  <p>Sobre nos</p>
                  <h2>Novidades da empresa</h2>
                </div>

                <section>

                  <div className="finalgrid">

                    <div>
                      <h3>Novos Projetos</h3>
                      <div data-now="horario"></div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                      elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                      diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                        sem vitae risus tristique posuere.</p>
                    </div>

                    <div>
                      <h3>Contratação</h3>
                      <div data-now="horario"></div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                      elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                      diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                        sem vitae risus tristique posuere.</p>
                    </div>

                    <div>
                      <h3>Tecnologias em destaque</h3>
                      <div data-now="horario"></div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                      elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                      diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                        sem vitae risus tristique posuere.</p>
                    </div>

                  </div>

                </section>

                <div class="infofinal">
                  <h2>Grow your business.</h2>
                  <p>Today is the day to build the business of your dreams. Share your mission with the world — and blow your
                customers away.</p>
                  <a href="#" class="botoes">Entre em contato</a>
                </div>
        </div>
    </main>
            <footer>
              <p>powered by degas inc.</p>
              <div className="twitter">
                <img className="logott" src="../imagens/twitter.png" alt="">
                  <a className="tt" href="https://twitter.com/DegaspariVictor" class="twitter-follow-
        button" data-button="grey" data-show-count=”false” data-link-color="800080" data-text-color="800080">Siga
                Victor Degaspari no Twitter! </a>
              </div>
              <div className="instagram">
                <img className="logoinsta" src="../imagens/insta.png" alt="">
                  <a className="insta" href="https://instagram.com/victor.degaspari" class="twitter-follow-
            button" data-button="grey" data-show-count=”false” data-link-color="800080" data-text-color="800080">Siga
                Victor Degaspari no Instagram! </a>
              </div>
            </footer>
</body>

    </div>
    
  );


export default App;
