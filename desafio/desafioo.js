
let ovo1;
let ovo2;

let primeiroEncontrado = null;
let segundoEncontrado = null;
let jogoTerminado = false;



/* gerar os ovos e ter a certeza que não há repetição de número  */

function gerarOvos () {

    ovo1 = Math.floor(Math.random () * 12) + 1; 
    ovo2 = Math.floor(Math.random() * 12) + 1;

    while (ovo2 === ovo1){
        ovo2 = Math.floor(Math.random() * 12) + 1;
    }

    console.log("Ovos:", ovo1, ovo2);
}

// TESTE //

gerarOvos();

////////////////////////////////////////


let elementos = document.querySelectorAll("button, td");
let rodape = document.querySelector("footer");
let numeroCliques = 0;


elementos.forEach((elementos, indice) => {

    elementos.addEventListener("mouseover", () => {
        elementos.classList.add("destaque");
    });

    elementos.addEventListener("mouseout", () => {
        elementos.classList.remove("destaque");
    });

    elementos.addEventListener("click", () => {
        numeroCliques++;
        let posicao = indice + 1;

        if (jogoTerminado) {
            return;
        }

        if (posicao !== ovo1 && posicao !== ovo2) {
            return;
        }

        if (primeiroEncontrado === null) {
            primeiroEncontrado = posicao;

            elementos.innerHTML = '<img src="Ovo.png">';

            setTimeout(() => {
                if (segundoEncontrado === null) {
                    elementos.innerHTML = '<img src="DiscoverEggs.png">';
                }
            }, 2000);

            return;
        }

        if (segundoEncontrado === null && posicao !== primeiroEncontrado) {
            segundoEncontrado = posicao;

            elementos.innerHTML = '<img src="Ovo.png">';
            return;
        }

        if (segundoEncontrado !== null && posicao === primeiroEncontrado) {
            elementos.innerHTML = '<img src="Ovo.png">';
            jogoTerminado = true;

            rodape.textContent = "Parabéns, encontraste os Ovos de Páscoa";
        }
    });

});





let botaoCliques = document.getElementById("mostrarCliques");

botaoCliques.addEventListener("click", () => {
    alert("Número de cliques: " + numeroCliques);
});