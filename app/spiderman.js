class Spiderman{
	constructor(name,age,playedBy,numberOfMovies,cinemaStudio){
		this.name = name;
		this.age = age;
		this.playedBy = playedBy;
		this.numberOfMovies = numberOfMovies;
		this.cinemaStudio = cinemaStudio;
	}
	tomHolland(message){
		//metodo para obtener informacion
		console.log(`Hello, My name is ${this.name} from ${this.cinemaStudio}`)
	}
}

//exportando modulo
module.exports = Spiderman
