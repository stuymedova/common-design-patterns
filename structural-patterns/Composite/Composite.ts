abstract class Component {
	private parent: Component = null;

	abstract operation(): void;

	setParent(parent: Component) {
        this.parent = parent;
    }

	detachParent() {
        this.parent = null;
    }

    getParent(): Component {
        return this.parent;
    }

	add(component: Component) {
		throw new Error('Invalid operation');
	}

	remove(component: Component) {
		throw new Error('Invalid operation');
	}

	isComposite() {
        return false;
    }
}

class Leaf extends Component {
	operation() {
		// Does something
	}
}

class Composite extends Component {
	public children: Component[] = [];

	operation() {
		for (const child of this.children) {
			child.operation();
		}
	}

	add(component: Component) {
		component.setParent(this);
		this.children.push(component);
		return true;
	}

	remove(component: Component) {
		component.detachParent();
		const graphicIndex = this.children.indexOf(component);
		this.children.splice(graphicIndex, 1);
		return true;
	}

	isComposite() {
        return true;
    }
}


const composite1 = new Composite();
const leaf1 = new Leaf();
composite1.add(leaf1);

const picture2 = new Composite();
const leaf2 = new Leaf();
picture2.add(leaf2);
picture2.add(composite1);

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
