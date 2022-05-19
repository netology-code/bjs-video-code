class Human {
	constructor(name){
		this.name = name;
	}

	speak(){
		console.log("пользователь говорит полезную информацию");
	}
}

class Man extends Human{
	constructor(name){
		super(name);
		this.type = "мужской пол";
	}

	buildHouse(){
		console.log("строим дом");
	}

	speak(){
		//super.speak();
		console.log("дополнительные действия");
	}
}

let user = new Man("Николай Петрович");