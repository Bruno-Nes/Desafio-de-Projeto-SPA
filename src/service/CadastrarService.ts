import { bancoUsuarios, divLateral } from "../index.js";
import { User,  IBancoUsuarios, BancoUsuariosFactory} from "../model/cadastro.js";
import { DashboardView } from "../views/DashboardView.js";
import { login } from "./LogarService.js";
const userName = document.querySelector<HTMLInputElement>("#nome_cadastro");
const userMail = document.querySelector<HTMLInputElement>("#e-mail_cadastro");
const userPass = document.querySelector<HTMLInputElement>("#senha_cadastro");
const userValidPass = document.querySelector<HTMLInputElement>("#confirma_senha_cadastro");

// mensagens
const msgSucessoCad = document.querySelector<HTMLElement>('#alerta-cad-sucesso');
const msgErroCad = document.querySelector<HTMLElement>('#alerta-cad-error')

//Cartão do cadastro
export const cadastro = document.querySelector<HTMLDivElement>("#cartao_cadastro");

//Configuração da dashboard
export const dashboard = document.querySelector<HTMLElement>("#dashboard_usuario")
const btnRemoverUsuario = document.querySelector<HTMLButtonElement>("#btn-remover-usuario")


export function cadastrarUsuario(user : User) { 

    const dashboardView = new DashboardView(user, user.emailUser, bancoUsuarios);

    if(bancoUsuarios.verificarUsuario(user.emailUser)) {
        userMail!.style.borderColor = "red"
        userName!.style.border = "none"
        userValidPass!.style.border = "none"
        msgErroCad!.innerHTML = '<span>O email ja foi cadastrado!</span>'
        msgErroCad!.style.display = "block"    
        msgSucessoCad!.innerHTML = ""
        msgSucessoCad!.style.display = "none"
        return false
    } else {
            bancoUsuarios.cadastroUsuario(user)
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
                msgSucessoCad!.style.display = "none"
                cadastro!.style.display = "none";
                document.querySelector<HTMLElement>(".div-esquerda")!.style.display = "none";
                dashboard!.style.display = "flex"
                // a dashboard vai ser carregada através de uma função 
                dashboard!.querySelector('#perfil_usuario')!.innerHTML = dashboardView.carregarDashboard()
                dashboard!.style.animation = "fromTop .6s 0.1s backwards"
                document.querySelector<HTMLElement>('#sair_dashboard')!.onclick = function() {
                    dashboardView.sairDashboard(cadastro!, divLateral!, dashboard!, login!);
                }
                dashboardView.removerUsuario(dashboard!.querySelector<HTMLButtonElement>("#btn_remover_usuario")!)
            }, 1000)
            return true
        }
}
