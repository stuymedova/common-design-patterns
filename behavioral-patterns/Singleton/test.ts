import { Singleton } from './Singleton.ts';

function test() {
    const s1 = new Singleton();
    const s2 = new Singleton();
    
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}
test();
