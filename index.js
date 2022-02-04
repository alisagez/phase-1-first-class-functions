//FUNCTION INFO: Should take a callback function as a an argument, call the callback function. It does not matter what the function returns, as long as it call the callback function.

function receivesAFunction(callBack) {
   callBack();
}

//FUNCTION INFO: Should take no arguments and return a named function.

function returnsANamedFunction() {
    return function returnedFunction() {
    }
}

//FUNCTION INFO: Should take no arguments and return an anonymous function.

function returnsAnAnonymousFunction() {
    return() => console.log("I am anonymous!");
    }