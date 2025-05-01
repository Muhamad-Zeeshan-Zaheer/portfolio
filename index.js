// index.js
const toggleBtn = document.querySelector('.toogle-btn');
const dropdownMenu = document.querySelector('.dropdown_menu');
const togglebtnicon=document.querySelector('.toogle-btn i');

toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');
    togglebtnicon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});
