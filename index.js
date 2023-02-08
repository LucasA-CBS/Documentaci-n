const list = document.getElementsByClassName("index-boton")[0].addEventListener("click", () => {
    const indice = document.getElementsByClassName("index")[0].classList.toggle("visible")
    const boton = document.getElementsByClassName("index-boton")[0].classList.toggle("fixeado")
    const body = document.getElementsByClassName("content")[0].classList.toggle("opacidad")
})

const list2 = document.querySelectorAll('#op')

list2.forEach(element => {
    element.addEventListener("click", () => {
        const indice = document.getElementsByClassName("index")[0].classList.toggle("visible")
        const boton = document.getElementsByClassName("index-boton")[0].classList.toggle("fixeado")
        const body = document.getElementsByClassName("content")[0].classList.toggle("opacidad")
    })
});