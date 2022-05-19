let methodName = 'calculateAverage';
class Sportsman{
	constructor(){
		this.scores = [];
	}

	addScore(score){
		this.scores.push(score);
	}

	['calculate'+'Average'](){
		if(this.scores.length === 0){
			return 0;
		}

		let summ = 0;
		for (let i = 0; i < this.scores.length; i++) {
			summ += this.scores[i];			
		}
		return summ / this.scores.length;
	}
}

let olga = new Sportsman();
olga.addScore(9);
olga.addScore(10);
olga.addScore(10);
console.log(olga.calculateAverage());