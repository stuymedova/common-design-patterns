/**
 * Factory Method
 *
 * Defines an interface for creating an object, but lets
 * subclasses decide which class to instantiate. Factory
 * Method lets a class defer instantiation to subclasses.
 *
 * Below is the structure of one possible implementation of
 * the pattern.
 */

interface Product {
	anOperation: () => void;
}

abstract class Creator {
	public abstract factoryMethod(): Product;

	anOperation() {
		const product = this.factoryMethod();
		return product.anOperation();
	}
}

class ConcreteCreatorA extends Creator {
	factoryMethod() {
		return new ConcreteProductA();
	}
}

class ConcreteCreatorB extends Creator {
	factoryMethod() {
		return new ConcreteProductB();
	}
}

class ConcreteProductA implements Product {
	anOperation() {
		// Does something
	}
}

class ConcreteProductB implements Product {
	anOperation() {
		// Does something
	}
}


const preferCreatorA = true;
const creator = preferCreatorA
	? new ConcreteCreatorA()
	: new ConcreteCreatorB();
creator.anOperation();
