const razasDePerros = [
    "Gran Danes",
    "Dogo de Burdeos",
    "Dogo Argentino",
    "San Bernado",
    "Mastin del Pirineo",
    "Mastin Español",
    "Chihuaua",
    "Pator Aleman",
    "Lobero Irlandes",
    "Pitbull"
]

/*Para esta nueva version de JS se agrego el bucle for/of que permite iterar sobre los eementos de objetos iterables*/
//primero con un for tradicional
for(let indice = 0; 
    indice < razasDePerros.length; indice++){
    console.log(razasDePerros[indice]);
}

//ahora con for/of
for(const raza of razasDePerros){
    console.log(raza);
}
/*tambien existe un bucle for/in que itera sobre las llaves del objeto en el caso de un arreglo
estas llaves son los indices*/
//ahi le ponen rallotas
for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}

module.exports.razasDePerros = razasDePerros;