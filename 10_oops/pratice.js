// function Laptop(brand) {
//     this.brand = brand;
// }
// const myLaptop = Laptop("MacBook");

// // console.log(myLaptop); 
// console.log(globalThis.brand); // (or window.brand in browsers)


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }

    set name(value) {
        this._name = value
    }

    get name(){
        return `${this._name.toUpperCase()}`
    }

    set price(value){
        this._price = value;
    }

    get price(){
        return `$${this._price}`
    }
}

const userOne = new Product("abhishek",88)
console.log(userOne.name)
console.log(userOne.price)