/**
 * Bridge
 *
 * Decouples an abstraction from its implementation so
 * that the two can vary independently.
 *
 *           A
 *         /   \                    A         N
 *      Aa       Ab      ——>      /   \      / \
 *     /  \     /  \           Aa(N) Ab(N)  1   2
 *   Aa1  Aa2  Ab1  Ab2
 *
 * Below is the structure of one possible implementation of
 * the pattern.
 */

class Abstraction {
	protected implementor: Implementor;

	constructor(implementor: Implementor) {
		this.implementor = implementor;
	}

	operation() {
		this.implementor.operationImplementor();
	}
}

class RefinedAbstraction extends Abstraction {
	operation() {
		// Also does something else
		this.implementor.operationImplementor();
	}
}

interface Implementor {
	operationImplementor(): void;
}

class ConcreteImplementorA implements Implementor {
	operationImplementor() {
		// Provides concrete implementation
	}
}

class ConcreteImplementorB implements Implementor {
	operationImplementor() {
		// Provides different concrete implementation
	}
}


const implementorA = new ConcreteImplementorA();
const abstraction = new Abstraction(implementorA);
abstraction.operation();

const implementorB = new ConcreteImplementorB();
const refinedAbstraction = new RefinedAbstraction(implementorB);
refinedAbstraction.operation();

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
