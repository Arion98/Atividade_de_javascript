function tabuada(){
    var numero = document.querySelector('#inum')
    var select = document.querySelector('#sel')

    

    if(numero.value === ''){
        alert('[error] preencha os dados!')
    }else{
    
    var n = Number(numero.value)
    var c = 0
    
    select.innerHTML = ''

    for(var i = n;c <= 10;c++){
        let item = document.createElement('option')
        item.text = `${i} x ${c} = ${i*c}`
        select.appendChild(item)
        
    }
    }

  
    
}
     