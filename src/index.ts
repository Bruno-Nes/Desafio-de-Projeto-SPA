import { verificarSenha } from "./views/verificapass.js";
import { CadastroController } from "./controllers/CadastroController.js";
import { LoginController } from "./controllers/LoginController.js";
export const divLateral = document.querySelector<HTMLElement>(".div-esquerda");
//Cartao do login
const login = document.querySelector<HTMLDivElement>("#cartao_login");
//Cartão do cadastro
const cadastro = document.querySelector<HTMLDivElement>("#cartao_cadastro");
//Input do nome do usuário e label const userLabel = document.getElementById("user_label");
const spanName = document.getElementById("status-nome");
//Input do e-mail do usuário e label
const spanMail = document.getElementById("status-email"); 
//mensagens de erro e sucesso ao cadastrar o usuário
const msgSucessoCad = document.querySelector<HTMLElement>('#alerta-cad-sucesso');
const msgErroCad = document.querySelector<HTMLElement>('#alerta-cad-error');
const msgErroLog = document.querySelector<HTMLElement>('#alerta-log-erro');
const msgSucessoLog = document.querySelector<HTMLElement>('#alerta-log-sucesso');
const spanMailLog = document.querySelector<HTMLElement>('#status-log-email');
const spanPassLog = document.querySelector<HTMLElement>('#status-log-senha');
// Ícone que de mostrar senha
const btnPassView = document.querySelector(".fa-eye");
// Ícone que de mostrar senha(cadastro)
const btnPassViewCad = document.querySelector("#verSenha");
// Ícone que de mostrar senha(cadastro confirmar senha)
const btnPassViewCadConf = document.querySelector("#verConfirmarSenha");
//Input da senha do usuário
export const spanPass = document.querySelector<HTMLElement>("#status-pass");
// criar as variaveis para senha(input) e label da senha
const userValidPassLabel = document.getElementById("confirma_senha_cadastro_label");
const spanUserValidPass = document.getElementById("status-confirmar-senha"); 
// Caixa de validação da senha
const message = document.querySelector<HTMLElement>("#message");

const esqueceuSenha = document.getElementById("esqueceuSenha") as HTMLDivElement | null ;
const esqueceuSenhaPage = document.querySelector<HTMLElement>(".esqueceu-senha")

export const cadastroController = new CadastroController(); 
const loginController = new LoginController(); 
//Inputs de Cadastro
const userName = cadastroController.getInputNome();
const userMail = cadastroController.getInputEmail();
const userPass = cadastroController.getInputPass(); 
const userValidPass = cadastroController.getInputValidaSenha();
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

// essas validações de campos são específicas do formulário, por isso devem ficar aqui
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
    if (!userMail!.value.match(cadastroController.regexEmail)) {
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
    verificarSenha(cadastroController.getInputPass()!, spanPass!);
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
    if(cadastroController.validaCampos(spanName!, spanMail!, spanPass!, spanUserValidPass!)){
        cadastroController.entrarUsuario();
        cadastroController.limparCampos();
        msgErroCad!.style.display = "none";
        return true;
    }else {
        msgSucessoCad!.style.display = "none";
        msgErroCad!.style.display = "flex";
        msgErroCad!.innerHTML = `Não foi possível fazer o cadastro`;
        return false;
    }
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
    if(loginController.validaCampos(spanMailLog!, spanPassLog!)) {
        loginController.entrarUsuario();
        setTimeout(()=>{
            loginController.limparCampos();
            spanMailLog!.innerHTML = "";
            spanPassLog!.innerHTML = "";
        }, 2000)
        return true;
    }
        return false;    
}
