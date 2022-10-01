//Expressão regular para validadr o e-mail
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//Alerta
let alertaPersonalizado = document.querySelector('#alertId')
let msgAlert = document.querySelector('#msg');
let closeIcon = document.querySelector('.close-btn') 

//Cartao do login
let login = document.getElementById("cartao_login");

//Inputs de login 
let loginEmail = document.getElementById("e-mail_login")
let loginPass = document.getElementById("senha_login")

//Cartão do cadastro
let cadastro = document.getElementById("cartao_cadastro");

//Input do nome do usuário e label 
let userName = document.getElementById("nome_cadastro");
let userLabel = document.getElementById("user_label");

//Input do e-mail do usuário e label
let userMail = document.getElementById("e-mail_cadastro");
let emailLabel = document.getElementById("label_Email");

// Ícone que de mostrar senha
let btnPassView = document.querySelector(".fa-eye")

// Ícone que de mostrar senha(cadastro)
let btnPassViewCad = document.querySelector("#verSenha")

// Ícone que de mostrar senha(cadastro confirmar senha)
let btnPassViewCadConf = document.querySelector("#verConfirmarSenha")

//Input da senha do usuário
let userPass = document.getElementById("senha_cadastro")

// criar as variaveis para senha(input) e label da senha
let userValidPass = document.getElementById("confirma_senha_cadastro")
let userValidPassLabel = document.getElementById("confirma_senha_cadastro_label")

// Caixa de validação da senha
let message = document.getElementById("message")

let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let characters = document.getElementById("charters")

let esqueceuSenha = document.getElementById("esqueceuSenha")

let bancoDeUsuarios = []; //array onde terá todos os usuários cadastrados


//Configuração do botão para ver senha
btnPassView.addEventListener('click', () => {
    let inputSenha = document.querySelector('.input-senha');

    if (inputSenha.getAttribute('type') ==  'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})


btnPassViewCad.addEventListener('click', () => {

    if (userPass.getAttribute('type') ==  'password') {
        userPass.setAttribute('type', 'text')
    } else {
        userPass.setAttribute('type', 'password')
    }
})

btnPassViewCadConf.addEventListener('click', () => {
    let inputSenha = document.querySelector('#confirma_senha_cadastro');

    if (inputSenha.getAttribute('type') ==  'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

userName.addEventListener('keyup', () => {
    if(userName.value.length <= 4) {
        userName.style.border = "2px solid red";
        userLabel.innerHTML = "<strong>Insira no mínimo 5 caracteres!</strong>";
    }else {
        userName.style.border = "2px solid green"
        userLabel.innerHTML = "Digite seu nome"
    }
})


userMail.addEventListener('keyup', () => {
    if (!userMail.value.match(regexEmail)) {
        userMail.style.border = "2px solid red";
        emailLabel.innerHTML = "<strong>Parece que você está esquecendo de algo!</strong>"
    } else {
        userMail.style.border = "2px solid green";
        emailLabel.innerHTML = "Digite seu e-mail"
    }
})

userPass.onfocus = function() {
    message.style.display = "flex";
    message.style.flexDirection = "column" 
}

userPass.onblur = function() {
    message.style.display = "none";
}

userPass.onkeyup = function() {
    // Onde peguei o código
    //https://www.w3schools.com/howto/howto_js_password_validation.asp
    let lowerCaseLetters = /[a-z]/g;
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    document.getElementById("circleLetter").style.fill = "red"
    if(userPass.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
        document.getElementById("circleLetter").style.fill = "#04AA6D"
    }

    let upperCaseLetters = /[A-Z]/g;
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    document.getElementById("circleCapital").style.fill = "red"
    if(userPass.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
        document.getElementById("circleCapital").style.fill = "#04AA6D"
    } 

    let numbers = /[0-9]/g;
    number.classList.remove("valid");
    number.classList.add("invalid");
    document.getElementById("circleNumber").style.fill = "red"
    if(userPass.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
        document.getElementById("circleNumber").style.fill = "#04AA6D"
    }
    length.classList.remove("valid");
    length.classList.add("invalid");
    document.getElementById("circleLength").style.fill = "red" 
    if(userPass.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        document.getElementById("circleLength").style.fill = "#04AA6D"
    } 
    characters.classList.remove("valid")
    characters.classList.add("invalid")
    document.getElementById("circleCharters").style.fill = "red"
    if(userPass.value.match(/\w[!\@\$\#]/)) {
        characters.classList.remove("invalid")
        characters.classList.add("valid")
        document.getElementById("circleCharters").style.fill = "#04AA6D"
    } 

}

userValidPass.addEventListener('keyup', () => {
    if (!(userValidPass.value == userPass.value)) {
        userValidPass.style.border = "2px solid red";
        userValidPassLabel.innerHTML = "<strong>As senhas não estão iguais</strong>"
    } else if (userPass.value == "") {
        userValidPass.style.border = "2px solid red";
        userValidPassLabel.innerHTML = "Confirme sua senha"
    } 
    else {
        userValidPass.style.border = "2px solid green";
        userValidPassLabel.innerHTML = "Confirme sua senha"
    }
})


document.getElementById("mudar_para_login").onclick = function() {
    login.style.animation = "fromTop .6s 0.1s backwards"
    cadastro.style.display = "none";
    login.style.display = "flex";
}

document.getElementById("mudar_para_cadastro").onclick = function() {
    cadastro.style.animation = "fromTop .6s 0.1s backwards"
    cadastro.style.display = "flex"
    login.style.display = "none";
}


//Area comentada temporariamente para finalizar os requisitos de senha 
// Campo cadastro
document.getElementById("cadastrar").onclick = function(e) {
    e.preventDefault();

    if(!userName.value || userName.value == undefined) {
        mostrarAlerta("O campo de usuário deve ser preenchido")
        return false;
    }

    // Verifica se o campo de e-mail foi preenchido
    if (!userMail.value) { 
        mostrarAlerta("O campo e-mail deve ser preenchido!")
        return false;
    } 

    //validação de e-mail
    if (!userMail.value.match(regexEmail)) { 
        mostrarAlerta("E-mail inválido")
        return false
    } 

    // Verifica se o campo de senha foi preenchido
    if(!userPass.value) {
        mostrarAlerta("O campo senha deve ser preenchido") 
        return false;
    }

    if(!userValidPass.value) {
        mostrarAlerta("O campo confirmar senha deve ser preenchido")
        return false;
    }

    if (userValidPass.value != userPass.value) {
        return false;
    }

    let dadosUsuario = {nameUser : userName.value, 
        emailUser : userMail.value, 
        passUser : userPass.value}


    bancoDeUsuarios[userMail.value] = dadosUsuario  


    setTimeout(() => {   
        userName.value = ""
        userName.style.border = "none"
        userMail.value = ""
        userMail.style.border = "none"
        userPass.value = ""
        userPass.style.border = "none"
        userValidPass.value = ""
        userValidPass.style.border = "none"
        alertaDeSucesso("Usuário cadastrado!")
    }, 1000)

    return true
}

// Campo cadastro finalizada
//Campo login

esqueceuSenha.onclick = function() {
    document.querySelector(".esqueceu-senha").style.display = "flex";
    document.querySelector(".esqueceu-senha").style.animation = "fromTop .6s 0.1s backwards"
    cadastro.style.display = "none";
    login.style.display = "none";
    document.querySelector(".div-esquerda").style.display = "none";
}

document.getElementById("sair_esqueceu_senha").onclick =  function() {
    login.style.display = "flex"
    document.querySelector(".esqueceu-senha").style.display = "none";
    document.querySelector(".div-esquerda").style.display = "flex";
}

document.getElementById("login").onclick = function(e) {
    e.preventDefault();

    if (!document.getElementById("e-mail_login").value) {
        mostrarAlerta("O campo e-mail deve ser preenchido!")
        return false;
    } 
    if(!document.getElementById("senha_login").value) {
        mostrarAlerta("O campo senha deve ser preenchido")
        return false;
    }

    let dadosUsuario = bancoDeUsuarios[loginEmail.value]

    if (dadosUsuario != null && dadosUsuario.passUser == loginPass.value) {
        alertaDeSucesso("Usuário encontrado")
    }else {
        alertaDeErro("E-mail e/ou senha incorretos!")
    }

}


// Funções 
function mostrarAlerta(msg) {
    msgAlert.innerHTML = msg
        alertaPersonalizado.classList.remove('hide')
        alertaPersonalizado.classList.remove('successAlert')
        alertaPersonalizado.classList.remove('warningAlert')
        alertaPersonalizado.classList.add('show')
        alertaPersonalizado.classList.add('showAlert')
        setTimeout( () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        }, 3000)
        closeIcon.addEventListener('click', () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        })
}

function alertaDeErro(msg) {
    msgAlert.innerHTML = msg
        alertaPersonalizado.classList.remove('hide')
        alertaPersonalizado.classList.remove('successAlert')
        alertaPersonalizado.classList.add('warningAlert')
        alertaPersonalizado.classList.add('show')
        alertaPersonalizado.classList.add('showAlert')
        setTimeout( () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        }, 3000)
        closeIcon.addEventListener('click', () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        }) 
}

function alertaDeSucesso(msg) {
    msgAlert.innerHTML = msg
        alertaPersonalizado.classList.remove('hide')
        alertaPersonalizado.classList.remove('warningAlert')
        alertaPersonalizado.classList.add('successAlert')
        alertaPersonalizado.classList.add('show')
        alertaPersonalizado.classList.add('showAlert')
        setTimeout( () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        }, 3000)
        closeIcon.addEventListener('click', () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        })
}