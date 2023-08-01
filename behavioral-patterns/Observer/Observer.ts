/**
 * Observer
 *
 * Defines a one-to-many dependency between objects so
 * that when one object changes state, all its dependents
 * are notified and updated automatically.
 *
 *  Below is the structure of one possible implementation of
 * the pattern Observer.
 */

export interface Subject {
	attach: (observer: Observer) => void;
	detach: (observer: Observer) => void;
	notify: () => void;
}

export interface Observer {
	update: (subject?: Subject) => void;
}

class ConcreteSubject implements Subject {
	private observers: Array<Observer> = [];
	private state: any;

	public setState(newState: any) {
		this.state = newState;
		this.notify();
	}

	public getState() {
		return this.state;
	}

	public attach(observer: Observer) {
		if (this.observers.includes(observer)) {
			return false;
		}
		this.observers.push(observer);
		return true;
	}

	public detach(observer: Observer) {
		const indexOfObserver = this.observers.indexOf(observer);
		if (indexOfObserver === -1) {
			return false;
		}
		this.observers.splice(indexOfObserver, 1);
		return true;
	}

	public notify() {
		for (const observer of this.observers) {
			observer.update(this);
		}
		return this;
	}
}

class ConcreteObserver implements Observer {
	private state: Record<string, any> = {};
	private subject: Subject = null;

	constructor(subject: Subject) {
		this.subject = subject;
		this.subject.attach(this);
	}

	public update(subject?: Subject) {
		if (subject instanceof ConcreteSubject) {
			this.state = (this.subject as ConcreteSubject).getState();
		}
	}

	public destruct() {
		if (this.subject) {
			this.subject.detach(this);
		}
		this.state = {};
		this.subject = null;
	}
}


const concreteSubject = new ConcreteSubject();
const concreteObserver = new ConcreteObserver(concreteSubject);
