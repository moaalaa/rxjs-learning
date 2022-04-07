import { Observable, share } from "rxjs";

let number = 1;

// new Observable(producer/subscriber)

// Producer/Subscriber: Responsible to emit Observable Notifications to its Observers subscriptions

// Cold Observable: When Producer/Subscriber is activated when Observers subscriptions is created Immediately called "Cold Observable"

// Warm/Hot Observable: When Observer receive Observable Notifications when they just created
// -- and not receiving previous Observable Notifications which already sent Called "Warm/Hot Observable"

const observable = new Observable(subscriber => {
    subscriber.next('Let\'s Start Our Test'); // Will not be received for subscription2 because it already send

    setInterval(() => subscriber.next(`It Called ${number++}`), 2000);
}).pipe(share());

// Only Next Notification Callback
const subscription = observable.subscribe(data => addItem(data));

// Adding Another Observer that will return a new subscription

// Unsubscribe Observer form Observable after 1000 Seconds
setTimeout(() => {

    const subscription2 = observable.subscribe(data => addItem('Subscribe 2 ' + data));
}, 1000);

function addItem(val: any) {
    const node = document.createElement('li');
    const nodeText = document.createTextNode(val);
    node.appendChild(nodeText);
    document.getElementById('output').appendChild(node);

}
