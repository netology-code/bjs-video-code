let result = (function (){
  let count = 0;
  function printCounter(){
    console.log(count);
  }

  function incrementCounter(){
    count++;
  }

  return [printCounter, incrementCounter];
})()