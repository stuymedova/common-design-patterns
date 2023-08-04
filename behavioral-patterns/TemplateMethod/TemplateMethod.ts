/**
 * Template Method
 *
 * Defines the skeleton of an algorithm in an operation,
 * deferring some steps to subclasses. Template Method
 * lets subclasses redefine certain steps of an algorithm
 * without changing the algorithm's structure.
 *
 * Below is the structure of one possible implementation of
 * the pattern.
 */

abstract class AbstractClass {
	templateMethod() {
		this.primitiveOperation();
		this.hook();
	}

	abstract primitiveOperation(): void;

	protected hook() {
		// Default implementation
	}
}

class ConcreteClass extends AbstractClass {
	primitiveOperation() {
		// Operation code is defined here
	}

	hook() {
		// Overrides default implementation
	}
}

const concreteClass = new ConcreteClass();
concreteClass.templateMethod();

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
