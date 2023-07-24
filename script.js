const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } 
    });
});


const hiddenElementsL = document.querySelectorAll('.hidden-left');
const hiddenElementsR = document.querySelectorAll('.hidden-right');
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElementsL.forEach((el) => observer.observe(el));
hiddenElementsR.forEach((el) => observer.observe(el));
hiddenElements.forEach((el) => observer.observe(el));

const searchInput = document.querySelector("#searchInput")
const cards = document.getElementsByClassName('ror')

searchInput.addEventListener('keyup', function() {
const searchValue = searchInput.value.toLowerCase();

for (let i = 0; i < cards.length; i++) {
const cardText = cards[i].textContent.toLowerCase();
if (cardText.includes(searchValue)) {
cards[i].style.display = 'block';
} else {
cards[i].style.display = 'none';
}
}
});