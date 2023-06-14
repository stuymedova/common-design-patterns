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


interface Subject {
	observers: Record<string, Observer>;
	attach: (observer: Observer) => void;
	detach: (observer: Observer) => void;
	notify: () => void;
}

interface Observer {
	update: (subject?: Subject) => void;
}

class ConcreteSubject implements Subject {
	readonly observers: Record<string, Observer>;
	public state;

	attach() {

	}
	
	detach() {}

	notify() {
		for (const observer of Object.values(this.observers)) {
			observer.update(this);
		}
		return this;
	}
}

class ConcreteObserver implements Observer {
	public state;

	update(subject?: Subject) {
		if (subject instanceof ConcreteSubject) {
			// do something
		}
	}
}
