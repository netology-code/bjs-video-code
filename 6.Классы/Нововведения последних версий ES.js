class Cat {
	#health;
	constructor(){
		this.#health = 100;
	}

	eat(){
		this.#health += 10;
	}
}