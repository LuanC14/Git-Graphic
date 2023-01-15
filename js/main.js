import { appUpdate } from "./app.js";

new appUpdate('#graphic-component')

const buttonInfo = document.querySelector('.about-button')

buttonInfo.addEventListener('click', () => {
    alert("O gráfico é aproximado, por exemplo, as quantidades entre 11 a 24 estarão representadas na intermediária entre 10 e 25")
})