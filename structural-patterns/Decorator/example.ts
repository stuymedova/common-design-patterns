interface VisualComponent {
	draw: () => void;
}

class TextView implements VisualComponent {
	public draw() {}
}

class ComponentDecorator implements VisualComponent {
	protected component: VisualComponent;

	constructor(component: VisualComponent) {
		this.component = component;
	}

	public draw() {
		return this.component.draw();
	}
}

class ScrollDecorator extends ComponentDecorator {
	public scrollPosition: number;

	constructor(component: VisualComponent) {
		super(component);
		this.scrollPosition = 0;
	}

	public draw() {
		super.draw();
		this.scrollTo();
	}

	private scrollTo() {}
}

class BorderDecorator extends ComponentDecorator {
	public borderWidth: number;

	constructor(component: VisualComponent) {
		super(component);
		this.borderWidth = 1;
	}

	public draw() {
		super.draw();
		this.drawBorder();
	}

	private drawBorder() {}
}

const textView = new TextView();
const borderedScrollableTextView =
	new BorderDecorator(
		new ScrollDecorator(textView)
	);
borderedScrollableTextView.draw()

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
