import { BehaviorSubject } from "rxjs";

// Observable: send/emit notification to its Observers/Subscriptions.

// Observer/Subscription: receive notifications from its Observable.

// BehaviorSubject: send/emit notifications and receive notifications from its Self.

// BehaviorSubject is Observable and Observer in the same time.

// BehaviorSubject is a Hot Observer.

// BehaviorSubject class actually extends Observable class in its source code.

// BehaviorSubject emit/send to its Observer the last Notification that was sent before it subscription.

let number = 0;

const subject = new BehaviorSubject('Initial Value');

const subscription1 = subject.subscribe({
    next(data) { addItem("Subscription 1: " + data) },
    error(error) { addItem("Subscription 1: Error " + error) },
    complete() { addItem("Subscription 1: Completed") },
});


subject.next("let's Start Our Test"); 

// "subscription2" will receive this notification because "BehaviorSubject" sent the last Notification that was sent before it subscription
subject.next("......Subscription2 will be subscribed Now"); 

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
subject.next(`Final Call`);

function addItem(val: any) {
    const node = document.createElement('li');
    const nodeText = document.createTextNode(val);
    node.appendChild(nodeText);
    document.getElementById('output').appendChild(node);

}
