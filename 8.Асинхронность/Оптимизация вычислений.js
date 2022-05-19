const sumStep = (n, itemsPerStep, onload) => {
  const size = Math.ceil(n / itemsPerStep); // количество шагов
  let index = 0; // текущий шаг
  let sum = 0; // результат суммирования

  return () => {
    if(index === size){
      onload(sum);
      return;
    }

    const start = index * itemsPerStep;
    const end = Math.min(n+1, (index + 1) * itemsPerStep);

    for (let i = start; i < end; i++) {
      sum += i;
    }
    console.log(`Шаг: ${index}, ${sum}`);
    index++;

    sheduleStep();
  }
}

const onload = (sum) => console.log(sum);
const step = sumStep(100000, 25000, onload);
const sheduleStep = () => setTimeout(step, 100);

sheduleStep();