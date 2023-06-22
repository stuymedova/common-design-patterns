/**
 * Abstract Factory
 * 
 * Provides an interface for creating families of related
 * or dependent objects without specifying their concrete
 * classes.
 * 
 * Below the structure of one possible implementation of
 * the pattern Abstract Factory.
 */

interface AbstractFactory {
	createProductA: () => AbstractProductA;
	createProductB: () => AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
	createProductA() {
		return new ProductA1();
	}

	createProductB() {
		return new ProductB1();
	}
}
class ConcreteFactory2 implements AbstractFactory {
	createProductA() {
		return new ProductA2();
	}

	createProductB() {
		return new ProductB2();
	}
}

interface AbstractProductA {}
interface AbstractProductB {}

class ProductA1 implements AbstractProductA {}
class ProductA2 implements AbstractProductA {}

class ProductB1 implements AbstractProductB {}
class ProductB2 implements AbstractProductB {}
