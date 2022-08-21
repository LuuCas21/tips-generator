'use script';

const tip_generator = function() {

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

tip_generator();