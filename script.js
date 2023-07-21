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