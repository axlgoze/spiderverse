const Spiderman = require('./../app/spiderman')

describe("Unit Test for Holland method", () =>{
	test('2) Use the method getInfo()', () =>{
		//código que queremos usar
		const tomHolland = new Spiderman("Spiderman Marvel", "25", "Tom Holland", 5, "Marvel")
		//validar__respuesta esperada
		expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
	});
})
