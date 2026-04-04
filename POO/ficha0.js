
let nome = "Teclado mecânico";
let preço = 89.99;
let stockDisponivel = 14;
let promoção = true;
let desconto = undefined;

// CALCULO DO IVA //

let iva = preço * 1.23; 

console.log(`${nome} - ${iva.toFixed(2)} (stock : ${stockDisponivel})`);

// DISPONIBILIDADE DO STOCK //

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

// TESTES //

console.log(classificarStock(0));
console.log(classificarStock(4));
console.log(classificarStock(7));
console.log(classificarStock(30));

let emPromocao = promoção ? "Em promoção" : "Preço normal" ;

// TESTES //

console.log(`${emPromocao}`);

// NOVO OBJETO //

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

// CALCULO TOTAL DO VALOR DO STOCK //

function calcularValorStock (produtos) {

  let total = 0;

  produtos.forEach(produto => {
    total += produto.preco * produto.stock;

  });

  return total;

}

console.log(`Valor total do stock: ${calcularValorStock(produtos)}`);

// PRODUTOS DISPONIVEIS E INDISPONIVEIS //

const produtosDisponiveis = [];

produtos.forEach (produto => {
  if (produto.stock >0) {
    produtosDisponiveis.push(produto.nome);

  }

});

const produtosIndisponiveis = [];

produtos.forEach (produto => {
  if (produto.stock <=0) {
    produtosIndisponiveis.push(produto.nome);

  }

});

console.log(produtosDisponiveis);
console.log(produtosIndisponiveis);


function descricaoProduto (produto) {
  return `${produto.nome} - ${produto.preco} - ${classificarStock(produto.stock)} - ${emPromocao}`;

}

produtos.forEach (produto => {
    console.log(descricaoProduto(produto));
});


// PARTE DOM //

function renderizarProdutos (lista) {
  const div = document.getElementById("lista-produtos"); /* vai buscar a div  */
  div.innerHTML = ""; /* limpar o historico da div  */
  
  lista.forEach (produto =>{ 
    const p = document.createElement("p"); /* criar um "p" */
    p.textContent = descricaoProduto(produto); 

    div.appendChild(p);

  });

}

const botao = document.getElementById("btn-disponiveis");

let mostrarDisponiveis = false;

botao.addEventListener("click", () => {
  const div = document.getElementById("lista-produtos");
  div.innerHTML = "";

  if(!mostrarDisponiveis){
    produtos.forEach (produto => {
      if(produto.stock > 0) {
        const p = document.createElement("p");
        p.textContent = descricaoProduto(produto);
        div.appendChild(p);
      }
    });

    botao.textContent ="Mostrar todos";
    mostrarDisponiveis = true;
  } else {
    produtos.forEach(produto => {
      const p = document.createElement("p");
      p.textContent = descricaoProduto(produto);
      div.appendChild(p);
    });

    botao.textContent ="Mostrar disponíveis"
    mostrarDisponiveis = false;


  }

});


// DESAFIO //

function ordenarPorPreco (produtos) {

  return [...produtos].sort((a,b) => a.preco - b.preco);

}

const produtosOrdenados = ordenarPorPreco (produtos);

renderizarProdutos(ordenarPorPreco(produtos));

function filtrarPorNome(produtos, texto) {
  return produtos.filter(produto =>
    produto.nome.toLowerCase().includes(texto.toLowerCase())
  );
}

const inputPesquisa = document.getElementById("pesquisa");

inputPesquisa.addEventListener("input", () => {
  const texto = inputPesquisa.value;
  const produtosFiltrados = filtrarPorNome(produtos, texto);
  renderizarProdutos(produtosFiltrados);
});







