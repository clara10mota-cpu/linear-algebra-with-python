
/* Declare as variáveis necessárias para representar um produto */

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

const produto = `${nome} - ${preçoFinal} & (stock: ${stock})`;

console.log("Descrição do produto:" + produto);

/* Crie uma função chamada classificarStock que recebe o número de unidades em stock e devolve: */

function classificarStock (stock) {
    switch (true) {
        case stock === 0:
            return "Esggotado"
            case stock >= 1 && stock <= 5:
                return "stock critico"
                case stock >= 6 && stock <= 20:
                    return "stock normal"
                    case stock > 20:
                        return " stock elevado "


    }
}

/* Teste classificarStock com, pelo menos, 4 valores diferentes e imprima os resultados na consola. */

console.log("\nTestes classificarStock:");
const testes = [0, 3, 14, 25];


