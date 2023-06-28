interface VisualComponent {
	draw: () => void;
}

class TextView implements VisualComponent {
	public draw() {}
}

class ComponentDecorator implements VisualComponent {
	protected _component: VisualComponent;

	constructor(component: VisualComponent) {
		this._component = component;
	}

	public draw() {
		return this._component.draw();
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
