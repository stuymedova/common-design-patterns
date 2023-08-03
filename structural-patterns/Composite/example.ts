abstract class Graphic {
	private parent: Graphic = null;

	abstract operation(): void;

	setParent(parent: Graphic) {
        this.parent = parent;
    }

	detachParent() {
        this.parent = null;
    }

    getParent(): Graphic {
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

class Line extends Graphic {
	operation() {
		// Does something
	}
}

class Rectangle extends Graphic {
	operation() {
		// Does something
	}
}

class Picture extends Graphic {
	public graphics: Graphic[] = [];

	operation() {
		for (const graphic of this.graphics) {
			graphic.operation();
		}
	}

	add(graphic: Graphic) {
		graphic.setParent(this);
		this.graphics.push(graphic);
		return true;
	}

	remove(graphic: Graphic) {
		graphic.detachParent();
		const graphicIndex = this.graphics.indexOf(graphic);
		this.graphics.splice(graphicIndex, 1);
		return true;
	}

	isComposite() {
        return true;
    }
}


const picture1 = new Picture();
const line1 = new Line();
const rect1 = new Rectangle();
picture1.add(line1);
picture1.add(rect1);

const picture2 = new Picture();
const line2 = new Line();
const rect2 = new Rectangle();
picture2.add(line2);
picture2.add(rect2);
picture2.add(picture1);

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
