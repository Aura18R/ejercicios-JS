/* Crear un sistema calendario para verificar si el dia actual, junto a la hora considerada día y horario laboral estandar
 9 am- 6pm es horario laboral 
 new Date().getDay() resulta en el dia de la semana  del 0 al 6*/

 /* Function bussinesDay
 Parametros: hour -> hora actual 
 Return: True/False si es la hora actual es horario laboral */

 function bussinesDay(hour){
    if(hour>="09:00" && hour<="18:00"){
        return true;
    }else{
        return false;
    }
 }

 console.log(bussinesDay(new Date().getHours()))

 /* Function bussinesDay
 Parametros: day
 Return: True/False si es el día actual es laboral */

 function bussinesDay2(day){
    switch (day) {
        case 0:
            return true;
            break;
        case 1:
            return true;
            break;
        case 2:
            return true;
            break;
        case 3:
            return true;
            break;
        case 4:
            return true;
            break;
        case 5:
            return false;
            break;
        case 6:
            return false;
            break;
    }
 }

 console.log(bussinesDay2(new Date().getDay()))

 /*Escribir una funcion que regrese la cantidad de valores true que hay en un array 
  countTrue([true, false, false, true, false]) ➞ 2
  countTrue([false, false, false, false]) ➞ 0
  countTrue([]) ➞ 0 Regresar 0 si el array es vacio  // Usar recursion*/

  function countTrue(array){
    if(array.length==0){
        return 0;
    }else{
        head = array.pop()
        if(head== true){
            return 1 + countTrue(array);
        }else{
            return countTrue(array);
        }
    }
  }

  console.log( countTrue([true, false, false, true, false]));



 /* Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros // Usar recursion */

 function maxDiv(num1, num2){
    if(num1==0){
        return num2;
    }
    return maxDiv(num2%num1, num1);
 }

 console.log(maxDiv(120,12));


/*Encontrar los primeros n elementos de la serie fibonacci // Usar recursion */

function susFibonacci(nElement){
    if(nElement<2){
        return nElement;
    }else{
        return (susFibonacci(nElement-1)+ susFibonacci(nElement-2));
    }
}


console.log(susFibonacci(8));


/*  Encontrar el numero n de una figura piramidal triangular (tetrahedron) // (nivel) -> cantidad de numeritos */

function tetrahedron(level){
    let total = 0
    for(let a=1; a<=level; a++){
        let calc=((a*(a+1))/(2));
        total = total + calc;
    }
    return total;
}


console.log(tetrahedron(3));



/* Crear una funcion que tome el nombre de un pais y su area // (nombre, a)  
Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta 
('Russia', 17098242) -> Russia is 11.48%  
("USA", 9372610) -> "USA is 6.29%  */

function countrySurface(nameCountry, areaCountry){
    const areaEart = 149008108.10;
    return (`${nameCountry} is ${((areaCountry/areaEart)*100)} %`);
}

console.log(countrySurface("USA", 9372610));



/*Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0 // No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit  */

function neg(number){  
    return(number-number+1-number);
}

console.log(neg(0));

/* Messenger bzzz // (0 ) n // Si no hay nadie -> "No hay nadie en linea" // Si hay 1 persona -> "user1 esta en linea" // Si hay 2 personas -> "user1 y user2 estan en linea" // Si hay n>2 personas, "user1 y n-1 mas estan en linea" */

function numberPeople(number){
    if(number>2){
        return (`user1 y ${number-1} mas estan en linea`);
    }else if (number==2){
        return (`user1 y user2 estan en linea`);
    }else if (number == 1){
        return (`user1 esta en linea`);
    }
}


console.log(numberPeople(10));
