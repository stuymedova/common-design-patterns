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

/**
 * ClockTimer is a concrete subject for storing and
 * maintaining the time of day. It notifies its observers
 * every second. ClockTimer provides the interface for
 * retrieving individual time units such as the hour,
 * minute, and second.
 */
class ClockTimer implements Subject {
	private _observers: Array<Observer> = [];
	private _date = new Date();

	constructor() {
		this.tick();
	}

	private tick() {
		setInterval(() => {
			this._date = new Date();
			this.notify();
			this.tick();
		}, 1000);
	}

	public getHour() {
		return this._date.getHours();
	}
	public getMinute() {
		return this._date.getMinutes();
	}
	public getSecond() {
		return this._date.getSeconds();
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
	}
}

/**
 * DigitalClock is a concrete object for displaying time
 * in the digital format.
 */
class DigitalClock implements Observer {
	private _state: ClockState = {};
	private _subject: ClockTimer | null = null;

	constructor(subject: ClockTimer) {
		this._subject = subject;
		this._subject.attach(this);
	}

	public update() {
		this._state.hour = this._subject?.getHour();
		this._state.minute = this._subject?.getMinute();

		this.draw();
	}

	public draw() {
		// Defines how to draw the digital clock.
		// Below is a filler for testing.
		console.log('Digital Clock', this._state.hour, this._state.minute);
	}

	public destruct() {
		if (this._subject) {
			this._subject.detach(this);
		}
		this._state = {};
		this._subject = null;
	}
}

/**
 * AnalogClock is a concrete object for displaying time
 * in the analog format.
 */
class AnalogClock implements Observer {
	private _state: ClockState = {};
	private _subject: ClockTimer | null = null;

	constructor(subject: ClockTimer) {
		this._subject = subject;
		this._subject.attach(this);
	}

	public update() {
		this._state.hour = this._subject?.getHour();
		this._state.minute = this._subject?.getMinute();

		this.draw();
	}

	public draw() {
		// Defines how to draw the analog clock.
		// Below is a filler for testing.
		console.log('Analog Clock', this._state.hour, this._state.minute);
	}

	public destruct() {
		if (this._subject) {
			this._subject.detach(this);
		}
		this._state = {};
		this._subject = null;
	}
}

const timer = new ClockTimer();
const digitalClock = new DigitalClock(timer);
const analogClock = new AnalogClock(timer);
