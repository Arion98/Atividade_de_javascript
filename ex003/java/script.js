function verificar(){

var data = new Date()
var ano = data.getFullYear()

var fano = document.querySelector('input#iage')
var res = document.querySelector('div#res')

if(fano.value.length == 0 || fano.value > ano){
    alert('[ERROR] verefique os dados e tente novamente!')
    return false
}else{
    var rge = document.getElementsByName('radio')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if(rge[0].checked){
        
        if(idade ==0 || idade <= 4 ){
            img.setAttribute('src','bebeR.png')
            genero = 'bebê'
        }else if(idade >=5 && idade <= 12){
            img.setAttribute('src','criancaMR.png')
            genero = 'criança'
        }else if(idade >=13 && idade <17){
            img.setAttribute('src','adolescenteMR.png')
            genero = 'adolescente'
        }else if(idade >=18 && idade < 65){
            img.setAttribute('src','adultoMR.png')
            genero = 'homem'
        }else{
            img.setAttribute('src','idosoMR.png')
            genero = 'idoso'
        }
        
    }
    if(rge[1].checked){
       
        if(idade ==0 || idade <= 4 ){
            img.setAttribute('src','bebeR.png')
            genero = 'bebê'
        }else if(idade >=5 && idade <= 12){
            img.setAttribute('src','CriancaFR.png')
            genero = 'criança'
        }else if(idade >=13 && idade <=17){
            img.setAttribute('src','adolescenteF.png')
            genero = 'adolescente'
        }else if(idade >=18 && idade <= 65){
            img.setAttribute('src','adultaFR.png')
            genero = 'mulher'
        }else{
            img.setAttribute('src','idosaFR.png')
            genero = 'idosa'
        }
        
    }
    res.innerHTML = `detectamos que você é ${genero}, e tem ${idade} anos`
    res.appendChild(img)
}

}