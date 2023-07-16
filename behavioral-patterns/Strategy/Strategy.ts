/**
 * Strategy
 *
 * Defines a family of algorithms, encapsulates each one,
 * and makes them interchangeable. Strategy lets the
 * algorithm vary independently from clients that use it.
 */

class Context {
	private strategy: Strategy = null;

	constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

	setStrategy(strategy: Strategy) {
		this.strategy = strategy;
	}

	contextInterface() {
		return this.strategy.doAlgorithm();
	}
}

interface Strategy {
	doAlgorithm: () => void;
}

class ConcreteStrategyA implements Strategy {
	doAlgorithm() {
		// Does something
	}
}

class ConcreteStrategyB implements Strategy {
	doAlgorithm() {
		// Does something
	}
}

class ConcreteStrategyC implements Strategy {
	doAlgorithm() {
		// Does something
	}
}
