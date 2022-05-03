//Obligatorios funciones

// 6 - Números pares entre 0 y un máximo

function contadorDePares (min , max){
    for (let i = min; i <= max; i++)
        if (i % 2 === 0){
            console.log (i)
        }
}

contadorDePares (10 , 20)

/*el for se usa para los loop*/

//FORMA DI EL USUARIO INGRESA LOS NUMEROS

function contadorDePares (){
    let min = parseInt (prompt("ingrese un minimo"))
    let max = parseInt (prompt("ingrese un maximo"))
    for (let i = min; i <= max; i++)
        if (i % 2 === 0){
            console.log (i)
        }
}
contadorDePares ()

// OTRA FORMA
function contadorDePares (max){
    let contador = 0;
    for (let i = 0; i<= max; i++){
        if(i % 2 === 0){
            contador++;
        }
    }
    return contador
}
 console.log (contadorDePares(30))

