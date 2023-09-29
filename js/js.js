var botaoC = document.getElementById("cartman")
var botaoK = document.getElementById("keny")

function drCartman() {
    Swal.fire(
        'Especializações do DR. Cartman',
        'Transtornos de personalidade e comportamento obsesivo complusivo',
        'info'
    )
}

function drKenny() {
    Swal.fire(
        'Especializaçõs do DR. Kenny',
        'Transtornos de ansiedade e Depressão',
        'info'
    )
}

botaoC.addEventListener("click", drCartman)
botaoK.addEventListener("click", drKenny)