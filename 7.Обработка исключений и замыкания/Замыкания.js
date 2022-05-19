function createGenerator(start){
  return function() {
    console.log(start++);
  }
}

let tick = createGenerator(1);
tick();
tick();
tick();

let tick10 = createGenerator(10);
tick10();
tick10();
tick10();