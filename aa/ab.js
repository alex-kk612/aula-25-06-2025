function Aluno(nome, matricula){
    this.nome = nome;
    this.matricula = matricula;
}
Aluno.prototype.mostrarDados = function(){
    console.log(`Nome do aluno: ${this.nome}, matrícula: ${this.matricula}`);
}
const marcelo = new Aluno("Macelo", 1772);
marcelo.mostrarDados();

const nico = new Aluno("Nico", 1928);
nico.mostrarDados();