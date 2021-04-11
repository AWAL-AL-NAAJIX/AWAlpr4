function toggleMenu() {
    let toggle = document.querySelector('.toggle');
    let navication = document.querySelector('.navication');
    let main = document.querySelector('.main');
    let cardBox = document.querySelector('.cardBox');
    toggle.classList.toggle('active')
    navication.classList.toggle('active')
    main.classList.toggle('active')
    cardBox.classList.toggle('active')
}