class Spiderman{
	constructor(name,age,playedBy,numberOfMovies,cinemaStudio){
		this.name = name;
		this.age = age;
		this.playedBy = playedBy;
		this.numberOfMovies = numberOfMovies;
		this.cinemaStudio = cinemaStudio;
	}
	getInfo(){
		//metodo para obtener informacion
		return `Hey, I'm ${this.playedBy} from ${this.cinemaStudio}`
	}
}

//exportando modulo
module.exports = Spiderman
