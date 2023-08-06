/**
 * Iterator
 *
 * Provides a way to access the elements of an aggregate
 * object sequentially without exposing its underlying
 * representation.
 *
 * Below is the structure of one possible implementation of
 * the pattern.
 */

interface Iterator<T> {
	first(): void;
	next(): void;
	isDone(): boolean;
	getCurrent(): T | undefined;
}

interface Aggregate<T> {
	makeIterator(iterator: Iterator<T>): Iterator<T>;
}

class ConcreteIterator implements Iterator<any> {
	private current: number;
	private list: ConcreteAggregate;

	constructor(list: ConcreteAggregate) {
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

class ConcreteAggregate implements Aggregate<any> {
	public items: any[] = [];

	constructor(items?: any[]) {
		if (items) {
			this.items = items;
		}
	}

	makeIterator() {
		return new ConcreteIterator(this);
	}
}


const list = new ConcreteAggregate([1, 2, 3]);

const iterator = list.makeIterator();
while (!iterator.isDone()) {
	console.log(iterator.getCurrent());
	iterator.next();
}

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
