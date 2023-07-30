/**
 * Observer Example
 *
 * A ClockTimer (Subject) responsible for notifying the
 * two clocks (Observers) whenever the time is changed
 * so they can redisplay themselves appropriately.
 */

import { Subject, Observer } from './Observer.ts';

interface ClockState {
	hour?: number,
	minute?: number,
};

class ClockTimer implements Subject {
	private observers: Array<Observer> = [];
	private date = new Date();

	constructor() {
		this.tick();
	}

	private tick() {
		setInterval(() => {
			this.date = new Date();
			this.notify();
			this.tick();
		}, 1000);
	}

	public getHour() {
		return this.date.getHours();
	}
	public getMinute() {
		return this.date.getMinutes();
	}
	public getSecond() {
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
		this.state.hour = this.subject?.getHour();
		this.state.minute = this.subject?.getMinute();

		this.draw();
	}

	public draw() {
		// Defines how to draw the digital clock.
		// Below is a filler for testing.
		console.log('Digital Clock', this.state.hour, this.state.minute);
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
		this.state.hour = this.subject?.getHour();
		this.state.minute = this.subject?.getMinute();

		this.draw();
	}

	public draw() {
		// Defines how to draw the analog clock.
		// Below is a filler for testing.
		console.log('Analog Clock', this.state.hour, this.state.minute);
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
