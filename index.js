async function loadContent() {
    let $divText = document.querySelector('.advice-text');
    let $spanId = document.getElementById('advice-id')
    let advice = await getAdvice();

    $spanId.innerText = advice.slip.id;
    $divText.innerText = `"${advice.slip.advice}"`;
}

async function getAdvice() {
    let response = await fetch('https://api.adviceslip.com/advice');
    let advice = await response.json();

    return advice;
}

const $btnAdvice = document.querySelector('.btn-advice');

$btnAdvice.addEventListener('click', () => {
    loadContent();
})
