
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

