const $formulario = document.querySelector('.formulario')
const $entradas = document.querySelectorAll('.formulario__entrada')

const regExCorreo = /^[áéíóúñüa-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[áéíóúñüa-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[áéíóúñüa-z0-9](?:[áéíóúñüa-z0-9-]*[áéíóúñüa-z0-9])?\.)+[áéíóúñüa-z0-9](?:[áéíóúñüa-z0-9-]*[áéíóúñüa-z0-9])?$/


const campos = {
    nombres: false,
    apellidos: false,
    correo: false,
    contraseña: false
}

$formulario.addEventListener('submit', e => {
    e.preventDefault()

    $entradas.forEach((entrada, i) => {
        campos[entrada.id] = entrada.value.trim().length > 0
        if (entrada.value.trim().length <= 0) {
            entrada.classList.add('formulario__entrada--activo')
        }
    })

    const valido = Object.values(campos).findIndex(valor => valor == false)
    if (valido == -1) {
        if (regExCorreo.test($entradas[2].value)) $formulario.submit() 
        else {
            $entradas[2].classList.add('formulario__entrada--activo')
            $entradas[2].value = ''
            $entradas[2].placeholder = 'email@ejemplo.com'
            $entradas[2].nextElementSibling.nextElementSibling.textContent = 'Por favor proporcione un correo válido'
        }
    }
})

$entradas.forEach(entrada => entrada.addEventListener('focus', () => entrada.classList.remove('formulario__entrada--activo'))
);

$entradas[2].addEventListener('focus', () => {
    $entradas[2].placeholder = 'Correo'
    $entradas[2].nextElementSibling.nextElementSibling.textContent = 'El correo no puede estar vacio'
})