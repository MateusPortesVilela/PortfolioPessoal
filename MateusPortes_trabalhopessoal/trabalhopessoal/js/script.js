window.onload = function () {
  const titulo = document.getElementById("animacaoinicial");

  setTimeout(() => {
    titulo.style.opacity = "1";
  }, 200);
};

function revelar() {
  const elementos = document.querySelectorAll(".reveal");

  elementos.forEach((el) => {
    const alturaTela = window.innerHeight;
    const topoElemento = el.getBoundingClientRect().top;

    if (topoElemento < alturaTela - 100) {
      el.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", revelar);
window.addEventListener("load", revelar);

const form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome && email && mensagem) {
    alert("Mensagem enviada com sucesso!");
    form.reset();
  } else {
    alert("Preencha todos os campos!");
  }
});
