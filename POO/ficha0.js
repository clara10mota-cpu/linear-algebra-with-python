
/* variáveis necessárias para representar um produto */

let nome = "teclado mecanico";
let preço = 89.99;
let stock = 14;
let promoção = true;
let desconto = undefined;

/* Calcular o IVA */ 

const iva = preço * 0.23;

/* Preço do produto arredondado a 2 casas decimais  */

const preçoFinal = (preço + iva).toFixed(2);

console.log("Preço com o iva :"+ preçoFinal);

/* Uma string formatada com o seguinte aspeto: “Teclado Mecânico – 110.65€ (stock: 14)”. */

const produto = `${nome} - ${preçoFinal} (stock: ${stock})`;

console.log("Descrição do produto:" + produto);

/* Crie uma função chamada classificarStock que recebe o número de unidades em stock e devolve: */

function classificarStock (stock) {
    switch (true) {
        case stock === 0:
            return "Esgotado"
            case stock >= 1 && stock <= 5:
                return "stock critico"
                case stock >= 6 && stock <= 20:
                    return "stock normal"
                    case stock > 20:
                        return " stock elevado "


    }
}

/* testar o stock  */

console.log(classificarStock (0));
console.log(classificarStock (7));
console.log(classificarStock (10));
console.log(classificarStock (28));

/* questão da promoção ou não */

let etiqueta = promoção ? "Produto em promoção!" : "Produto sem promoção";

console.log(etiqueta);

/*  array de produtos */

const produtos = [
  {
    nome: "Teclado Mecânico",
    preco: 89.99,
    stock: 14,
    emPromocao: true,
    descricao: "Teclado mecânico com switches de alta qualidade",
  },
  {
    nome: "Rato Sem Fios",
    preco: 34.5,
    stock: 2,
    emPromocao: false,
    descricao: "Rato sem fios ergonómico com sensor óptico",
  },
  {
    nome: 'Monitor 27"',
    preco: 349.0,
    stock: 0,
    emPromocao: true,
    descricao: "Monitor LED de 27 polegadas Full HD",
  },
  {
    nome: "Headset Gaming",
    preco: 59.9,
    stock: 28,
    emPromocao: false,
    descricao: "Headset gaming com som surround 7.1",
  },
  {
    nome: "Webcam HD",
    preco: 45.0,
    stock: 7,
    emPromocao: true,
    descricao: "Webcam HD 1080p com microfone integrado",
  },
];

/* copiar na consola apenas os nomes dos produtos, em maiúsculas, um por linha.  */

produtos.forEach(produtos =>{
    console.log(produtos.nome.toUpperCase());
})


/* calcular o valor total do stock  */

function calcularValorStock (produtos) {

    let total = 0;

    produtos.forEach(produtos => {(
        total += produtos.preco * produtos.stock
    )});

    return total.toFixed(2);

}

console.log("Valor total do stock : ", calcularValorStock(produtos));

/* array de produtos disponiveis e não disponiveis */

let produtosDisponiveis = produtos.filter(produtos => produtos.stock >0);

let produtosEsgotados = produtos.filter(produtos => produtos.stock === 0);

console.log("Quantidade de produtos disponiveis :" ,produtosDisponiveis.length);

console.log("Quantidade de produtos indisponiveis :" , produtosEsgotados.length);


/* que recebe um objeto produto e devolve uma string com o seguinte
formato: "Monitor 27\" — 349.00€ — Esgotado — Em promoção". */


function descricaoProduto (produto) {
  
  let stock = classificarStock(produto.stock);

  let promoção = produto.emPromocao ? "Em promoção" : "Sem promoção";

   return `${produto.nome} — ${produto.preco.toFixed(2)}€ — ${stock} — ${promoção}`;

}

produtos.forEach(produto => {
  console.log(descricaoProduto (produto));
});



function renderizarProdutos (produtos) {

  let container = document.getElementById(" Lista de produtos ");
  
  produtos.forEach(produto => {
    
    let produtoElement = document.createElement("div");

    produtoElement.textContent = descricaoProduto(produto);

    container.appendChild(produtoElement);
  })
}


let mostrarDisponiveis = false;

let botao = document.getElementById("btn-disponiveis");

botao.addEventListener("click", () => {

    mostrarDisponiveis = !mostrarDisponiveis;

    if(mostrarDisponiveis){

        renderizarProdutos(produtosDisponiveis);

        botao.textContent = "Mostrar todos";

    }else{

        renderizarProdutos(produtos);

        botao.textContent = "Mostrar disponíveis";

    }

});