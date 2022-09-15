const login = document.getElementById("cartao_login");
const cadastro = document.getElementById("cartao_cadastro");
let bancoDeUsuarios = [];

// Código para mostrar senha



//Fim do código de mostrar senha

// página atual: Cadastro
// página seguinte: Login
/* Ao clicar no "Faça o login", o campo de cadastro terá seu display invisível(none), sendo assim,
   o display do campo de login terá seu display visível(flex) */
document.getElementById("mudar_para_login").onclick = function() {
    cadastro.style.display = "none";
    login.style.display = "flex";
}

// página atual: Login
// página seguinte: Cadastro
/* Ao clicar em "Cadastre-se", o campo de login terá seu display invisível(none), sendo assim,
   o display do campo de cadastro terá seu display visível(flex) */
document.getElementById("mudar_para_cadastro").onclick = function() {
    cadastro.style.display = "flex";
    login.style.display = "none";
}

// Campo cadastro
document.getElementById("cadastrar").onclick = function(e) {
    e.preventDefault();

    // Verifica se o campo de e-mail foi preenchido
    if (!document.getElementById("e-mail_cadastro").value) {
        alert("O campo e-mail deve ser preenchido!")
        return false;
    } 
    // Verifica se o campo de senha foi preenchido
    if(!document.getElementById("senha_cadastro").value) {
        alert("O campo senha deve ser preenchido")
        return false;
    }
    //Adiciona o e-mail e senha cadastrado em um array, com separação do "^|^" para ser usado futuramente na validação
    bancoDeUsuarios.push(document.querySelector("#e-mail_cadastro").value +"^|^"+ 
    document.querySelector("#senha_cadastro").value);

}

// Campo cadastro finalizada
//Campo login
document.getElementById("login").onclick = function(e) {
    e.preventDefault();

    // Verifica se o campo de e-mail foi preenchido
    if (!document.getElementById("e-mail_login").value) {
        alert("O campo e-mail deve ser preenchido!")
        return false;
    } 
    // Verifica se o campo de senha foi preenchido
    if(!document.getElementById("senha_login").value) {
        alert("O campo senha deve ser preenchido")
        return false;
    }

}