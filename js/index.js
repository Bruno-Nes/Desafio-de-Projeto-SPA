const login = document.getElementById("cartao_login");
const cadastro = document.getElementById("cartao_cadastro")

document.getElementById("mudar_para_login").onclick = function() {
    cadastro.style.display = "none";
    login.style.display = "flex";
}

document.getElementById("mudar_para_cadastro").onclick = function() {
    cadastro.style.display = "flex";
    login.style.display = "none";
}