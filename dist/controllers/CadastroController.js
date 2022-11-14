import { cadastrarUsuario } from "../service/CadastrarService.js";
import { mostrarAlerta } from "../views/alerta.js";
export class CadastroController {
    constructor() {
        this.regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        this.inputNome = document.querySelector("#nome_cadastro");
        this.inputEmail = document.querySelector("#e-mail_cadastro");
        this.inputSenha = document.querySelector("#senha_cadastro");
        this.inputValidaSenha = document.querySelector("#confirma_senha_cadastro");
    }
    getInputNome() {
        return this.inputNome;
    }
    getInputEmail() {
        return this.inputEmail;
    }
    getInputPass() {
        return this.inputSenha;
    }
    getInputValidaSenha() {
        return this.inputValidaSenha;
    }
    validaCampos(spanName, spanMail, spanPass, spanUserValidPass) {
        if (!this.inputNome.value || this.inputNome.value == undefined) {
            spanName.innerHTML = "<strong>O campo de usuário deve ser preenchido</strong>";
            spanName.querySelector("strong").style.color = "red";
            spanName.style.color = "red";
            mostrarAlerta("O campo de usuário deve ser preenchido");
            this.inputNome.style.borderColor = "red";
            return false;
        }
        if (!this.inputEmail.value) {
            spanMail.innerHTML = "<strong>O campo e-mail deve ser preenchido!</strong>";
            spanMail.querySelector("strong").style.color = "red";
            mostrarAlerta("O campo e-mail deve ser preenchido!");
            this.inputEmail.style.borderColor = "red";
            return false;
        }
        if (!this.inputEmail.value.match(this.regexEmail)) {
            spanMail.innerHTML = "<strong>E-mail inválido</strong>";
            spanMail.style.color = "red";
            mostrarAlerta("E-mail inválido");
            this.inputEmail.style.borderColor = "red";
            return false;
        }
        if (!this.inputSenha.value) {
            spanPass.innerHTML = "<strong>O campo senha deve ser preenchido</strong>";
            mostrarAlerta("O campo senha deve ser preenchido");
            this.inputSenha.style.borderColor = "red";
            return false;
        }
        if (!this.inputValidaSenha.value) {
            spanUserValidPass.innerHTML = "<strong>O campo confirmar senha deve ser preenchido</strong>";
            spanUserValidPass.querySelector("strong").style.color = "red";
            mostrarAlerta("O campo confirmar senha deve ser preenchido");
            this.inputValidaSenha.style.borderColor = "red";
            return false;
        }
        if (this.inputValidaSenha.value != this.inputSenha.value) {
            spanUserValidPass.innerHTML = "<strong>As senhas não estão iguais</strong>";
            spanUserValidPass.querySelector("strong").style.color = "red";
            this.inputValidaSenha.style.borderColor = "red";
            return false;
        }
        return true;
    }
    entrarUsuario() {
        cadastrarUsuario(this.criarUsuario());
    }
    limparCampos() {
        this.inputNome.value = "";
        this.inputNome.style.border = "none";
        this.inputEmail.value = "";
        this.inputEmail.style.border = "none";
        this.inputSenha.value = "";
        this.inputSenha.style.border = "none";
        this.inputValidaSenha.value = "";
        this.inputValidaSenha.style.border = "none";
    }
    criarUsuario() {
        let dadosUsuario = {
            nameUser: this.inputNome.value,
            emailUser: this.inputEmail.value,
            passUser: this.inputSenha.value
        };
        return dadosUsuario;
    }
}
