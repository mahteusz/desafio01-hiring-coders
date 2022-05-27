let txt = "";
function funcao(value, index, array) {
    if (index % 2 == 0) {txt += value};
}
function xpto (x) {
        x.forEach(funcao);
        return txt;
}

alert (xpto([0, 1, 1, 2, 3, 5]))