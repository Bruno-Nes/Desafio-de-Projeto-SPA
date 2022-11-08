import { cadastrarUsuario } from "../service/CadastrarService.js";
import { BancoUsuariosMap, IBancoUsuarios, User } from "../model/cadastro.js";

export class DashboardView {

    private user: User;
    private email: string;
    private bancoUsuarios: IBancoUsuarios;

    constructor(user: User, email: string, bancoUsuarios: IBancoUsuarios) {
        this.user = user;
        this.email = email;
        this.bancoUsuarios = bancoUsuarios;
    }

    public removerUsuario(element: HTMLButtonElement) {
        element.addEventListener('click', () => {
            this.bancoUsuarios.removerUsuario(this.user);
            console.log('usuario remolvido')
        })
    }
    
    public carregarDashboard() {
        this.user = this.bancoUsuarios.recuperarUsuario(this.email); 
        return `
            <div class="show-perfil">
                <h2 class="msg-nome-dash">Olá, ${this.user!['nameUser']}</h2>
                <span class="msg-email-dash">${this.user!['emailUser']}</span>
                <span class="msg-pass-dash">${"*".repeat(this.user!['passUser'].length)}</span>
                <span>Voltar para o <a href="#" id="sair_dashboard">Login</a></span>
            </div>
            <footer class="dash-footer">
                <button id="btn_remover_usuario" class="btn-remover-usuario">Remover Usuário</button>
            </footer>
        `        
    }

    public sairDashboard( cadastro: HTMLDivElement, 
                          divLateral: HTMLElement, 
                          dashboard: HTMLElement,
                          login: HTMLDivElement) {
        cadastro!.style.display = "none";
        divLateral!.style.display = "flex";
        dashboard!.style.display = "none";
        login!.style.display = "flex";
    }

}
