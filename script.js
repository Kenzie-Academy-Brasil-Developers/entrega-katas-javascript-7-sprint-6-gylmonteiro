//ForEach
const newForEach = (arr, callback) => {
 for (let i = 0; i < arr.length; i++) {
     let currentValue = arr[i];
     let index = i;
     let array = arr;
     callback(currentValue, index, array)
 }   
}

const callbackForEach = (valor,index,arr) => {
    console.log(valor, index, arr);
}

newForEach(["5", "8", 5, true], callbackForEach) 


//Fill
const newFill = (arr, valueFill, inicio, fim, callback) => {
         
    arr = callback(arr, valueFill, inicio, fim)
    return arr
}

const callbackNewFill = (arr, valueFill, inicio = 0, fim = arr.length -1) => {
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = valueFill;
    }
    
    return arr

}

let array = [5,8,7,4];
newFill(array, 4, 1 , array.length -1 , callbackNewFill)

//NewMap 
const newMap = (arr, callback) => {
    arr = callback(arr, arr[0], 0) 
}

const callbackNewMap = (arr, valorAtual, indice) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i] * 2)
    }
    return newArray
}

let arrayNewMap = [3,5,6,2]
newMap(arrayNewMap, callbackNewMap)

//NewSome

const newSome = (arr, callback) => {
    arr = callbackNewSome (arr, arr[0], 0)
    if (arr === undefined) {
        arr = false
    }
    return arr
}

const callbackNewSome = (arr, currentValue, index) =>{
    for (let i = 0; i < arr.length; i++) {
        currentValue = arr[i];
        if (currentValue > 5) {
            return true
        }
    } 
}

let arrayNewSome = [2, 5, 8, 1, 4];

newSome(arrayNewSome, newSome)

//NewFind

const newFind = (arr, callback) => {
    let valueFind = undefined
    for (let i = 0; i < arr.length; i++) {
        valueFind =  callback(arr[i], i, arr)
        if (valueFind !== undefined) {
            break
        }  
    }
    return valueFind

}

const callbackNewFind = (element, index, array) => {
    if (element > 4) {
        return element
    }
}

let arrayNewFind = [2, 5, 8, 1, 4];

newFind(arrayNewFind, callbackNewFind)


//NewFindIndex
const newFindIndex = (arr, callback) => {
    let valueFind = -1
    for (let i = 0; i < arr.length; i++) {
        valueFind =  callback(arr[i], i, arr)
        if (valueFind !== undefined) {
            break
        }  
    }
    console.log(valueFind)
    return valueFind

}

const callbackNewFindIndex = (element, index, array) => {
    if (element > 4) {
        return index
    }
}

let arrayNewFindIndex = [2, 5, 8, 1, 4];

newFind(arrayNewFindIndex, callbackNewFindIndex)

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
    if (currentValue % 2 !== 0) {
        return false
    }
}

let arrayNewEvery = [2, 2, 8, 4, 4];

newEvery(arrayNewEvery, callbackNewEvery)

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

let arrayNewFilter = [2, 2, 1, 4, 4];

newFilter(arrayNewFilter, callbackNewFilter)

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

newConcat(arrayNewConcat, arrayNewConcat2, callbackNewConcat)

//NewIncludes 
const newIncludes = (arr, elem, callback) => {
    let output = false;
    for (let i = 0; i < arr.length; i++) {
        let newValue = callbackNewIncludes(elem, i)
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

newIncludes(arrayNewIncludes, 3, callbackNewIncludes)

//NewIndexOf

const newIndexOf = (arr, element, callback) => {
    let output = -1;

    for (let i = 0; i < arr.length; i++) {
        let value = callbackNewIndexOf(element, 0);
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

newIndexOf(arrayNewIndexOf, 1, callbackNewIndexOf )

//NewJoin

const newJoin = (arr, separador) => {
    let newString = "";
    for (let i = 0; i < arr.length; i++) {
        newString += `${arr[i]}${separador}`
    }
    return newString
}

let arrayNewJoin = [2, 2, 1, 4, 4];

newJoin(arrayNewJoin, ",")

//NewReduce 

const newReduce = (arr, callback) => {
    let output  = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let newValue = callbackNewReduce(output, arr[i], i, arr)
        output += newValue;
    }
    return output
}

const callbackNewReduce = (acumulador, currentValue, index, array) => {
    return currentValue;
}

let arrayNewReduce = [2, 2, 1, 4, 4];
newReduce(arrayNewReduce,callbackNewReduce )
