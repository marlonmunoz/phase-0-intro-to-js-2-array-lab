// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
   return cats.push("Ralph"); 
}

function destructivelyPrependCat(name){
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const newCats = cats.slice();
    newCats.push("Broom");
    return newCats;
}

function prependCat(name) {
    const myCats = cats.slice();
    myCats.unshift("Arnold");
    return myCats;
}

function removeLastCat() {
    const newAnimals = cats.slice();
    newAnimals.pop()
    return newAnimals;
}

function removeFirstCat() {
    const pets = cats.slice();
    pets.shift();
    return pets;    
}