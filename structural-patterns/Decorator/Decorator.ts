/**
 * Decorator (Wrapper)
 * 
 * Attach additional responsibilities to an object
 * dynamically. Decorators provide a flexible alternative
 * to subclassing for extending functionality.
 * 
 * One way to add responsibilities is with inheritance.
 * Inheriting a border from another class puts a border
 * around every subclass instance. This is inflexible,
 * however, because the choice of border is made
 * statically. A client can't control how and when to
 * decorate the component with a border.
 * 
 * A more flexible approach is to enclose the component in
 * another object that adds the border. The enclosing
 * object is called a decorator. The decorator conforms to
 * the interface of the component it decorates so that its
 * presence is transparent to the component's clients. The
 * decorator forwards requests to the component and may
 * perform additional actions (such as drawing a border)
 * before or after forwarding. Transparency lets you nest
 * decorators recursively, thereby allowing an unlimited
 * number of added responsibilities.
 * 
 * The following object diagram shows how to compose a
 * TextView object with BorderDecorator and ScrollDecorator
 * objects to produce a bordered, scrollable text view:
 * 
 *  ╭──────────────────╮
 *  │ aBorderDecorator │         ╭──────────────────╮
 *  ├──────────────────┤         │ aScrollDecorator │         ╭──────────────────╮
 *  │ component      ●─┼────────>├──────────────────┤         │ aTextView        │
 *  ╰──────────────────╯         │ component      ●─┼────────>├──────────────────┤
 *                               ╰──────────────────╯         │                  │
 *                                                            ╰──────────────────╯
 * 
 * Below the structure of one possible implementation of
 * the pattern Observer.
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
 * ConcreteDecorators adds responsibilities to the
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
