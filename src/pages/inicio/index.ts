export function inicioPage() {
  function busquedaEIncerto() {
    const buscado: any = document.querySelector(".root");
    buscado.innerHTML = `
    <br />
    <div class="primera-pagina-titulo">
        <br />
            <a>Piedra</a>
        <br />
            <a>Papel </a><a>O</a>
        <br />
            <a>Tijera</a>
        </div>
            <button id="boton1" class="primera-pagina-boton" onclick="location.href='reglas';" >Empezar</button>
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
    </div>`;
    
  }
  

  function modificacion() {
    const boton1: any = document.getElementById("boton1")
    console.log(boton1);
    boton1.addEventListener("click", console.log("apretaron"));
  }

  function main() {
    busquedaEIncerto();
    modificacion()
  }

  main();
}
