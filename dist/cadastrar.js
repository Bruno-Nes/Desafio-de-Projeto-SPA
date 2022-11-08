import { BancoUsuariosFactory } from "./model/cadastro.js";
import { carregarDashboard } from "./dashboard.js";
const userName = document.querySelector("#nome_cadastro");
const userMail = document.querySelector("#e-mail_cadastro");
const userPass = document.querySelector("#senha_cadastro");
const userValidPass = document.querySelector("#confirma_senha_cadastro");
const msgSucessoCad = document.querySelector('#alerta-cad-sucesso');
const msgErroCad = document.querySelector('#alerta-cad-error');
const cadastro = document.querySelector("#cartao_cadastro");
const dashboard = document.querySelector("#dashboard_usuario");
const btnRemoverUsuario = document.querySelector("#btn-remover-usuario");
let bancoUsuarios = new BancoUsuariosFactory().create();
export function cadastrarUsuario(user) {
    if (bancoUsuarios.verificarUsuario(user.emailUser)) {
        userMail.style.borderColor = "red";
        userName.style.border = "none";
        userValidPass.style.border = "none";
        msgErroCad.innerHTML = '<span>O email ja foi cadastrado!</span>';
        msgErroCad.style.display = "block";
        msgSucessoCad.innerHTML = "";
        msgSucessoCad.style.display = "none";
        return false;
    }
    else {
        bancoUsuarios.cadastroUsuario(user);
        msgErroCad.style.display = "none";
        setTimeout(() => {
            userName.value = "";
            userName.style.border = "none";
            userMail.value = "";
            userMail.style.border = "none";
            userPass.value = "";
            userPass.style.border = "none";
            userValidPass.value = "";
            userValidPass.style.border = "none";
            msgSucessoCad.style.display = "none";
            cadastro.style.display = "none";
            document.querySelector(".div-esquerda").style.display = "none";
            dashboard.style.display = "flex";
            dashboard.innerHTML = carregarDashboard(user, bancoUsuarios);
            dashboard.style.animation = "fromTop .6s 0.1s backwards";
            document.querySelector('#sair_dashboard').onclick = function () {
                cadastro.style.animation = "fromTop .6s 0.1s backwards";
                cadastro.style.display = "flex";
                document.querySelector(".div-esquerda").style.display = "flex";
                dashboard.style.display = "none";
            };
        }, 1000);
        return true;
    }
}
