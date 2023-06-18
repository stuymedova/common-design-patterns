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
// Below is one possible template implementation of the
// pattern Observer.


export interface Subject {
	attach: (observer: Observer) => void;
	detach: (observer: Observer) => void;
	notify: () => void;
}

export interface Observer {
	update: (subject?: Subject) => void;
}

class ConcreteSubject implements Subject {
	private _observers: Array<Observer> = [];
	private _state: any;

	public set state(newState: any) {
		this._state = newState;
		this.notify();
	}

	public get state() {
		return this._state;
	}

	public attach(observer: Observer) {
		if (this._observers.includes(observer)) {
			return false;
		}
		this._observers.push(observer);
		return true;
	}
	
	public detach(observer: Observer) {
		const indexOfObserver = this._observers.indexOf(observer);
		if (indexOfObserver === -1) {
			return false;
		}
		this._observers.splice(indexOfObserver, 1);
		return true;
	}

	public notify() {
		for (const observer of this._observers) {
			observer.update(this);
		}
		return this;
	}
}

class ConcreteObserver implements Observer {
	private _state: any;

	public set state(newState: any) {
		this._state = newState;
	}

	public get state() {
		return this._state;
	}

	public update(subject?: Subject) {
		if (subject instanceof ConcreteSubject) {
			this.state = subject.state;
		}
	}
}
