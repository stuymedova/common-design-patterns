/**
 * Singleton
 * 
 * Ensures a class has only one instance and provides a
 * global point of access to it.
 * 
 * Below the structure of one possible implementation of
 * the pattern Singleton.
 */

export class Singleton {
	private static _instance: Singleton;

	constructor() {
		if (!Singleton._instance) {
            Singleton._instance = this;
        }
        return Singleton._instance;
	}
}
