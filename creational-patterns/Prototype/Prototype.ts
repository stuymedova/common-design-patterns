/**
 * Prototype
 *
 * Specify the kinds of objects to create using a
 * prototypical instance, and create new objects by
 * copying this prototype.
 *
 * Below is the structure of one possible implementation of
 * the pattern.
 */

interface Prototype {
	clone(): Prototype;
}

class ConcretePrototype1 implements Prototype {
	// Presumably has a set of useful methods beyond clone.
	clone() {
		return Object.create(this);
	}

	log() {
		console.log('Object prototype is one of ConcretePrototype1');
	}
}

class ConcretePrototype2 implements Prototype {
	// Presumably has a different set of useful methods.
	clone() {
		return Object.create(this);
	}

	log() {
		console.log('Object prototype is one of ConcretePrototype2');
	}
}

const concretePrototype1 = new ConcretePrototype1();
const concretePrototype2 = new ConcretePrototype2();
let client = concretePrototype1.clone();
client.log();
client = concretePrototype2.clone();
client.log();
