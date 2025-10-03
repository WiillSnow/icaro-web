// src/legacy/markup.ts
const html = `
  <!-- Header -->
  <header class="main-header">
    <div class="header-container">
      <div class="logo">
        <img src="/img/icaro-blanco.png" id="logo" alt="Ícaro Solar">
      </div>
      <nav class="main-nav">
        <ul class="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#soluciones">Soluciones</a></li>
         </ul> 
         <ul class="btn-links">
          <li><a href="#contacto" class="btn-contorno">Contáctanos</a></li>
        </ul>
         <ul class="nav-links"> 
          <li><a href="#cotiza">Cotiza</a></li>
          <li><a href="/faqs">FAQs</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section id="inicio" class="hero">
    <div class="hero-text">
      <h1>MÁS CERCA DEL SOL</h1>  
      <p>Precisión de ingeniería, claridad en tu factura</p>
    </div>
  </section>

  <!-- Sección Nosotros -->
  <section id="nosotros" class="nosotros-section">
    <div class="container nosotros-container">
     <div class="nosotros-texto">
        <h2 class="titulo-nosotros">¿Quiénes somos?</h2>
          <p>En <strong>ÍCARO SOLAR</strong> somos una empresa jóven, profesional y comprometida con el futuro energético sustentable. <br><br>
           Creemos en un enfoque integral que va más allá de la instalación: analizamos el <strong>consumo energético</strong> real, proponemos <strong>alternativas eficientes</strong> y acompañamos a nuestros clientes durante todo el proceso, desde la cotización hasta el <strong>seguimiento post-venta</strong>. Nuestro compromiso es con las personas: brindamos <strong>atención personalizada, soluciones claras y resultados comprobables.</strong> <br><br>
           La energía solar deja de ser una promesa del futuro y se convierte en una realidad <strong>inmediata, accesible y rentable.</strong>
          </p>
    </div>
      <div class="nosotros-imagen">
        <img src="/img/nosotros.png" alt="Imagen de nosotros"/>
      </div>
    </div>
  </section>

  <!-- Sección Soluciones -->
  <section id="soluciones" class="fondo-soluciones">
    <div class="soluciones-wrapper">
      <h2 class="titulo-soluciones">Conoce Nuestras Propuestas</h2>  
      <div class="soluciones">
        <div class="solucion" style="background-image: url('/img/Tec11.webp');" onclick="openModal('modal1')">
          <div class="overlay">
            <h3>Sistemas Interconectados</h3>
            <p>Ideales para: Hogares y negocios conectados a la red CFE que desean reducir su factura de energía.</p>
          </div>
        </div>
        <div class="solucion" style="background-image: url('/img/Tec22.webp');" onclick="openModal('modal2')">
          <div class="overlay">
            <h3>Sistemas Híbridos</h3>
            <p>Ideales para: Hogares y negocios que desean ahorro y protección ante cortes de energía CFE.</p>
          </div>
        </div>
        <div class="solucion" style="background-image: url('/img/Tec33.webp');" onclick="openModal('modal3')">
          <div class="overlay">
            <h3>Sistemas Autónomos</h3>
            <p>Ideales para: zonas sin acceso a la red eléctrica, con inestabilidad de continuidad o dificultades de conexión.</p>
          </div>
        </div> 
      </div>
    </div>
  </section>

  <!-- Modals -->

  <div id="modal1" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal('modal1')">&times;</span>

      <div class="modal-img">
        <img src="/img/Tec1.webp" alt="Tecnología 1">
      </div>

      <div class="modal-text">
        <h2 class="modal-title">Sistemas Interconectados</h2>
        
        <section id="txt-interconectado" class="modal-body">
        <p><strong>Qué son y cómo funcionan.</strong></p> 
          <p>Operan <strong>en conjunto con CFE</strong>: los paneles generan energía durante el día y, si producen más de lo que consumes, el excedente se envía a la red mediante un <strong>medidor bidireccional</strong>. En la noche o cuando no hay sol, tomas energía de CFE con normalidad.</p>
        
        <p><strong>Ahorro esperado.</strong></p> 
        <p>Con un dimensionamiento correcto y buenos hábitos, el <strong>costo del recibo</strong><strong> puede disminuir hasta en un 98%</strong>. El porcentaje real depende del historial de consumo, tarifa, orientación/sombras del techo y clima.</p>
        
        <p><strong>Respaldo ante apagones.</strong></p>
        <p> No incluyen respaldo: por seguridad (anti-isla), el sistema <strong>se apaga durante un corte</strong> de CFE. Su objetivo principal es <strong>reducir el pago del recibo</strong>.</p>
        
        <p><strong>Inversión.</strong></p> 
        <p>Es la <strong>opción</strong><strong> más económica</strong> de las tres, porque no requiere baterías.</p>
        
        <p><strong>Componentes principales:</strong></p>
      <ul>
        <li>Paneles solares</li>
        <li>Inversor</li>
      </ul>
        
        <p><strong>Ideal para.</strong></p>
          <p>Quien busca <strong>máximo</strong><strong> ahorro con la menor inversión</strong> y no necesita energía durante apagones.</p>
        </section>
      </div>
    </div>
  </div>

  <div id="modal2" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal('modal2')">&times;</span>

      <div class="modal-img">
        <img src="/img/Tec2.webp" alt="Tecnología 2">
      </div>

      <div class="modal-text">
        <h2 class="modal-title">Sistemas Híbridos</h2>

          <section id="txt-interconectado" class="modal-body">

        <p><strong>Qué son y cómo funcionan.</strong></p> 
        <p>También trabajan <strong>en conjunto con CFE</strong>, pero añaden baterías para mantener operativos <strong>circuitos críticos</strong> durante cortes. Cuando falta la red, cambian a <strong>modo respaldo</strong> de forma automática.</p>

        <p><strong>Ahorro esperado.</strong></p> 
        <p>El <strong>recibo puede</strong><strong> disminuir hasta en un 98%</strong>, igual que en un interconectado bien dimensionado.</p>

        <p><strong>Respaldo ante apagones.</strong></p> 
        <p>Su mayor ventaja: <strong>tienes energía durante los cortes</strong>. La autonomía y la cantidad de cargas que puede sostener dependen de la <strong>capacidad de baterías</strong> y la <strong>potencia</strong> del sistema.</p>

        <p><strong>Inversión.</strong></p> 
        <p><strong>Mayor</strong> que la de un interconectado, porque <strong>incorpora baterías</strong> y componentes de control.</p>

        <p><strong>Componentes principales:</strong></p>
      <ul>
        <li><strong>Paneles solares</strong></li>
        <li><strong>Inversor híbrido</strong></li>
        <li><strong>Baterías</strong></li>
      </ul>

      <p><strong>Ideal para.</strong></p> 
      <p>Hogares o negocios que desean <strong>ahorro</strong> y, además, <strong>continuidad</strong> en servicios esenciales cuando hay apagones.</p>


          </section>
      </div>
    </div>
  </div>

  <div id="modal3" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal('modal3')">&times;</span>

      <div class="modal-img">
        <img src="/img/Tec3.webp" alt="Tecnología 3">
      </div>

      <div class="modal-text">
        <h2 class="modal-title">Sistemas Autónomos</h2>

          <section id="txt-interconectado" class="modal-body">

        <p><strong>Qué son y cómo funcionan.</strong></p> 
        <p>Son <strong>independientes de CFE</strong>: toda la energía la proveen los <strong>paneles y baterías</strong>. En el día, los paneles alimentan cargas y recargan baterías; por la noche y en días nublados, las <strong>baterías</strong> suministran la energía.</p>

        <p><strong>Ahorro y dependencia.</strong></p> 
        <p>No hay conexión con CFE, por lo que <strong>cualquier falla</strong><strong> en la red pública no te afecta</strong>. Requiere un dimensionamiento cuidadoso para cubrir consumo y la autonomía deseada.</p>

        <p><strong>Respaldo ante apagones.</strong></p>
        <p>No aplica: al no depender de CFE, <strong>tu sistema</strong><strong> sigue operando</strong> mientras tenga suficiente energía almacenada.</p>

        <p><strong>Inversión.</strong></p> 
        <p>Es la <strong>más alta</strong> de las tres, ya que se dimensiona para <strong>todo el hogar</strong> (o sitio) y demanda un <strong>banco de baterías</strong> de mayor capacidad.</p>

        <p><strong>Componentes principales:</strong></p>
      <ul>
        <li><strong>Paneles solares</strong></li>
        <li><strong>Inversor/cargador</strong></li>
        <li><strong>Baterías</strong></li>
      </ul>

        <p><strong>Ideal para.</strong></p> 
        <p>Zonas <strong>sin acceso confiable</strong> a la red o proyectos que buscan <strong>independencia total</strong> de CFE.</p>
</section

          </section>
      </div>
    </div>
  </div>

  <!-- Sección Proyectos -->
  <section class="seccion-proyectos">
    <h2 class="titulo-proyectos">Nuestros Últimos Proyectos</h2>

    <div class="galeria-proyectos">
      <div class="proyecto-card">
        <img src="/img/Pr1.webp" alt="Proyecto 1">
        <div class="proyecto-info">
          <h3>Proyecto Bicentenario</h3>
          <p>Ubicación: Mérida, Yucatán</p>
          <p>Carga Instalada: <span class="badge"> 12.8 kW</span></p>
        </div>
      </div>
      <div class="proyecto-card">
        <img src="/img/Pr2.webp" alt="Proyecto 2">
        <div class="proyecto-info">
          <h3>Proyecto Chocholá</h3>
          <p>Ubicación: Chocholá, Yucatán</p>
          <p>Carga Instalada:<span class="badge"> 4.5 kW</span></p>
        </div>
      </div>
      <div class="proyecto-card">
        <img src="/img/Pr3.webp" alt="Proyecto 3">
        <div class="proyecto-info">
          <h3>Proyecto Alesia</h3>
          <p>Ubicación: Mérida, Yucatán</p>
          <p>Carga Instalada:<span class="badge"> 5.12 kW</span></p>
        </div>
      </div>
      <div class="proyecto-card">
        <img src="/img/Pr4.webp" alt="Proyecto 4">
        <div class="proyecto-info">
          <h3>Proyecto Héroes</h3>
          <p>Ubicación: Mérida, Yucatán</p>
          <p>Carga Instalada:<span class="badge"> 19.2 kW</span></p>
        </div>
      </div>
    </div>
  </section>

  <!-- REACT_CTA_SLOT -->





  <!-- Footer -->
  <footer class="footer">
    <div class="footer-container">
      <!-- Columna Izquierda -->
      <div class="footer-logo">
        <img src="/img/icaro-blanco.png" alt="Ícaro Solar" />
      </div>
      <!-- Columna Centro -->
      <div class="footer-info">
        <p>© 2025 Ícaro Solar. Todos los derechos reservados.</p>
        <p>Contáctanos: contacto@icarosolar.mx | +52 999 969 9146</p>
      </div>
      <!-- Columna Derecha -->
      <div class="footer-social">
        <a href="https://www.facebook.com/" target="_blank">
          <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="/img/instagram.png" alt="Instagram" />
        </a>
      </div>
    </div>
  </footer>

  <!-- Cuadro Flotante de Contacto -->
  <div id="contact-box" class="contact-box">
    <p>CONTACTO INMEDIATO<br><strong>Llámanos:<br> +52 9992 144601</strong></p>
    <a href="https://wa.me/529992144601" class="whatsapp-btn" target="_blank">WhatsApp</a>
  </div>
`;
export default html;
