import { Singleton } from './Singleton.ts';

function test() {
    const session = new Singleton();
    const sessionCounterpart = new Singleton();

    if (session === sessionCounterpart) {
        console.log('Singleton works, both variables hold a reference to the same instance');
    } else {
        console.log('Singleton failed, variables hold references to different instances');
    }
}
test();

// Fixes "Duplicate identifier" TS error by stating that
// this file is an ES module.
export {};
