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

