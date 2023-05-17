function calcular(){
    var calc = document.querySelector('#inicio')
    var fim = document.querySelector('#ifim')
    var cont = document.querySelector('#ipasso')
    var res = document.querySelector('#res')
    
    if(calc.value === '' || fim.value === '' || cont.value == ''){
        alert('[error] preencha os dados')
        return false
    }else{
        
        var i = Number(calc.value)
        var f = Number(fim.value)
        var p = Number(cont.value)

        

     if( i < f){
         for(var c = i;c <= f; c+=p){
            res.innerHTML += ` ${c} &#x1F449;`
             }
            }else if(i > f){
                for(var c = i;c >= f; c-=p){
                    res.innerHTML += ` ${c} &#x1F449;`
                     }
            }
    }
}
     