// Observer (p.293)
// 
// Establishes a one-to-many relationship between objects 
// so that when one object changes state, all its 
// dependents are notified and updated automatically.
// The interaction between those objects is called 
// publish-subscribe.
// 
// Useful for communicating changes between logically 
// separated parts of an app such as between models and 
// views.
// 
// - Participants: Subject, Observer.
//   Subject is the entity Observers observe. Subject may
//   have any number of dependent Observers. Whenever the
//   Subject undergoes a change in state, it sends out the
//   notification to its Observers. In addition, each
//   Observer may query the Subject to synchronize its state
//   with the subject's state.
//
// Below is one possible implementation of the pattern
// Observer.


interface Subject {
	attach: (observer: Observer) => void;
	detach: (observer: Observer) => void;
	notify: () => void;
}

interface Observer {
	update: (subject?: Subject) => void;
}

class ConcreteSubject implements Subject {
	private observers: Array<Observer> = [];
	private _state: any;

	set state(newState: any) {
		this._state = newState;
		this.notify();
	}

	get state() {
		return this._state;
	}

	attach(observer: Observer) {
		if (this.observers.includes(observer)) {
			return false;
		}
		this.observers.push(observer);
		return true;
	}
	
	detach(observer: Observer) {
		const indexOfObserver = this.observers.indexOf(observer);
		if (indexOfObserver === -1) {
			return false;
		}
		this.observers.splice(indexOfObserver, 1);
		return true;
	}

	notify() {
		for (const observer of this.observers) {
			observer.update(this);
		}
		return this;
	}
}

class ConcreteObserver implements Observer {
	private _state: any;

	set state(newState: any) {
		this._state = newState;
	}

	get state() {
		return this._state;
	}

	update(subject?: Subject) {
		if (subject instanceof ConcreteSubject) {
			this.state = subject.state;
		}
	}
}
