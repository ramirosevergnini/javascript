function multiplicar(){
    var num = document.getElementById('inum').value
    var res = document.getElementById('res')
    res.innerHTML = ''
    for(var i = 0; i<=10; i++){
        res.innerHTML += `${num} x ${i} = ${num*i} <br>`;
    }
}