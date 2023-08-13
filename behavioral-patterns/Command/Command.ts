/**
 * Command
 *
 * Encapsulate a request as an object, thereby letting you
 * parameterize clients with different requests, queue or
 * log requests, and support undoable operations.
 *
 * Below is the structure of one possible implementation of
 * the pattern.
 */

class Invoker {
	request(command: Command) {
		command.execute();
	}
}

interface Command {
	execute(): void;
}

class ConcreteCommand implements Command {
	private receiver: Receiver;

	constructor(receiver: Receiver) {
		this.receiver = receiver;
	}

	execute() {
		this.receiver.action();
	}
}

class Receiver {
	action() {
		// Knows how to perform an action
	}
}


const receiver = new Receiver();
const invoker = new Invoker();
invoker.request(new ConcreteCommand(receiver));

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
