
let nome = "Teclado mecânico";
let preço = 89.99;
let stockDisponivel = 14;
let promoção = true;
let desconto = undefined;

/* iva  */

let iva = preço * 1.23; 

console.log(`${nome} - ${iva.toFixed(2)} (stock : ${stockDisponivel})`);

function classificarStock (stockDisponivel) {

    switch (true) {
        case stockDisponivel === 0 :
            return "Esgotado";
            case stockDisponivel >= 1 && stockDisponivel <= 5 :
                return "Stock crítico";
                case stockDisponivel >= 6 && stockDisponivel <= 20 :
                    return "stock normal"
                    case stockDisponivel > 20 :
                        return "Stock elevado"

    }
}

// testes //

console.log(classificarStock(0));
console.log(classificarStock(4));
console.log(classificarStock(7));
console.log(classificarStock(30));

let emPromocao = promoção ? "Em promoção" : "Preço normal" ;

// testes //

console.log(`${emPromocao}`);


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

produtos.forEach (produtos => {
    console.log(produtos.nome.toUpperCase());
})

/* calcular o valor do stock */

