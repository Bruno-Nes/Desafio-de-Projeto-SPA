import { User } from "../model/cadastro.js";
import { bancoUsuarios } from "../service/CadastrarService.js";
import { logarUsuario } from "../service/LogarService.js";
import { mostrarAlerta } from "../views/alerta.js";
import { IControleUsuario } from "./CadastroController.js";


export class LoginController implements IControleUsuario {
    private inputEmail:HTMLInputElement;
    private inputSenha:HTMLInputElement;

    constructor() {
        this.inputEmail = document.querySelector<HTMLInputElement>("#e-mail_login")!;
        this.inputSenha = document.querySelector<HTMLInputElement>("#senha_login")!;
    }

    validaCampos(spanMail: HTMLElement, spanPass: HTMLElement, spanName?: HTMLElement | undefined, spanUserValidPass?: HTMLElement | undefined): boolean {
        if (!this.inputEmail?.value) {
            mostrarAlerta("O campo e-mail deve ser preenchido!")
            this.inputEmail!.style.borderColor = "red"
            spanMail!.innerHTML = "<strong>O campo e-mail deve ser preenchido!</strong>"
            spanMail!.querySelector("strong")!.style.color = "red";
            return false;
        } 
        if(!this.inputSenha?.value) {
            mostrarAlerta("O campo senha deve ser preenchido")
            this.inputSenha!.style.borderColor = "red"
            spanPass!.innerHTML = "<strong>O campo senha deve ser preenchido</strong>"
            spanPass!.querySelector("strong")!.style.color = "red";
            return false;
        }
        return true;
    }
    entrarUsuario(): void {
        logarUsuario(this.recuperarUsuario(), bancoUsuarios, this.inputEmail, this.inputSenha)
    }
    limparCampos(): void {
        this.inputEmail.value = ""
        this.inputSenha.value = ""
        this.inputEmail.style.border = "none"
        this.inputSenha.style.border = "none"
    }
    private recuperarUsuario():User{
        let dadosUsuario: User = bancoUsuarios.recuperarUsuario(this.inputEmail!.value)
        return dadosUsuario;
    }

}