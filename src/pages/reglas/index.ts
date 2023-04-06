export function reglasPage () {
    const buscado: any = document.querySelector(".root");
    buscado.innerHTML = `
      <div class="segunda-pagina-titulo">
        <br>
        <a>Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</a>
      </div>
      <button class="segunda-pagina-boton" onclick="location.href='juego';">Jugar</button>
              <br>
        <br>
        <br>
      <div class="primera-pagina-footer">
      <img
      src="https://svgshare.com/i/rY0.svg"
      alt="tijera"
      class="primera-pagina-footer-imagenes"
      />
      <img
          src="https://svgshare.com/i/rYS.svg"
          alt="piedra"
          class="primera-pagina-footer-imagenes"
      />
      <img
          src="https://svgshare.com/i/rXi.svg"
          alt="papel"
          class="primera-pagina-footer-imagenes"
      />
      </div>
    `;

};