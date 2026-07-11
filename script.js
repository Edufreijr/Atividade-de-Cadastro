const formulario = document.getElementById("formCadastro");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const dataNascimento = document.getElementById("data").value;
    const interesse = document.getElementById("interesse").value;
    const mensagem = document.getElementById("mensagem").value;

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
   console.log("Data de nascimento:", data);
    console.log("Área de interesse:", interesse);
    console.log("Mensagem:", mensagem);
});
