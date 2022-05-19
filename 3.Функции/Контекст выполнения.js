"use strict";
function printThis(){
  console.log(this);
}
function printName(){
  console.log(this.name);
}

let user = {
  name: "Alex",
  printThis,
  printName
};

let user2 = {
  name: "Petr",
  printThis,
  printName,
};

let user3 = {
  name: "Oleg",
  printThis,
  printName,
};

printThis();
user.printThis();
window.printThis();

