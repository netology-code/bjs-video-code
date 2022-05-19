function showTariff(name, ...advantages){
  console.log(`Тариф: ${name}`);
  for(let i = 0; i < advantages.length; i++){
    console.log(`- ${advantages[i]}`);
  }
}

showTariff("Базовый", "Кровать на чердаке", "Беседы с дядей Ваней");
showTariff("Премиум", "Кровать на чердаке", "Беседы с дядей Ваней", "Кофе в постель", "Раздельный санузел");
const sum = function (...args){
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}
console.log(sum(1,2,3,4,5,6))
