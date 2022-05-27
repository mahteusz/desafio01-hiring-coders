var exemplo = "A";
outro = "A";
function minhaFuncao( ){
    var exemplo = "B";
    return exemplo;
}

function minhaFuncao2( ){
    outro = "B";
    return outro;
}

console.log(exemplo);
console.log(minhaFuncao( ));
console.log(outro);
console.log(minhaFuncao2());
console.log(outro);