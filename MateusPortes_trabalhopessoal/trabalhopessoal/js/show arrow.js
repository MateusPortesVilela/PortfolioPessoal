function mostrarTexto() {

    const texto = document.getElementById("textoExtra");
    const botao = document.getElementById("meubotao");

    if (texto.innerHTML === "") {

      texto.innerHTML = `
        <p>
          Tenho facilidade em organizar tarefas,
          criar planejamentos e manter processos
          bem estruturados.
        </p>
      `;

      botao.innerHTML = "Ver menos";

    } else {

      texto.innerHTML = "";
      botao.innerHTML = "Ver mais";
    }
}