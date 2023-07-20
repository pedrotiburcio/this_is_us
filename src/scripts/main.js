document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const botaoAlvo = btn.target.dataset.tabButton;
            const episodiosAlvos = document.querySelector(`[data-tab-id=${botaoAlvo}]`);
            escondeTodasAsTemporadas();
            episodiosAlvos.classList.add('seasons__list--is-active');
            removeBotaoAtivo();
            btn.target.classList.add('seasons__menu__button--is-active');
        })
    }

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', alternaResposta);
    }

})

function alternaResposta(e){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = e.target.parentNode;
    elementoPai.classList.toggle(classe);
    
}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('seasons__menu__button--is-active');
    }
}   


function escondeTodasAsTemporadas(){
    const temporadas = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < temporadas.length; i++){
        temporadas[i].classList.remove('seasons__list--is-active');
    }
}