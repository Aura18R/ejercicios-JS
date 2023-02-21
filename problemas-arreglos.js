/* Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR */

function secretName (array){
    let name = "";
    array.forEach(element => {
        let chart =element.charAt(0);
        name = name + chart;
    });
    return name;
}

console.log(secretName(["Felipe", "Fer", "Zabdiel"]));


// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online'

function onlineStatus(array){
    console.log(array[0] + ', ' + array[1] + ' and ' + (array.length -2) + ' more online');
}

onlineStatus(["Felipe", "Fer", "Zabdiel", 'mockIng99', 'J0eyPunch', 'glassedFer']);

/* // Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]  */

function arraysMultiplos(number, lon){
    const listNumber = new Array();
    for (let i=1; i<=lon; i++){
        listNumber.push(i*number);
    }
    return listNumber;
}

console.log(arraysMultiplos(17, 6));

// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

function positiveDom(array){
    let positiveNum = 0;
    let negativeNum = 0;
    array.forEach(element => {
        if (element>=0){
            positiveNum = positiveNum + 1;
        }else{
            negativeNum = negativeNum + 1;
        }
    })
    console.log(resp = (negativeNum<positiveNum) ?  true : false);
}


positiveDom([-1, -3, 5, 4, 6767]);


// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

function averageAnti(array){
    let cut =(Math.trunc(array.length/2));
    let firstList = array.slice(0,cut);
    let secondList = array.reverse().slice(0,cut);
    let finalList = new Array();
    for(let i=0; i<firstList.length; i++){
        finalList.push((firstList[i]+secondList[i])/2);
    }
    return finalList;
}

console.log(averageAnti([1,2,3, 5,22,6]));

