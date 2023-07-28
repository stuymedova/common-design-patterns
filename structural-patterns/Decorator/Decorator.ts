/**
 * Decorator (Wrapper)
 *
 * Attaches additional responsibilities to a given
 * object dynamically by enclosing (wrapping) said object
 * within itself.
 *
 * Below the structure of one possible implementation of
 * the pattern Decorator.
 */

interface Component {
	operation: () => void;
}

class ConcreteComponent implements Component {
	public operation() {}
}

class Decorator implements Component {
	protected component: Component;

	constructor(component: Component) {
		this.component = component;
	}

	public operation() {
		return this.component.operation();
	}
}

class ConcreteDecoratorA extends Decorator {
	public addedState: any;

	constructor(component: Component) {
		super(component);
		this.addedState = {};
	}

	public operation() {
		super.operation();
		this.addedBehaviour();
	}

	private addedBehaviour() {}
}

class ConcreteDecoratorB extends Decorator {
	public addedState: any;

	constructor(component: Component) {
		super(component);
		this.addedState = {};
	}

	public operation() {
		super.operation();
		this.addedBehaviour();
	}

	private addedBehaviour() {}
}

const concreteComponent = new ConcreteComponent();
const decoratedComponent =
	new ConcreteDecoratorA(
		new ConcreteDecoratorB(concreteComponent)
	);
decoratedComponent.operation();
