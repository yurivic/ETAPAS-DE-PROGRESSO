const etapas = document.querySelectorAll('.etapas')
const prev = document.querySelectorAll('.btn_prev')
const next = document.querySelectorAll('.btn_next')
const etapa = document.querySelectorAll('.etapa')

let etapaAtiva = 1

next.addEventListener('click', () => {
    etapaAtiva++

    if(etapaAtiva > etapa.length) {
        etapaAtiva = etapa.length
    }

    update()
})

prev.addEventListener('click', () => {
    etapaAtiva--

    if (etapaAtiva < 1) {
        etapaAtiva = 1
    }

    update()

})

function update() {
    etapa.forEach((etapa, idx) => {
        if (idx, etapaAtiva) {
            etapa.classList.add('active')
        } else {
            etapa.classList.remove('remove')
        }
    })

    const actives = document.querySelectorAll('.active')

    etapas.style.widht = (actives.length - 1) / (etapa.length - 1) * 100 + '%'

    if (etapaAtiva === 1) {
        prev.disabled = true
    } else if (etapaAtiva === etapa.length) {
        next.disabled = true
    } else {
        prev.disabled = false 
        next.disabled = false
    }
    console.log(etapaAtiva)
}


