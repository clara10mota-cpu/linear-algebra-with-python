let ovo1;
let ovo2;

function gerarOvos() {
    ovo1 = Math.floor(Math.random() * 12) + 1;
    ovo2 = Math.floor(Math.random() * 12) + 1;

    while (ovo2 === ovo1) {
        ovo2 = Math.floor(Math.random() * 12) + 1;
    }

    console.log("Ovos:", ovo1, ovo2);
}

gerarOvos();

let elementos = document.querySelectorAll("button, td");

elementos.forEach((elemento, indice) => {

    elemento.addEventListener("mouseover", () => {
        elemento.classList.add("destaque");
    });

    elemento.addEventListener("mouseout", () => {
        elemento.classList.remove("destaque");
    });

    elemento.addEventListener("click", () => {
        let posicao = indice + 1;

        if (posicao === ovo1 || posicao === ovo2) {
            elemento.innerHTML = '<img src="Ovo.png">';
            
            setTimeout(() => {
                elemento.innerHTML = '<img src="DiscoverEggs.png">';
            }, 2000);
        }
    });

});