function inserirNome(){
   let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   elemento.textContent = nomeUsuario;
}
inserirNome();

function mudarCor(){
   const elemento=document.getElementById("nome-usuario");
   elemento.style.color="red";
}

mudarCor();

let linguagens = ["Javascript", "Python", "C"];
//índice             0              1       2

console.log(linguagens[0]);
console.log(linguagens[1]);
console.log(linguagens[2]);

//mostrar no console no navegador

//const item = document.querySelector("#lista");
//item.textContent = linguagens[1];

let alunos=["Ana", "Pedro", "Clara", "Maria", "João"];
const item2 = document.querySelector("#lista");
item2.textContent = alunos[0];

//objetos

let aluno1 = {
  nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ºsérie",
  materiasFavoritas: ["Geografia","Programação","Arte"]
}
console.log(aluno1.nome) // “Gabriel”
console.log(aluno1.idade) // 13
console.log(aluno1.materiaFavorita)
// "Geografia","Programação","Arte"
console.log(aluno1.materiaFavorita[1])
