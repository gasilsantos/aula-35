let usuario = {
    nome: 'cassiano',
    idade: 32,
    email: 'cecilene@icloud.com'
}

for(propriedade in usuario){
    console.log("propriedade do usuario:" + usuario[propriedade])
}