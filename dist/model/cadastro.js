export class BancoUsuariosFactory {
    create() {
        return new BancoUsuariosMap();
    }
}
export class BancoUsuariosMap {
    constructor() {
        this.usuarios = new Map();
    }
    cadastroUsuario(usuario) {
        if (usuario && usuario.emailUser) {
            this.usuarios.set(usuario.emailUser, usuario);
            return true;
        }
        return false;
    }
    verificarUsuario(email) {
        return this.usuarios.has(email);
    }
    recuperarUsuario(email) {
        return this.usuarios.get(email);
    }
    removerUsuario(usuario) {
        if (usuario && this.usuarios.has(usuario.emailUser)) {
            return this.usuarios.delete(usuario.emailUser);
        }
        return false;
    }
}
