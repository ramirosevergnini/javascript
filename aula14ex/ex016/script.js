function contar(){
    var n1 = document.getElementById('inumero')
    var n2 = document.getElementById('inumero2')
    var passo = document.getElementById('ipasso')
    var res = document.getElementById('res')
    res.innerHTML = 'Contando: '
    var i = Number(n1.value)
    var f = Number(n2.value)
    var p = Number(passo.value)
    if(p<=0){
        window.alert('Passo inválido! Considerando passo 1')
        p =1
    }
    if(i<f){
        for(var c = i; c<=f; c+=p){
            res.innerHTML += `${c}`
            res.innerHTML += "  -->  "
        }
    }else{
        for(var c = i; c>=f; c-=p){
            res.innerHTML += `${c}`
            res.innerHTML += "  -->  "
        }
    }
    
}