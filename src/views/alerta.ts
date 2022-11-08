const alertaPersonalizado = document.querySelector<HTMLDivElement>('#alertId');
const msgAlert = document.querySelector('#msg');
const closeIcon = document.querySelector('.close-btn');

export function mostrarAlerta(msg:string): void {
    msgAlert!.innerHTML = msg
    if(alertaPersonalizado != null ) {
        alertaPersonalizado.classList.remove('hide')
        alertaPersonalizado.classList.remove('successAlert')
        alertaPersonalizado.classList.remove('warningAlert')
        alertaPersonalizado.classList.add('show')
        alertaPersonalizado.classList.add('showAlert')
    
        setTimeout( () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        }, 3000)
        closeIcon!.addEventListener('click', () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        })
    }
}

export function alertaDeErro(msg:string): void {
    msgAlert!.innerHTML = msg
    if(alertaPersonalizado != null) {
        alertaPersonalizado.classList.remove('hide')
        alertaPersonalizado.classList.remove('successAlert')
        alertaPersonalizado.classList.add('warningAlert')
        alertaPersonalizado.classList.add('show')
        alertaPersonalizado.classList.add('showAlert')
        setTimeout( () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        }, 3000)
        closeIcon!.addEventListener('click', () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        }) 
    }
}

export function alertaDeSucesso(msg:string): void {
    msgAlert!.innerHTML = msg
    if(alertaPersonalizado != null) {
        alertaPersonalizado.classList.remove('hide')
        alertaPersonalizado.classList.remove('warningAlert')
        alertaPersonalizado.classList.add('successAlert')
        alertaPersonalizado.classList.add('show')
        alertaPersonalizado.classList.add('showAlert')
        setTimeout( () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        }, 3000)
        closeIcon!.addEventListener('click', () => {
            alertaPersonalizado.classList.add('hide')
            alertaPersonalizado.classList.remove('showAlert')
        })
    }
}
