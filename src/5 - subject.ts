import { Subject } from "rxjs";

// Observable: send/emit notification to its Observers/Subscriptions.

// Observer/Subscription: receive notifications from its Observable.

// Subject: send/emit notifications and receive notifications from its Self.

// Subject is Observable and Observer in the same time.

// Subject is a Hot Observer.

// Subject class actually extends Observable class in its source code.

let number = 0;

const subject = new Subject();

const subscription1 = subject.subscribe({
    next(data) { addItem("Subscription 1: " + data) },
    error(error) { addItem("Subscription 1: Error " + error) },
    complete() { addItem("Subscription 1: Completed") },
});

// "subscription2" will not receive this notification because it will subscribe after it sent
subject.next("let's Start Our Test"); 

const subscription2 = subject.subscribe({
    next(data) { addItem("Subscription 2: " + data) },
    error(error) { addItem("Subscription 2: Error " + error) },
    complete() { addItem("Subscription 2: Completed") },
});

// "subscription2" will receive this notification because it was subscribed before it sent
subject.next(`It Called ${number++}`);
subject.next(`It Called ${number++}`);

subscription2.unsubscribe();

// "subscription2" not will receive this notification because it was unsubscribed
subject.next(`Final Call ${number++}`);

function addItem(val: any) {
    const node = document.createElement('li');
    const nodeText = document.createTextNode(val);
    node.appendChild(nodeText);
    document.getElementById('output').appendChild(node);

}
