try {
  console.log('какая-нибудь строка')
} catch (error) {
  console.log(error);
}

try {
  setTimeout(() => { throw new Error("ошибка!")}, 5000);
} catch (error) {
  console.log(error);
}

setTimeout(() => {
  console.log("мы внутри колбека");
  try {
    console.log("мы внутри конструкции try");
    throw new Error("ошибка!")
  } catch (error) {
    console.log("мы внутри блока catch");
    console.log(error);
  }
}, 5000);
