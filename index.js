let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){

    console.log(cats.push("Ralph"))
}

function destructivelyPrependCat(name){

    console.log(cats.unshift("Bob"))
}

function destructivelyRemoveLastCat(){

    console.log(cats.pop("Ralph"))
}

function destructivelyRemoveFirstCat(){

    console.log(cats.shift("Bob"))
}

function appendCat(name) {
    
    let newCatsArray = cats.slice();
    newCatsArray.push(name);
    return newCatsArray;
}


function prependCat(name) {
    
        let newCatsArray = cats.slice()
        newCatsArray.unshift(name);
        return newCatsArray;
    }
    
    function removeLastCat() {
        
        let newCatsArray = cats.slice()
        newCatsArray.pop();
        return newCatsArray;
    }

    function removeFirstCat() {
        
        let newCatsArray = cats.slice();
        newCatsArray.shift();
        return newCatsArray;
    }
    

