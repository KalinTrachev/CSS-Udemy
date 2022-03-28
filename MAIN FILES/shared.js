let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let negativeButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');


for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block'
        backdrop.classList.add('open');
        modal.classList.add('open');
    })
}

negativeButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', function(){
    mobileNav.classList.remove('open');
    closeModal();
});

function closeModal(){
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    backdrop.classList.remove('open');
    modal.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
})