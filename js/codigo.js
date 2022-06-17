
function esconder(elemento) {
    if (document.getElementsByClassName("enunciado")[elemento].style.display == "none") {
        document.getElementsByClassName("enunciado")[elemento].style.display = "block";
    }
    else {
        document.getElementsByClassName("enunciado")[elemento].style.display = "none"
    }
}