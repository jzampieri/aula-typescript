// EXERCICIO 1

let valores: number[] = [50, 40, 10];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

// EXERCICIO 2

function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao mundo TypeScript.`;
}
console.log(mensagemPersonalizada("Julio"));

// EXERCICIO 3

class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Hyundai", "Creta", 2022);
console.log(carro1.detalhes());