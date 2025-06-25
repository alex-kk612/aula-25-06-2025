class Produto {
    constructor (nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
    exibirProduto(){
        console.log(`O produto ${this.nome} custa ${this.preco} reais`);
    }
}
const p1 = new Produto("Garrafa", 12);
p1.exibirProduto();