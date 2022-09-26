'use script';

const aviso_mensagem = document.querySelector('.aviso');
const quote_paragraph = document.querySelector('.quote');
const copiar_mensagem = document.querySelector('.copiar');


/*const tip_generator = function() {

fetch('https://api.adviceslip.com/advice')
.then(responseJson => {
    return responseJson.json();
}).then(response => {
    const quote_paragraph = document.querySelector('#quote');
    quote_paragraph.innerHTML = response.slip.advice;
    const get_id = response.slip.id;
    localStorage.setItem('id', get_id);
})

};

tip_generator();*/

const tip_generator = async () => {
    const url = await fetch('https://api.adviceslip.com/advice');
    const advice_data = await url.json();

    quote_paragraph.innerHTML = advice_data.slip.advice;

    quote_paragraph.setAttribute('data-advice', advice_data.slip.advice);

    console.log(quote_paragraph.dataset.advice);

    if (copiar_mensagem.style.visibility === 'visible') {
        copiar_mensagem.style.visibility = 'hidden';
        copiar_mensagem.style.opacity = '0';
    };
};

tip_generator();

function hoverAviso(visibility, opacity) {
    aviso_mensagem.style.visibility = visibility;
    aviso_mensagem.style.opacity = opacity;
};

function copiarMensagem() {
    navigator.clipboard.writeText(this.getAttribute('data-advice'));

    copiar_mensagem.style.visibility = 'visible';
    copiar_mensagem.style.opacity = '0.8';
};

quote_paragraph.addEventListener('mouseover', hoverAviso.bind(this, 'visible','0.8'));

quote_paragraph.addEventListener('mouseout', hoverAviso.bind(this, 'hidden', '0'));


quote_paragraph.addEventListener('click', copiarMensagem);
