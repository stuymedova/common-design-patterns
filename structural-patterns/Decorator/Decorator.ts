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

/**
 * Component defines the interface for objects that can
 * have responsibilities added to them dynamically.
 */
interface Component {
	operation: () => void;
}

/**
 * ConcreteComponent defines an object to which additional
 * responsibilities can be attached.
 */
class ConcreteComponent implements Component {
	public operation() {}
}

/**
 * Decorator maintains a reference to a Component object
 * and defines an interface that conforms to Component's
 * interface.
 */
class Decorator implements Component {
	protected component: Component;

	constructor(component: Component) {
		this.component = component;
	}

	public operation() {
		return this.component.operation();
	}
}

/**
 * Concrete Decorators add responsibilities to the
 * component.
 */
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
