/**
 * Proxy
 *
 * Provides a surrogate or placeholder for another object
 * to control access to it.
 *
 * Below is the structure of one possible implementation
 * of the pattern Proxy.
 */

interface Subject {
	request(): void;
}

class RealSubject implements Subject {
	request() {
		// Request handling code
	}
}

class RealSubjectProxy implements Subject {
	private realSubject: RealSubject;

	constructor(realSubject: RealSubject) {
		this.realSubject = realSubject;
	}

	request() {
		this.realSubject.request();
		console.log('Made request to RealSubject');
	}
}

const realSubject = new RealSubject();
const proxy = new RealSubjectProxy(realSubject);
proxy.request();
