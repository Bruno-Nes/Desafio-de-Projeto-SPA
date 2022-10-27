import { User,  IBancoUsuarios, BancoUsuariosFactory} from "./cadastro.js";
//Expressão regular para validadr o e-mail
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//Alerta
const alertaPersonalizado = document.querySelector<HTMLDivElement>('#alertId');
const msgAlert = document.querySelector('#msg');
const closeIcon = document.querySelector('.close-btn'); 

//Cartao do login
const login = document.getElementById("cartao_login") as HTMLDivElement || null;

//Inputs de login 
const loginEmail = document.querySelector<HTMLInputElement>("#e-mail_login");
const loginPass = document.querySelector<HTMLInputElement>("#senha_login");

//Cartão do cadastro
const cadastro = document.getElementById("cartao_cadastro");

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
const userPass = document.querySelector<HTMLInputElement>("#senha_cadastro");
const spanPass = document.querySelector("#status-pass")

// criar as variaveis para senha(input) e label da senha
const userValidPass = document.querySelector<HTMLInputElement>("#confirma_senha_cadastro");
const userValidPassLabel = document.getElementById("confirma_senha_cadastro_label");
const spanUserValidPass = document.getElementById("status-confirmar-senha"); 

// Caixa de validação da senha
const square = document.querySelector(".square")
const message = document.querySelector<HTMLElement>("#message");

const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const characters = document.getElementById("charters");

const esqueceuSenha = document.getElementById("esqueceuSenha") as HTMLDivElement | null ;
const esqueceuSenhaPage = document.querySelector<HTMLElement>(".esqueceu-senha")

//Configuração da dashboard
const dashboard = document.querySelector<HTMLElement>("#dashboard_usuario")
const btnRemoverUsuario = document.querySelector<HTMLButtonElement>("#btn-remover-usuario")

let bancoUsuarios : IBancoUsuarios = new BancoUsuariosFactory().create();
// let bancoDeUsuarios: IBancoUsers 

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

userPass!.onkeyup = function() {
    let count = 0;
    // Onde peguei o código
    //https://www.w3schools.com/howto/howto_js_password_validation.asp
    if (letter != null  && userPass != null) {
    let lowerCaseLetters = /[a-z]/g;
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    document.querySelector<HTMLElement>("#circleLetter")!.style.fill = "red"
        if(userPass.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
            document.querySelector<HTMLElement>("#circleLetter")!.style.fill = "#04AA6D"
            count++
        }
    }

    let upperCaseLetters = /[A-Z]/g;
    capital!.classList.remove("valid");
    capital!.classList.add("invalid");
    document.querySelector<HTMLElement>("#circleCapital")!.style.fill = "red"
    if(userPass!.value.match(upperCaseLetters)) {
        capital!.classList.remove("invalid");
        capital!.classList.add("valid");
        document.querySelector<HTMLElement>("#circleCapital")!.style.fill = "#04AA6D"
        count++
    } 

    let numbers = /[0-9]/g;
    number!.classList.remove("valid");
    number!.classList.add("invalid");
    document.querySelector<HTMLElement>("#circleNumber")!.style.fill = "red"
    if(userPass!.value.match(numbers)) {
        number!.classList.remove("invalid");
        number!.classList.add("valid");
        document.querySelector<HTMLElement>("#circleNumber")!.style.fill = "#04AA6D"
        count++
    }
    length!.classList.remove("valid");
    length!.classList.add("invalid");
    document.querySelector<HTMLElement>("#circleLength")!.style.fill = "red" 
    if(userPass!.value.length >= 8) {
        length!.classList.remove("invalid");
        length!.classList.add("valid");
        document.querySelector<HTMLElement>("#circleLength")!.style.fill = "#04AA6D"
        count++
    } 
    characters!.classList.remove("valid")
    characters!.classList.add("invalid")
    document.querySelector<HTMLElement>("#circleCharters")!.style.fill = "red"
    if(userPass!.value.match(/\w[!\@\$\#]/)) {
        characters!.classList.remove("invalid")
        characters!.classList.add("valid")
        document.querySelector<HTMLElement>("#circleCharters")!.style.fill = "#04AA6D"
        count++
    } 
    
    if (count >= 5) {
        userPass!.style.borderColor = "green"
        spanPass!.innerHTML = ""
    }else {
        userPass!.style.borderColor = "red"
        spanPass!.innerHTML = "<strong>O campo senha deve ser preenchido</strong>"
        spanPass!.querySelector("strong")!.style.color = "red";

    }

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

//Area comentada temporariamente para finalizar os requisitos de senha 
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

    // Verifica se o campo de e-mail foi preenchido
    if (!userMail!.value) { 
        spanMail!.innerHTML = "<strong>O campo e-mail deve ser preenchido!</strong>"
        spanMail!.querySelector("strong")!.style.color = "red";
        mostrarAlerta("O campo e-mail deve ser preenchido!")
        userMail!.style.borderColor = "red"
        return false;
    } 

    //validação de e-mail
    if (!userMail!.value.match(regexEmail)) { 
        spanMail!.innerHTML = "<strong>E-mail inválido</strong>"
        spanMail!.style.color = "red"
        mostrarAlerta("E-mail inválido")
        userMail!.style.borderColor = "red"
        return false
    } 

    // Verifica se o campo de senha foi preenchido
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

    if(bancoUsuarios.verificarUsuario(dadosUsuario.emailUser)) {
        userMail!.style.borderColor = "red"
        userName!.style.border = "none"
        userValidPass!.style.border = "none"
        msgErroCad!.innerHTML = '<span>O email ja foi cadastrado!</span>'
        msgErroCad!.style.display = "block"    
        msgSucessoCad!.innerHTML = ""
        msgSucessoCad!.style.display = "none"
        return false
    } else {
            bancoUsuarios.cadastroUsuario(dadosUsuario)
            msgSucessoCad!.innerHTML = '<span>Usuario cadastrado com sucesso</span>'
            msgSucessoCad!.style.display= "block"
            msgErroCad!.style.display = "none" 
            setTimeout(() => {   
                userName!.value = ""
                userName!.style.border = "none"
                userMail!.value = ""
                userMail!.style.border = "none"
                userPass!.value = ""
                userPass!.style.border = "none"
                userValidPass!.value = ""
                userValidPass!.style.border = "none"                    
            }, 1000)

            setTimeout(() => {
                //depois de fazer o cadastro o usuáro será direcionado para a dashboard, com as informações de
                //cadastro
                msgSucessoCad!.style.display = "none"
                cadastro!.style.display = "none";
                login.style.display = "none";
                document.querySelector<HTMLElement>(".div-esquerda")!.style.display = "none";
                dashboard!.style.display = "flex"
                dashboard!.innerHTML = `
                <div>
                <h2 class="msg-nome-dash">Olá, ${dadosUsuario!['nameUser']}</h2>
                <span class="msg-email-dash">${dadosUsuario!['emailUser']}</span>
                <span>Voltar para o <a href="#" id="sair_dashboard">Cadastro</a></span>   
                <button id="btn-remover-usuario" class="btn-submit btn-remover-usuario">Remover Usuário</button>
                </div>
                `
                btnRemoverUsuario?.classList.add("btn-submit")
                btnRemoverUsuario?.classList.add("btn-remover-usuario")
                dashboard!.style.animation = "fromTop .6s 0.1s backwards"
                document.querySelector<HTMLElement>('#sair_dashboard')!.onclick = function() {
                    cadastro!.style.animation = "fromTop .6s 0.1s backwards"
                    cadastro!.style.display = "flex"
                    document.querySelector<HTMLElement>(".div-esquerda")!.style.display = "flex";
                    login.style.display = "none";
                    dashboard!.style.display = "none";
                }
                
            }, 3000)   

            return true
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

    // login do usuario

    let dadosUsuario = bancoUsuarios.recuperarUsuario(loginEmail!.value)

    if (dadosUsuario && dadosUsuario.passUser == loginPass.value) {
        alertaDeSucesso("Usuário encontrado")
        msgSucessoLog!.style.display = "block"
        msgSucessoLog!.innerHTML = "<strong>Usuário encontrado</strong>"
        msgErroLog!.style.display = "none"
        msgErroLog!.innerHTML = ""
    }else {
        alertaDeErro("E-mail e/ou senha incorretos!")
        loginEmail.style.borderColor = "red"
        loginPass.style.borderColor = "red"
        msgSucessoLog!.style.display = "none"
        msgSucessoLog!.innerHTML = ""
        msgErroLog!.style.display = "block"
        msgErroLog!.innerHTML = "<strong>E-mail e/ou senha incorretos!</strong>"
        return false;
    }

    setTimeout(()=>{
        loginEmail.value = ""
        loginPass.value = ""
        loginEmail.style.border = "none"
        loginPass.style.border = "none"
        msgSucessoLog!.style.display = "none"
        msgErroLog!.style.display = "none"
    },450)

    setTimeout(() => {
        cadastro!.style.display = "none";
            login.style.display = "none";
            document.querySelector<HTMLElement>(".div-esquerda")!.style.display = "none";
            dashboard!.style.display = "flex"
            dashboard!.innerHTML = `
            <div>
            <h2 class="msg-nome-dash">Bem vindo de volta, ${dadosUsuario['nameUser']}</h2>
            <span class="msg-email-dash">${dadosUsuario['emailUser']}</span>
            <span>Voltar para o <a href="#" id="sair_dashboard">Login</a></span>
        </div>
            `
            dashboard!.style.animation = "fromTop .6s 0.1s backwards"
            document.querySelector<HTMLElement>('#sair_dashboard')!.onclick = function() {
                cadastro!.style.animation = "fromTop .6s 0.1s backwards"
                cadastro!.style.display = "none"
                document.querySelector<HTMLElement>(".div-esquerda")!.style.display = "flex";
                login!.style.display = "flex";
                dashboard!.style.display = "none";
            }
    }, 1000)
}



// Funções 
function mostrarAlerta(msg:string): void {
    msgAlert!.innerHTML = msg
    if(alertaPersonalizado != null ) {
        alertaPersonalizado.classList.remove('hide')
        alertaPersonalizado.classList.remove('successAlert')
        alertaPersonalizado.classList.remove('warningAlert')
        alertaPersonalizado.classList.add('show')
        alertaPersonalizado.classList.add('showAlert')
    
        setTimeout( () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        }, 3000)
        closeIcon!.addEventListener('click', () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        })
    }
}

function alertaDeErro(msg:string): void {
    msgAlert!.innerHTML = msg
    if(alertaPersonalizado != null) {
        alertaPersonalizado.classList.remove('hide')
        alertaPersonalizado.classList.remove('successAlert')
        alertaPersonalizado.classList.add('warningAlert')
        alertaPersonalizado.classList.add('show')
        alertaPersonalizado.classList.add('showAlert')
        setTimeout( () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        }, 3000)
        closeIcon!.addEventListener('click', () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        }) 
    }
}

function alertaDeSucesso(msg:string): void {
    msgAlert!.innerHTML = msg
    if(alertaPersonalizado != null) {
        alertaPersonalizado.classList.remove('hide')
        alertaPersonalizado.classList.remove('warningAlert')
        alertaPersonalizado.classList.add('successAlert')
        alertaPersonalizado.classList.add('show')
        alertaPersonalizado.classList.add('showAlert')
        setTimeout( () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        }, 3000)
        closeIcon!.addEventListener('click', () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        })
    }
}

