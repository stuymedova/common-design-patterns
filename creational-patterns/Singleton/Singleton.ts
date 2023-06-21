/**
 * Singleton
 * 
 * Ensures a class has only one instance and provides a
 * global point of access to it.
 * 
 * It's important for some classes to have exactly one
 * instance. Although there can be many printers in a
 * system, there should be only one printer spooler. There
 * should be only one file system and one window manager.
 * A digital filter will have one A/D converter. An
 * accounting system will be dedicated to serving one
 * company.
 * 
 * The Singleton class ensures that no other instance of
 * the object can be created and does so by intercepting
 * requests to create new objects.
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
