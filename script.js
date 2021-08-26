//ForEach
const newForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
    
        callback(arr[i], i, arr)
    }
}

const callbackForEach = (valor, index, arr) => {
    // console.log(valor, index, arr);
}

let myArray = ["5", "8", 5, true]
let retornoForEach = myArray.forEach(callbackForEach);
let retornoNewForEach = newForEach(myArray, callbackForEach);
console.log(retornoForEach, retornoNewForEach)


//Fill
const newFill = (arr, callback) => {
    let output = [];
    let value = 3;
    for (let i = 0; i < arr.length; i++){
        output.push(callback(value, arr[i], arr.length -1))
    }
    
    return output
}

const callbackNewFill = (value, inicio, fim) => {
    return value;

}

let mayArray = [5, 8, 7, 4];
let retornoFill = mayArray.fill(3)
let retornoNewFill = newFill(mayArray, callbackNewFill)
// console.log(retornoFill, retornoNewFill)


//NewMap 
const newMap = (arr, callback) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i], i, arr))
    }
    return newArray
}

const callbackNewMaP = (currentValue, indice, array) => {
    return currentValue + 2
}

let arrayNewMap = [3, 5, 6, 2]
let retornoMap = arrayNewMap.map(callbackNewMaP);
let retornoNewMap = newMap(arrayNewMap, callbackNewMaP);

// console.log(retornoMap, retornoNewMap)



//NewSome

const newSome = (arr, callback) => {
    let output = false
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) === true) {
            output = true;
            return output;
        }
    }
    return output
}

const callbackNewSome = (currentValue, index, array) => {
    if (currentValue > 5) {
        return true
    }
} 


let arrayNewSome = [2, 5, 3, 1, 4];
let retornoSome = arrayNewSome.some(callbackNewSome);
let retornoNewSome = newSome(arrayNewSome, callbackNewSome);

// console.log(retornoSome, retornoNewSome)





//NewFind

const newFind = (arr, callback) => {
    let output = undefined;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            output = callback(arr[i],i,arr);
            return output;
        }
        }
    return output

    }

const callbackNewFind = (element, index, array) => {
    if (element > 1) {
        return element
    }
}


let arrayNewFind = [2, 5, 3, 1, 4];
let retornotFind = arrayNewFind.find(callbackNewFind);
let retornoNewFind = newFind(arrayNewFind, callbackNewFind);

// console.log(retornotFind, retornoNewFind)

//NewFindIndex
const newFindIndex = (arr, callback) => {
    let output = -1;
    for (let i = 0; i < arr.length; i++) {

            if (callback(arr[i], i, arr)) {
                output = i;
                return output;
            }
        }
    return output

    }

const callbackNewFindIndex = (element, index, array) => {
    if (element > 6) {
        return element
    }
}

let arrayNewFindIndex = [2, 5, 3, 1, 4];
let retornoFindIndex = arrayNewFindIndex.findIndex(callbackNewFindIndex);
let retornoNewFindIndex = newFindIndex(arrayNewFindIndex, callbackNewFindIndex);

// console.log(retornoFindIndex, retornoNewFindIndex)

//New Every
const newEvery = (arr, callback) => {
    let output = true;
    for (let i = 0; i < arr.length; i++) {
        let call = callbackNewEvery(arr[i], i, arr)
        if (call === false) {
            output = call
            return output
        }
    }
    return output

}

const callbackNewEvery = (currentValue, index, array) => {
    return currentValue >= 10 
    }

let arrayNewEvery = [2, 2, 8, 4, 4];
let retornoEvery = arrayNewEvery.every(callbackNewEvery);
let retornoNewEvery = newEvery(arrayNewEvery, callbackNewEvery);

// console.log(retornoEvery,retornoNewEvery)


//NewFilter;

const newFilter = (arr, callback) => {
    let arrayOutput = [];
    for (let i = 0; i < arr.length; i++) {
        let newValue = callbackNewFilter(arr[i], i, arr);
        if (newValue !== undefined) {
            arrayOutput.push(newValue);
        }
    }
    return arrayOutput
}

const callbackNewFilter = (element, index, array) => {
    if (element % 2 === 0) {
        return element
    }
}

let arrayNewFilter = [2, 2, 8, 4, 4];
let retornoFilter = arrayNewFilter.filter(callbackNewFilter);
let retornoNewFilter = newFilter(arrayNewFilter, callbackNewFilter);

// console.log(retornoFilter,retornoNewFilter)

//NewConcat

const newConcat = (value1, value2, callback) => {
    let newArray = value1

    for (let i = 0; i < value2.length; i++) {
        newValue = callbackNewConcat(value2[i]);
        newArray.push(newValue)
    }
    return newArray
}

const callbackNewConcat = (value2) => {
    return value2
}

let arrayNewConcat = [2, 2, 1, 4, 4];
let arrayNewConcat2 = ["A", "B", "C"];

let retornoConcat = arrayNewConcat.concat(arrayNewConcat2);
let retornoNewConcat = newConcat(arrayNewConcat, arrayNewConcat2);


// console.log (retornoConcat, retornoNewConcat)

//NewIncludes 
const newIncludes = (arr, callback) => {
    let output = false;
    for (let i = 0; i < arr.length; i++) {
        let newValue = callbackNewIncludes(arr[i], i)
        if (newValue === arr[i]) {
            output = true
            return output;
        }
    }
    return output
}

const callbackNewIncludes = (element, fromIndex) => {
    return element;
}

let arrayNewIncludes = [2, 2, 1, 4, 4];
let element = 2
let retornoIncludes = arrayNewIncludes.includes(element);
let retornoNewIncludes = newIncludes(arrayNewIncludes, callbackNewIncludes);

// console.log (retornoIncludes, retornoNewIncludes)

//NewIndexOf

const newIndexOf = (arr, callback) => {
    let output = -1;

    for (let i = 0; i < arr.length; i++) {
        let value = callback(arr[i], i);
        if (value === arr[i]) {
            output = i;
            return output
        }
    }
    return output;

}

const callbackNewIndexOf = (element, position) => {
    return element;
}

let arrayNewIndexOf = [2, 2, 1, 4, 4];
let indexOfelement = 2
let retornoIndexOf = arrayNewIndexOf.indexOf(indexOfelement);
let retornoNewIndexOf = newIndexOf(arrayNewIndexOf, callbackNewIndexOf);

// console.log(retornoIndexOf,retornoIndexOf)

//NewJoin

const newJoin = (arr, callback) => {
    let newString = "";
    let separador = ","
    for (let i = 0; i < arr.length; i++) {
        newString += `${arr[i]}${callback(separador)}`;
    }
    return newString
}

const callbackNewJoin = (separador) => {
    return separador;
}

let arrayNewJoin = [2, 2, 1, 4, 4];
let separadorJoin = ","
let retornoJoin = arrayNewJoin.join(callbackNewJoin(separadorJoin));
let retornoNewJoin = newJoin(arrayNewJoin, callbackNewJoin);

// console.log(retornoJoin,retornoNewJoin)

//NewReduce 

const newReduce = (arr, callback) => {
    let output = 0;

    for (let i = 0; i < arr.length; i++) {
        output = callback(output, arr[i])
        
    }
    return output
}

const callbackNewReduce = (acumulador, currentValue) => {
    return acumulador + currentValue;
}


let arrayNewReduce = [2, 2, 1, 4, 4];
let retornoReduce = arrayNewReduce.reduce(callbackNewReduce);
let retornoNewReduce = newReduce(arrayNewReduce, callbackNewReduce);

// console.log(retornoReduce, retornoNewReduce)
