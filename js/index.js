// let effect = document.querySelector(".effect");
// let prog = "Mostafa Magdy.";
// let i = 1;

// setInterval(writeText, 300);
// function writeText() {
//     effect.innerHTML = prog.slice(0, i);
//     i++;
//     if (i > prog.length) {
//         i = 1;
//     }
// }

const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

sectBtn.forEach(button => {
    button.addEventListener('click', function () {
        sectBtn.forEach(btn => btn.classList.remove("active-btn"));
        this.classList.add('active-btn');
    })
})
allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        sectBtns.forEach((btn) => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
        sections.forEach((section) => {
            section.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})

let themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
})