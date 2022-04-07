import { Observable } from "rxjs";

let number = 1;

// Observable -> Helps to Manage and dealing with streams and it send 3 types of notification for its observer (next, error and complete)
const observable = new Observable(subscriber => {

    setInterval(() => subscriber.next(`It Called ${number++}`), 2000);
    
    
    // Only Error Or Data Notification Should be Sent to Observer
    // subscriber.error('Error In Data'); // Will stop Observer "next" and "complete" Notification
    // subscriber.complete(); // Will stop Observer "next" and "error" Notification

    subscriber.next(`It Called ${number++}`);
});

// observable.subscribe() -> create an Observer that listen and receive Notification from Observable
// When Observer subscribe to Observable it will return a subscription

// Only Next Notification Callback
// observable.subscribe(data => addItem(data));

// Next, Error and Complete Notifications Callback
const subscription = observable.subscribe({
    next(data) { addItem(data) },
    error(error) { addItem('Error ' + error) },
    complete() { addItem('completed') }
});

// Adding Another Observer that will return a new subscription
const subscription2 = observable.subscribe(data => addItem(data));

// Create Child Subscription to Unsubscribe More than 1 Observer in the same time
subscription.add(subscription2);

// Unsubscribe Observer form Observable after 6 Seconds
setTimeout(() => subscription.unsubscribe(), 6000);

function addItem(val: any) {
    const node = document.createElement('li');
    const nodeText = document.createTextNode(val);
    node.appendChild(nodeText);
    document.getElementById('output').appendChild(node);

}
