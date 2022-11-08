export type User = {
    nameUser:string;
    emailUser:string;
    passUser:string;
}

// classe que cria objetos
export class BancoUsuariosFactory {
    public create(): IBancoUsuarios {
        return new BancoUsuariosMap();
    }
}

export interface IBancoUsuarios {
    cadastroUsuario(usuario:User):boolean;
    verificarUsuario(email:string):boolean;
    recuperarUsuario(email:string):User;
    removerUsuario(usuario:User):boolean;
}

export class BancoUsuariosMap implements IBancoUsuarios {

    private usuarios : Map<string, User> = new Map();

    public cadastroUsuario(usuario: User): boolean {
        if (usuario && usuario.emailUser) {
            this.usuarios.set(usuario.emailUser, usuario);
            return true;
        }
        return false;
    }
    verificarUsuario(email: string): boolean {
        return this.usuarios.has(email)
    }
    recuperarUsuario(email: string): User {        
        return this.usuarios.get(email)!
    }
    removerUsuario(usuario: User): boolean {
        if (usuario && this.usuarios.has(usuario.emailUser)) {
            return this.usuarios.delete(usuario.emailUser);
        }
        return false;
    }
    
}

