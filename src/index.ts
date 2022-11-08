import { mostrarAlerta } from "./views/alerta.js";
import { cadastrarUsuario } from "./service/CadastrarService.js";
import { User,  IBancoUsuarios, BancoUsuariosFactory} from "./model/cadastro.js";
import { logarUsuario } from "./service/LogarService.js";
import { verificarSenha } from "./views/verificapass.js";

//Expressão regular para validadr o e-mail
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

export const divLateral = document.querySelector<HTMLElement>(".div-esquerda");

//Cartao do login
const login = document.querySelector<HTMLDivElement>("#cartao_login");

//Inputs de login 
const loginEmail = document.querySelector<HTMLInputElement>("#e-mail_login");
const loginPass = document.querySelector<HTMLInputElement>("#senha_login");

//Cartão do cadastro
const cadastro = document.querySelector<HTMLDivElement>("#cartao_cadastro");

//Input do nome do usuário e label 
const userName = document.querySelector<HTMLInputElement>("#nome_cadastro");
const userLabel = document.getElementById("user_label");
const spanName = document.getElementById("status-nome");

//Input do e-mail do usuário e label
const userMail = document.querySelector<HTMLInputElement>("#e-mail_cadastro");
const emailLabel = document.getElementById("label_Email");
const spanMail = document.getElementById("status-email"); 
//mensagens de erro e sucesso ao cadastrar o usuário
const msgSucessoCad = document.querySelector<HTMLElement>('#alerta-cad-sucesso');
const msgErroCad = document.querySelector<HTMLElement>('#alerta-cad-error')
const msgErroLog = document.querySelector<HTMLElement>('#alerta-log-erro');
const msgSucessoLog = document.querySelector<HTMLElement>('#alerta-log-sucesso');
const spanMailLog = document.querySelector<HTMLElement>('#status-log-email')
const spanPassLog = document.querySelector<HTMLElement>('#status-log-senha')
// Ícone que de mostrar senha
const btnPassView = document.querySelector(".fa-eye");

// Ícone que de mostrar senha(cadastro)
const btnPassViewCad = document.querySelector("#verSenha");

// Ícone que de mostrar senha(cadastro confirmar senha)
const btnPassViewCadConf = document.querySelector("#verConfirmarSenha");

//Input da senha do usuário
export const userPass = document.querySelector<HTMLInputElement>("#senha_cadastro");
export const spanPass = document.querySelector("#status-pass");

// criar as variaveis para senha(input) e label da senha
const userValidPass = document.querySelector<HTMLInputElement>("#confirma_senha_cadastro");
const userValidPassLabel = document.getElementById("confirma_senha_cadastro_label");
const spanUserValidPass = document.getElementById("status-confirmar-senha"); 

// Caixa de validação da senha
const square = document.querySelector(".square")
const message = document.querySelector<HTMLElement>("#message");

const esqueceuSenha = document.getElementById("esqueceuSenha") as HTMLDivElement | null ;
const esqueceuSenhaPage = document.querySelector<HTMLElement>(".esqueceu-senha")

//Configuração da dashboard
const dashboard = document.querySelector<HTMLElement>("#dashboard_usuario")
const btnRemoverUsuario = document.querySelector<HTMLButtonElement>("#btn-remover-usuario")

export let bancoUsuarios : IBancoUsuarios = new BancoUsuariosFactory().create();

//Configuração do botão para ver senha
btnPassView?.addEventListener('click', () => {
    let inputSenha = document.querySelector('.input-senha');

    if (inputSenha?.getAttribute('type') ==  'password') {
        inputSenha.setAttribute('type', 'text')
        btnPassView?.classList.remove("fa-eye")
        btnPassView?.classList.add("fa-eye-slash")
    } else {
        inputSenha?.setAttribute('type', 'password')
        btnPassView?.classList.add("fa-eye")
        btnPassView?.classList.remove("fa-eye-slash")
    }
})

btnPassViewCad?.addEventListener('click', () => {

    if (userPass?.getAttribute('type') ==  'password') {
        userPass?.setAttribute('type', 'text')
        btnPassViewCad?.classList.remove("fa-eye")
        btnPassViewCad?.classList.add("fa-eye-slash")
    } else {
        userPass?.setAttribute('type', 'password')
        btnPassViewCad?.classList.add("fa-eye")
        btnPassViewCad?.classList.remove("fa-eye-slash")
    }
})

btnPassViewCadConf?.addEventListener('click', () => {
    let inputSenha = document.querySelector('#confirma_senha_cadastro');

    if (inputSenha?.getAttribute('type') ==  'password') {
        inputSenha?.setAttribute('type', 'text')
        btnPassViewCadConf?.classList.remove("fa-eye")
        btnPassViewCadConf?.classList.add("fa-eye-slash")
    } else {
        inputSenha?.setAttribute('type', 'password')
        btnPassViewCadConf?.classList.add("fa-eye")
        btnPassViewCadConf?.classList.remove("fa-eye-slash")
    }
})

userName?.addEventListener('keyup', () => {
    let userNameValue = userName?.value
    if (userNameValue != undefined && userName && spanName ) {
        if( userName !== undefined && userNameValue.length <= 4 ) {
            userName.style.border = "2px solid red";
            spanName.innerHTML = "<strong>Insira no mínimo 5 caracteres!</strong>";
            spanName.querySelector("strong")!.style.color = "red";
        }else {
            userName.style.border = "2px solid green"
            spanName.innerHTML = ""
        }
    }
})

userMail!.addEventListener('keyup', () => {
    if (!userMail!.value.match(regexEmail)) {
        userMail!.style.border = "2px solid red";
        spanMail!.innerHTML = "<strong>Parece que você está esquecendo de algo!</strong>"
        spanMail!.querySelector("strong")!.style.color = "red";
    } else {
        userMail!.style.border = "2px solid green";
        spanMail!.innerHTML = ""
    }
})

userPass!.onfocus = function() {
    message!.style.display = "flex";
    message!.style.flexDirection = "column" 
}

userPass!.onblur = function() {
    message!.style.display = "none";
}

userPass!.onkeyup = function () {
    verificarSenha(userPass!);
}

if(userValidPass != null) {
userValidPass!.addEventListener('keyup', () => {
    if (!(userValidPass.value == userPass!.value)) {
        userValidPass.style.border = "2px solid red";
        spanUserValidPass!.innerHTML = "<strong>As senhas não estão iguais</strong>"
        spanUserValidPass!.querySelector("strong")!.style.color = "red";
    } else if (userPass!.value == "") {
        userValidPass.style.border = "2px solid red";
        spanUserValidPass!.innerHTML = ""
    } 
    else {
        userValidPass.style.border = "2px solid green";
        spanUserValidPass!.innerHTML = ""
    }
})
}

document.getElementById("mudar_para_login")!.onclick = function() {
    if (login != null && cadastro != null) {
        login.style.animation = "fromTop .6s 0.1s backwards"
        login.style.display = "flex";
        cadastro.style.display = "none";
    }
}

document.getElementById("mudar_para_cadastro")!.onclick = function() {
    if (cadastro != null && login != null) {
    cadastro.style.animation = "fromTop .6s 0.1s backwards"
    cadastro.style.display = "flex"
    login.style.display = "none";
    }
}
 
// Campo cadastro
document.querySelector<HTMLButtonElement>("#cadastrar")!.onclick = function(e) {
    e.preventDefault();
    if(!userName!.value || userName!.value == undefined) {
        spanName!.innerHTML = "<strong>O campo de usuário deve ser preenchido</strong>"
        spanName!.querySelector("strong")!.style.color = "red" 
        spanName!.style.color = "red"      
        mostrarAlerta("O campo de usuário deve ser preenchido")
        userName!.style.borderColor = "red"
        return false;
    }
    if (!userMail!.value) { 
        spanMail!.innerHTML = "<strong>O campo e-mail deve ser preenchido!</strong>"
        spanMail!.querySelector("strong")!.style.color = "red";
        mostrarAlerta("O campo e-mail deve ser preenchido!")
        userMail!.style.borderColor = "red"
        return false;
    } 
    if (!userMail!.value.match(regexEmail)) { 
        spanMail!.innerHTML = "<strong>E-mail inválido</strong>"
        spanMail!.style.color = "red"
        mostrarAlerta("E-mail inválido")
        userMail!.style.borderColor = "red"
        return false
    } 
    if(!userPass!.value) {
        spanPass!.innerHTML = "<strong>O campo senha deve ser preenchido</strong>"
        mostrarAlerta("O campo senha deve ser preenchido") 
        userPass!.style.borderColor = "red"
        return false;
    }
    if(!userValidPass!.value) {
        spanUserValidPass!.innerHTML = "<strong>O campo confirmar senha deve ser preenchido</strong>"
        spanUserValidPass!.querySelector("strong")!.style.color = "red";
        mostrarAlerta("O campo confirmar senha deve ser preenchido")
        userValidPass!.style.borderColor = "red"
        return false;
    }
    if (userValidPass!.value != userPass!.value) {
        spanUserValidPass!.innerHTML = "<strong>As senhas não estão iguais</strong>"
        spanUserValidPass!.querySelector("strong")!.style.color = "red";
        userValidPass!.style.borderColor  = "red"
        return false;
    }    

    let dadosUsuario = { 
        nameUser : userName!.value,
        emailUser : userMail!.value,
        passUser : userPass!.value
    } as User;

    cadastrarUsuario(dadosUsuario)

}

// Campo cadastro finalizada
//Campo login

esqueceuSenha!.onclick = function() {
    if (esqueceuSenhaPage && cadastro && login) {
    esqueceuSenhaPage.style.display = "flex";
    esqueceuSenhaPage.style.animation = "fromTop .6s 0.1s backwards"
    cadastro.style.display = "none";
    login.style.display = "none";
    }
    document.querySelector<HTMLDivElement>(".div-esquerda")!.style.display = "none";
}

document.getElementById("sair_esqueceu_senha")!.onclick =  function() {
    login!.style.display = "flex"
    document.querySelector<HTMLElement>(".esqueceu-senha")!.style.display = "none";
    document.querySelector<HTMLElement>(".div-esquerda")!.style.display = "flex";
}

document.getElementById("login")!.onclick = function(e) {
    e.preventDefault();
    if (!loginEmail?.value) {
        mostrarAlerta("O campo e-mail deve ser preenchido!")
        loginEmail!.style.borderColor = "red"
        spanMailLog!.innerHTML = "<strong>O campo e-mail deve ser preenchido!</strong>"
        spanMailLog!.querySelector("strong")!.style.color = "red";
        return false;
    } 
    if(!loginPass?.value) {
        mostrarAlerta("O campo senha deve ser preenchido")
        loginPass!.style.borderColor = "red"
        spanPassLog!.innerHTML = "<strong>O campo senha deve ser preenchido</strong>"
        spanPassLog!.querySelector("strong")!.style.color = "red";
        return false;
    }

    logarUsuario(bancoUsuarios);
}
