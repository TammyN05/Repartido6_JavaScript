//Obligatorios funciones

// 6 - Números pares entre 0 y un máximo

/*function contadorDePares (min , max){
    for (let i = min; i <= max; i++)
        if (i % 2 === 0){
            console.log (i)
        }
}

contadorDePares (10 , 20)*/

/*el for se usa para los loop*/

//FORMA DI EL USUARIO INGRESA LOS NUMEROS

/*function contadorDePares (){
    let min = parseInt (prompt("ingrese un minimo"))
    let max = parseInt (prompt("ingrese un maximo"))
    for (let i = min; i <= max; i++)
        if (i % 2 === 0){
            console.log (i)
        }
}
contadorDePares ()*/

// OTRA FORMA
/*function contadorDePares (max){
    let contador = 0;
    for (let i = 0; i<= max; i++){
        if(i % 2 === 0){
            contador++;
        }
    }
    return contador
}
 console.log (contadorDePares(30))*/


// 7 - Mayor(edad, tope): Escribir la función Mayor  que reciba una edad 
// y un valor tope y retorne true si la edad supera a ese tope. 
//En caso contrario que retorne false.


/*let edad = parseInt(prompt("Ingrese una edad"))
let tope = 18

function Mayor (edad, tope){
    if (edad >= tope){
        alert("ok, eres mayor")
    }else {
        alert("tas chikito")
    } 
    return (Mayor)
}
Mayor (edad, tope)*/


/* 8 - Usuario y contraseña: 
Solicitar al usuario su nombre de usuario y contraseña para ingresar al sistema mediante prompts. 
Crear una función para validar que las credenciales ingresadas son válidas. 
(definir las credenciales válidas en constantes).*/


/*prompt("Ingrese el usuario")
prompt("Ingrese la contraseña")

let user = "Tamara"
let password = "provi"

function login (user, password){
    if (user == "Tamara" && password == "provi"){
        alert("Welcome");
    } else {
        alert ("OW NO OW NO OW NONOO");
    }
    return (login);
}
login(user, password);*/

/* 9 - Pseudocódigo a javascript: Escribir el siguiente programa en pseudocódigo a código javaScript 
 Hacer 
    n1 = Ingrese un numero
    n2 = Ingrese otro numero 
Si (n1 y n2 son numero enteros)
    mostrar suma de n1 y n2
No
    Mensaje de error

Repetir mientras suma sea menor a 100*/

/*let n1 = parseFloat(prompt("Ingrese un numero"));
let n2 = parseFloat(prompt("Ingrese otro numero"));

function Suma(x,y){
    if ((x + y) != parseInt(x + y)){
        alert ("ERROR");
    } else {
        alert("La suma es: "+ (parseInt(x) + parseInt(y)))
    }
 return (Suma)
}
Suma(n1, n2)*/















