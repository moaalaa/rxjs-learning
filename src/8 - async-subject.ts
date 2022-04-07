import { AsyncSubject } from "rxjs";

// Observable: send/emit notification to its Observers/Subscriptions.

// Observer/Subscription: receive notifications from its Observable.

// AsyncSubject: send/emit notifications and receive notifications from its Self.

// AsyncSubject is Observable and Observer in the same time.

// AsyncSubject is a Hot Observer.

// AsyncSubject class actually extends Observable class in its source code.

// AsyncSubject emit/send to its Observer the Notification that was sent once the "complete" method is called.


let number = 0;

const subject = new AsyncSubject();

// "subscription1" will receive this notification because complete method has been called
// "subscription2" will not receive this notification because complete method has been called after it unsubscribed
subject.next("let's Start Our Test");

const subscription1 = subject.subscribe({
    next(data) { addItem("Subscription 1: " + data) },
    error(error) { addItem("Subscription 1: Error " + error) },
    complete() { addItem("Subscription 1: Completed") },
});

const subscription2 = subject.subscribe({
    next(data) { addItem("Subscription 2: " + data) },
    error(error) { addItem("Subscription 2: Error " + error) },
    complete() { addItem("Subscription 2: Completed") },
});

subscription2.unsubscribe();

subject.complete();

function addItem(val: any) {
    const node = document.createElement('li');
    const nodeText = document.createTextNode(val);
    node.appendChild(nodeText);
    document.getElementById('output').appendChild(node);

}
