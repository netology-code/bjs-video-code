class BMW {
	constructor(name, color){
		this.carName = name;
		this.color = color;
	}
}

let garage = [
	new BMW("ласточка", "синий"),
	new BMW("принцесса", "белый")
];

let oleg = {
	name: "Олег",
	lastName: "Петров",
	gender: "мужчина",
	type: "человек",
	age: 15,
}

let ivan = {
	name: "Иван",
	lastName: "Иванов",
	gender: "мужчина",
	type: "человек",
	age: 20,
}

let nikita = {
	name: "Никита",
	lastName: "Романов",
	gender: "мужчина",
	type: "человек",
}

class Human{
	constructor(name, lastName, age = null){
		this.name = name;
		this.lastName = lastName;
		this.gender = "мужчина";
		this.type = "человек";
		this.age = age;
	}
}

let persons = [
	new Human("Олег", "Петров", 15),
	new Human("Иван", "Иванов", 20),
	new Human("Никита", "Романов"),
]