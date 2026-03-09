
const produtos = [
  {
    nome: "Laptop",
    preco: 1200,
    stock: 10,
    categoria: "Eletrónica"
  },
  {
    nome: "Telemóvel",
    preco: 800,
    stock: 15,
    categoria: "Eletrónica"
  },
  {
    nome: "T-shirt",
    preco: 25,
    stock: 50,
    categoria: "Roupa"
  },
  {
    nome: "Tênis",
    preco: 90,
    stock: 20,
    categoria: "Calçado"
  },
  {
    nome: "Mochila",
    preco: 45,
    stock: 30,
    categoria: "Acessórios"
  }
];


produtos.forEach(produtos =>{
    console.log(produtos.nome.toUpperCase());
})

/* imprimir o mais caro  */
function produtoMaisCaro(produtos){
    let maisCaro = produtos[0];
    for (let i = 1; i < produtos.length; i++) {
        if (produtos[i].preco > maisCaro.preco) {
            maisCaro = produtos[i];
        }
    }
    return maisCaro;
}

console.log("Produto mais caro :" + produtoMaisCaro(produtos).nome);

function produtoMaisBarato(produtos){
    let maisBarato = produtos[0];
    for ( let i=1 ; i< produtos.length; i++){
        if (produtos[i].preco < maisBarato)
            maisBarato = produtos[i];
    } 
    return maisBarato;
}

console.log("o produto mais barato é :" + produtoMaisBarato(produtos).nome);


let valorMedio = produtos.reduce((total, produtos) => total + produtos.preco,0) / produtos.length;

console.log("Valor medio dos preços:" + valorMedio);

