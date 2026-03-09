
/* dados  */
let nome = "Monitor 24"
let preço = 199.99
let stock = 10
let categoria = "Monitores"
let emPromoção = true

/* calcular o iva e desconto */

let iva = preço * 0.23
let desconto = preço * 0.1

let preçoFinal = preço - iva + desconto 

/* mostrar resultado */

console.log(`${nome} - ${preçoFinal} (${stock})`);

function verificarStock(stock) {

    switch (true) {
        case stock === 0:
            return "Esgotado"
            case stock <= 5:
            return "Pouco stock"
                case stock >= 6 && stock <=20:
                return "Stock normal"
                    case stock > 20:
                    return "Stock elevado"
    }
}



console.log(verificarStock(0));
console.log(verificarStock((9)));
console.log(verificarStock(10));
console.log(verificarStock(40));

const produtos = [
{nome:"Monitor 24"
, preco:199.99, stock:10},
{nome:"Teclado Mecânico"
, preco:89.99, stock:4},
{nome:"Rato Gaming"
, preco:39.99, stock:0},
{nome:"Headset"
, preco:79.90, stock:6}
]

produtos.forEach(produtos =>{
    console.log(produtos.nome);
})

function valorTotalStock(produtos) {

    let total = 0;

    produtos.forEach (produtos => {(
        total += produtos.preco * produtos.stock
    )});
    return total 
}

console.log("Valor total do stock " + valorTotalStock(produtos));


function renderizarProdutos(produtos) {

    let container = document.getElementById("Lista de produtos");

    produtos.forEach(produtos => {

        let div = document.createElement("div");

        div.textContent = `${produtos.nome} - ${produtos.preco} - stock : ${produtos.stock}`;

        container.appendChild(div);

    });

}

renderizarProdutos(produtos);

