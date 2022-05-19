let age = 16;
switch(true){
  case age % 3 === 1:
  case age > 18:
    console.log("Добро пожаловать в бар");
    break;
  default:
    console.log("Добро пожаловать!");
    break;
}

for(let i = 1; i < 100; i+=3){
  if(i % 4 === 0){
    console.log('завершаем текущую итерацию', i);
    break;
  }
  
  console.log(i);
}