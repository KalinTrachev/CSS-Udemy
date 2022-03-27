let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let negativeButton = document.querySelector('.modal__action--negative');

console.log(negativeButton);

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block'
    })
}

negativeButton.addEventListener('click', function () {
    backdrop.style.display = 'none';
    modal.style.display = 'none'
});

backdrop.addEventListener('click', closeModal);

function closeModal(){
    backdrop.style.display = 'none';
    modal.style.display = 'none
}