const Spiderman=require('./../app/spiderman') //importando clase
describe("Unit test for Spiderman class", () => {
	test('1) Create a spiderman object', () =>{
		//here goes the code which we want to use
		//instanciando objeto Spiderman -->
		const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
		//Expected validation
		expect(andrewGarfield.name).toBe("Spiderman Sony");
		expect(andrewGarfield.age).toBe(31);
		expect(andrewGarfield.playedBy).toBe("Andrew Garfield");
		expect(andrewGarfield.numberOfMovies).toBe(2);
		expect(andrewGarfield.cinemaStudio).toBe("Sony");
	});
})
