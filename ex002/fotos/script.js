
function horaDoDia(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    
    var data = new Date()
    var hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora}horas`
    
    if(hora >= 6 && hora < 12){
        //bom dia
        imagem.src = 'fotos/manhã.png'
    }else if(hora >= 13 && hora < 18){
        //boa tarde
        imagem.src = 'fotos/tarde.png'
    }else{
        //boa noite
        imagem.src = 'pexels-eberhard-grossgasteiger-1624438.jpg'
        imagem.src = 'noite.png'
        
        document.body.style.backgroundColor = 'black'
    }


}