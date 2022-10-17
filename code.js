let b = 0;
function countMinus() {
    b = b-1;
    var number = document.getElementById("id");
    number.innerHTML = b;
}
function countPlus() {
    b = b+1;
    var number = document.getElementById("id");
    number.innerHTML = b;
}
function reset() {
    b = 0;
    var number = document.getElementById("id");
    number.innerHTML = b;
}