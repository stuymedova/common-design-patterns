abstract class Component {
	public children: Component[] = [];
	private parent: Component = null;

	setParent(parent: Component) {
        this.parent = parent;
    }

	detachParent() {
        this.parent = null;
    }

    getParent(): Component {
        return this.parent;
    }

	operation() {}

	add(component: Component) {
		return false;
	}

	remove(component: Component) {
		return false;
	}

	getChild(index: number) {
		return null;
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

	getChild(index: number) {
		return this.children[index];
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
