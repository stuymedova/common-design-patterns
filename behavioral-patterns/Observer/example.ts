/**
 * Observer Example
 *
 * A ClockTimer (Subject) responsible for notifying the
 * two clocks (Observers) whenever the time is changed
 * so they can redisplay themselves appropriately.
 */

import { Subject, Observer } from './Observer.ts';

interface ClockState {
	hours?: number,
	minutes?: number,
	seconds?: number,
}

class ClockTimer implements Subject {
	private observers: Array<Observer> = [];
	private date = new Date();

	constructor() {
		this.tick();
	}

	private tick() {
		const interval = setInterval(() => {
			clearInterval(interval);
			this.date = new Date();
			this.notify();
			this.tick();
		}, 1000);
	}

	public getHours() {
		return this.date.getHours();
	}
	public getMinutes() {
		return this.date.getMinutes();
	}
	public getSeconds() {
		return this.date.getSeconds();
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
	}
}

class DigitalClock implements Observer {
	private state: ClockState = {};
	private subject: ClockTimer | null = null;

	constructor(subject: ClockTimer) {
		this.subject = subject;
		this.subject.attach(this);
	}

	public update() {
		this.state.hours = this.subject?.getHours();
		this.state.minutes = this.subject?.getMinutes();
		this.state.seconds = this.subject?.getSeconds();

		this.draw();
	}

	public draw() {
		// Defines how to draw the digital clock.
		// Below is a filler for testing.
		console.log(
			'Digital Clock',
			`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`,
		);
	}

	public destruct() {
		if (this.subject) {
			this.subject.detach(this);
		}
		this.state = {};
		this.subject = null;
	}
}

/**
 * AnalogClock is a concrete object for displaying time
 * in the analog format.
 */
class AnalogClock implements Observer {
	private state: ClockState = {};
	private subject: ClockTimer | null = null;

	constructor(subject: ClockTimer) {
		this.subject = subject;
		this.subject.attach(this);
	}

	public update() {
		this.state.hours = this.subject?.getHours();
		this.state.minutes = this.subject?.getMinutes();
		this.state.seconds = this.subject?.getSeconds();

		this.draw();
	}

	public draw() {
		// Defines how to draw the analog clock.
		// Below is a filler for testing.
		console.log(
			'Analog Clock',
			`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`,
		);
	}

	public destruct() {
		if (this.subject) {
			this.subject.detach(this);
		}
		this.state = {};
		this.subject = null;
	}
}


const timer = new ClockTimer();
const digitalClock = new DigitalClock(timer);
const analogClock = new AnalogClock(timer);

setTimeout(() => {
	digitalClock.destruct();
	analogClock.destruct();
	console.log('---------------------------')
	console.log('Destructed the clocks after 5 seconds.');
}, 5000);

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
