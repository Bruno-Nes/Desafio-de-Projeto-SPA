import { bancoUsuarios } from "../service/CadastrarService.js";
import { logarUsuario } from "../service/LogarService.js";
import { mostrarAlerta } from "../views/alerta.js";
export class LoginController {
    constructor() {
        this.inputEmail = document.querySelector("#e-mail_login");
        this.inputSenha = document.querySelector("#senha_login");
    }
    validaCampos(spanMail, spanPass, spanName, spanUserValidPass) {
        var _a, _b;
        if (!((_a = this.inputEmail) === null || _a === void 0 ? void 0 : _a.value)) {
            mostrarAlerta("O campo e-mail deve ser preenchido!");
            this.inputEmail.style.borderColor = "red";
            spanMail.innerHTML = "<strong>O campo e-mail deve ser preenchido!</strong>";
            spanMail.querySelector("strong").style.color = "red";
            return false;
        }
        if (!((_b = this.inputSenha) === null || _b === void 0 ? void 0 : _b.value)) {
            mostrarAlerta("O campo senha deve ser preenchido");
            this.inputSenha.style.borderColor = "red";
            spanPass.innerHTML = "<strong>O campo senha deve ser preenchido</strong>";
            spanPass.querySelector("strong").style.color = "red";
            return false;
        }
        return true;
    }
    entrarUsuario() {
        logarUsuario(this.recuperarUsuario(), bancoUsuarios, this.inputEmail, this.inputSenha);
    }
    limparCampos() {
        this.inputEmail.value = "";
        this.inputSenha.value = "";
        this.inputEmail.style.border = "none";
        this.inputSenha.style.border = "none";
    }
    recuperarUsuario() {
        let dadosUsuario = bancoUsuarios.recuperarUsuario(this.inputEmail.value);
        return dadosUsuario;
    }
}
