/**
 * Singleton
 *
 * Ensures a class has only one instance and provides a
 * global point of access to it.
 *
 * Below is the structure of one possible implementation of
 * the pattern.
 */

export class Singleton {
	private static instance: Singleton;

	constructor() {
		if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
	}
}

const singleton = new Singleton();

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
