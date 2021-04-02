const faker = require("faker");

var database = { products: [] };

for (var i = 1; i <= 100; i++) {
	database.products.push({
		id: i,
		name: faker.random.words(),
		description: faker.random.words(),
		slug: faker.lorem.slug(4),
		amount: faker.datatype.number({ min: 10, max: 100 }),
		created_at: `${faker.date.past()}`,
		updated_at: `${faker.date.past()}`,
	});
}

console.log(database);
