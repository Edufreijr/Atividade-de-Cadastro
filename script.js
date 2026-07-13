const formulario = document.getElementById("formCadastro");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const cadastro = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        dataNascimento: document.getElementById("data").value,
        interesse: document.getElementById("interesse").value,
        mensagem: document.getElementById("mensagem").value
    };

    console.log(cadastro);
});
