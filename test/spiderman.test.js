describe("Unit test for Spiderman class", () => {
	test('1) Create a spiderman object', () =>{
		//here goes the code which we want to use
		//instanciando objeto Spiderman -->
		const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
		//Expected validation
		expect(andrewGarfiled.name).toBe("Spiderman Sony");
		expect(andrewGarfiled.age).toBe(31);
		expect(andrewGarfiled.playedBy).toBe("Andrew Garfield");
		expect(andrewGarfiled.numberOfMovies).toBe(31);
		expect(andrewGarfiled.cinemaStudio).toBe("Sony");
	});
})
