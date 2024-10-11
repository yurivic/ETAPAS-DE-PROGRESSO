const etapas = document.querySelectorAll('.etapa');
const prev = document.querySelector('.btn_prev');
const next = document.querySelector('.btn_next');
let currentIndex = 0;

function updateStep() {
    // Atualiza os estados dos botões
    prev.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
    prev.disabled = currentIndex === 0;
    next.style.cursor = currentIndex === etapas.length - 1 ? 'not-allowed' : 'pointer';
    next.disabled = currentIndex === etapas.length - 1;
}

prev.addEventListener('click', () => {
    etapas[currentIndex].classList.remove('active');

    currentIndex = (currentIndex - 1) % etapas.length;

    updateStep()
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % etapas.length;
    
    etapas[currentIndex].classList.add('active');

    updateStep()
});

updateStep();
