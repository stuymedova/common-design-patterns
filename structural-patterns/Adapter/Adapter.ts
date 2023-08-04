/**
 * Adapter
 *
 * Converts the interface of a class into another
 * interface clients expect. Adapter lets classes work
 * together that couldn't otherwise because of
 * incompatible interfaces.
 *
 * Below is the structure of one possible implementation of
 * the pattern.
 */

interface Target {
	request(): void;
}

class Client {
	private targets: Target[] = [];

	public addTarget(target: Target) {
		this.targets.push(target);
	}

	public makeRequests() {
		for (const target of this.targets) {
			target.request();
		}
	}
}

class MyTarget implements Target {
	public request() {
		// Does something
	}
}

class Adaptee {
	public specificRequest() {
		// Does something
	}
}

class Adapter {
	private adaptee: Adaptee;

	constructor() {
		this.adaptee = new Adaptee();
	}

	public request() {
		this.adaptee.specificRequest();
	}
}


const client = new Client();
client.addTarget(new MyTarget());
client.addTarget(new Adapter());
client.makeRequests();

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
