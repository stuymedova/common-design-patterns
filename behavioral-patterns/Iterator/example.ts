interface Iterator<T> {
	first(): void;
	next(): void;
	isDone(): boolean;
	getCurrent(): T | undefined;
}

interface Aggregate<T> {
	makeIterator(iterator: Iterator<T>): Iterator<T>;
}

class ListIterator implements Iterator<string> {
	private current: number;
	private list: List;

	constructor(list: List) {
		this.current = 0;
		this.list = list;
	}

	first() {
		this.current = 0;
	}

	next() {
		this.current += 1;
	}

	isDone() {
		return this.current >= this.list.items.length;
	}

	getCurrent() {
		return this.list.items[this.current];
	}
}

class ListBackwardsIterator implements Iterator<string> {
	private current: number;
	private list: List;

	constructor(list: List) {
		this.current = list.items.length - 1;
		this.list = list;
	}

	first() {
		this.current = this.list.items.length - 1;
	}

	next() {
		this.current -= 1;
	}

	isDone() {
		return this.current < 0;
	}

	getCurrent() {
		return this.list.items[this.current];
	}
}

class List implements Aggregate<string> {
	public items: string[] = [];

	constructor(items?: string[]) {
		if (items) {
			this.items = items;
		}
	}

	makeIterator() {
		return new ListIterator(this);
	}

	makeReverseIterator() {
		return new ListBackwardsIterator(this);
	}
}


const list = new List(['hello', 'world']);

const iterator = list.makeIterator();
while (!iterator.isDone()) {
	console.log(iterator.getCurrent());
	iterator.next();
}

console.log('⇆')

const reverseIterator = list.makeReverseIterator();
while (!reverseIterator.isDone()) {
	console.log(reverseIterator.getCurrent());
	reverseIterator.next();
}

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
