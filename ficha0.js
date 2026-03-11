
let nome = "teclado Mecânico";
let preço = 89.99;
let quantidade = 14;
let promoção = true;
let desconto = undefined;


let iva = preço * 0.23;

let preçoFinal = preço + iva;

console.log(`${nome} - ${preçoFinal.toFixed(2)} (${quantidade})`);

function classificarStock (quantidade) {
    switch (true) {
        case quantidade === 0:
            return "Esgotado";
            case quantidade >=1 && quantidade <= 5:
                return "Stock critico";
                case quantidade >6 && quantidade <= 20:
                    return "Stock normal";
                    case quantidade > 20:
                        return "Stock elevado";


    }
}

console.log(classificarStock(4));
console.log(classificarStock(10));
console.log(classificarStock(99));
console.log(classificarStock(1));


let etiqueta = promoção ? "Em promoção" : "preço normal";

console.log(etiqueta);

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

produtos.forEach(produtos => {
    console.log(produtos.nome.toUpperCase());
})

function calcularValorStock (produtos) {
   
    let valorTotal = 0;
    produtos.forEach(produtos => {

        let valorStock = produtos.preco * produtos.stock;
        valorTotal += valorStock;

    })
    return valorTotal;


}


console.log("O valor total em stock é: " + calcularValorStock(produtos));

produtosDisponiveis = produtos.filter(produtos => produtos.stock > 0);

produtosIndisponiveis = produtos.filter(produtos => produtos.stock === 0);

console.log(produtosDisponiveis);
console.log(produtosIndisponiveis);













