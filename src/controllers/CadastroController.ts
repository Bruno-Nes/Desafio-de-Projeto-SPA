import { User } from "../model/cadastro.js";
import { cadastrarUsuario } from "../service/CadastrarService.js";
import { mostrarAlerta } from "../views/alerta.js";

export interface IControleUsuario {
    validaCampos( 
        spanMail: HTMLElement, 
        spanPass: HTMLElement,
        spanName?: HTMLElement,
        spanUserValidPass?: HTMLElement
    ):boolean;
    entrarUsuario():void;
    limparCampos():void;
}


export class CadastroController implements IControleUsuario{
    public regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    private inputNome:HTMLInputElement;
    private inputEmail:HTMLInputElement;
    private inputSenha:HTMLInputElement; 
    private inputValidaSenha:HTMLInputElement;

    constructor() {
        this.inputNome = document.querySelector<HTMLInputElement>("#nome_cadastro")!;
        this.inputEmail= document.querySelector<HTMLInputElement>("#e-mail_cadastro")!; 
        this.inputSenha = document.querySelector<HTMLInputElement>("#senha_cadastro")!;
        this.inputValidaSenha = document.querySelector<HTMLInputElement>("#confirma_senha_cadastro")!; 
    }

    getInputNome():HTMLInputElement {
        return this.inputNome;
    }

    getInputEmail():HTMLInputElement {
        return this.inputEmail;
    }

    getInputPass(): HTMLInputElement{
        return this.inputSenha;
    }

    getInputValidaSenha(): HTMLInputElement {
        return this.inputValidaSenha;
    }
    
    validaCampos(
        spanName: HTMLElement, 
        spanMail: HTMLElement, 
        spanPass: HTMLElement,
        spanUserValidPass: HTMLElement
    ): boolean {
        if(!this.inputNome!.value || this.inputNome!.value == undefined) {
            spanName!.innerHTML = "<strong>O campo de usuário deve ser preenchido</strong>"
            spanName!.querySelector("strong")!.style.color = "red" 
            spanName!.style.color = "red"      
            mostrarAlerta("O campo de usuário deve ser preenchido")
            this.inputNome!.style.borderColor = "red"
            return false;
        }
        if (!this.inputEmail!.value) { 
            spanMail!.innerHTML = "<strong>O campo e-mail deve ser preenchido!</strong>"
            spanMail!.querySelector("strong")!.style.color = "red";
            mostrarAlerta("O campo e-mail deve ser preenchido!")
            this.inputEmail!.style.borderColor = "red"
            return false;
        } 
        if (!this.inputEmail!.value.match(this.regexEmail)) { 
            spanMail!.innerHTML = "<strong>E-mail inválido</strong>"
            spanMail!.style.color = "red"
            mostrarAlerta("E-mail inválido")
            this.inputEmail!.style.borderColor = "red"
            return false
        } 
        if(!this.inputSenha!.value) {
            spanPass!.innerHTML = "<strong>O campo senha deve ser preenchido</strong>"
            mostrarAlerta("O campo senha deve ser preenchido") 
            this.inputSenha!.style.borderColor = "red" 
            return false;
        }
        if(!this.inputValidaSenha!.value) {
            spanUserValidPass!.innerHTML = "<strong>O campo confirmar senha deve ser preenchido</strong>"
            spanUserValidPass!.querySelector("strong")!.style.color = "red";
            mostrarAlerta("O campo confirmar senha deve ser preenchido")
            this.inputValidaSenha!.style.borderColor = "red"
            return false;
        }
        if (this.inputValidaSenha!.value != this.inputSenha!.value) {
            spanUserValidPass!.innerHTML = "<strong>As senhas não estão iguais</strong>"
            spanUserValidPass!.querySelector("strong")!.style.color = "red";
            this.inputValidaSenha!.style.borderColor  = "red"
            return false;
        }    
        return true;
    }

    entrarUsuario(): void {
        cadastrarUsuario(this.criarUsuario());  
    }

    limparCampos(): void {
        this.inputNome.value = ""
        this.inputNome.style.border = "none"
        this.inputEmail.value = ""
        this.inputEmail.style.border = "none"
        this.inputSenha.value = ""
        this.inputSenha.style.border = "none"
        this.inputValidaSenha.value = ""
        this.inputValidaSenha.style.border = "none"
    }

    private criarUsuario(): User {
        let dadosUsuario = {
            nameUser : this.inputNome.value,
            emailUser : this.inputEmail.value,
            passUser : this.inputSenha.value 
        } as User;
        return dadosUsuario
    }
}