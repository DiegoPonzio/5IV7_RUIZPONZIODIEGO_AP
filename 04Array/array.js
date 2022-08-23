/*Array
ForEach itera sobre los elementos del arreglo, no regresa nada
En la siguiente linea de codigo hace lo mismo que un bucle;
pero itera sobre todos los elementos del arreglo, cada que 
lo hace ejecuta una funcion su indice y el arreglo original
*/
razasDePerros.forEach((raza,indice, arregloOriginal) => console.log(raza));
/*en caso de que no utilicemos alguno de los parametros los podemos omitier, por ejemplo*/
razasDePerros.forEach(raza => console.log(raza));
/*
Funcion map
itera sobre los elementos del arreglo, regresa un arreglo con los que muestra
un arreglo diferente con el que nos muestra originalmente
*/
const razasDePerrosEnMayusculas = razasDePerros.map((raza, indice, arregloOriginal) => raza.toUpperCase());
/**Hay otras funciones utiles como por ejemplo
 * 
 * find
 * nos permite buscar un elmento dentro del arreglo, si lo encuentra, lo regresa, y si no lanza 'unifined'
 * por ejemplo "chihuahua"
 */
if (razasDePerros.find((raza, indice, arregloOriginal) => raza === "Chihuahua")){
    console.log("La raza se encuentra en el arreglo")
}else{
    //hay que meterlo
    razasDePerros.push("Chihuahua");
    console.log("Sse agrego la raza")
}
/**findIndex
 * es similar, pero en lugar de regresar el elemento devuelve su indice sino lo encuentra, devuelve -1
 * esta funcon es particularmente util si tenemos que modificar el elemento original dentro del arreglo
 */
const indiceDeChihuahua = razasDePerros.findIndex((raza, indice, arregloOriginal) => raza === "chihuahua")
    if(indiceDeChihuahua > -1){
        //resultado esperado poeque si esta
        console.log(razasDePerros[indiceDeChihuahua])
        razasDePerros[indiceDeChihuahua] += "(Raza de perros pequeña)"
        //resultado esperado
        //chihuahau (Raza de perros pequeña)
        console.log(razasDePerros[indiceDeChihuahua])
    }