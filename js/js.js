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

//-----------------------------------------------

var btnDalto = document.querySelector(".daltonicoBtn")
btnDalto.addEventListener("click", function(){
    var body = document.querySelector("body")

    if(body.classList.contains("dalto")) {
        body.className = ""
    } else {
        body.className = "dalto"
    }
})

//-----------------------------------------------

var btnSN = document.getElementById("logo_sobre")

function sobre(){
    Swal.fire(
        'Quem somos?',
        'Somos o maior grupo privado de atendimento psiquiátrico do Brasil, com 4 unidades de internação, 350 leitos, ambulatório, hospital dia.',
        'info'
    )
}

btnSN.addEventListener("click", sobre)

//-----------------------------------------------

var btnLocal = document.getElementById("localizacao")

function endereco(){
    Swal.fire(
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d464.64365392587024!2d-50.33848815575477!3d-21.30511886213329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1700833690794!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    )
}

btnLocal.addEventListener("click", endereco)