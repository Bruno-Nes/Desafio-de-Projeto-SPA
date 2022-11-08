export function carregarDashboard(user, bancoUsuarios) {
    return `
    <div>
    <h2 class="msg-nome-dash">Olá, ${user['nameUser']}</h2>
    <span class="msg-email-dash">${user['emailUser']}</span>
    <span class="msg-pass-dash">${user['passUser']}</span>
    <span>Voltar para o <a href="#" id="sair_dashboard">Cadastro</a></span>   
    <button id="btn-remover-usuario" class="btn-submit btn-remover-usuario">Remover Usuário</button>
    </div>
    `;
    document.querySelector("#btn-remover-usuario").addEventListener('click', () => {
        bancoUsuarios.removerUsuario(user);
        let usuarioExiste = false;
    });
}
