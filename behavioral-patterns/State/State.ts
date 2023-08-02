/**
 * State
 *
 * Allows an object to alter its behavior when its
 * internal state changes. The object will appear to
 * change its class.
 *
 * Below is the structure of one possible implementation of
 * the pattern.
 */

class Context {
	private state: State;

	constructor(state: State) {
		this.setState(state);
	}

	setState(state: State) {
		this.state = state;
	}

	request() {
		this.state.handle(this);
	};
}

interface State {
	handle: (context: Context) => void;
};

class ConcreteStateA implements State {
	handle(context: Context) {
		// State-specific behaviour
	}
}

class ConcreteStateB implements State {
	handle(context: Context) {
		// State-specific behaviour
	}
}


const context = new Context(new ConcreteStateA());
context.request();
context.setState(new ConcreteStateB());
context.request();

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
