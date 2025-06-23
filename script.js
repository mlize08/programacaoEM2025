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