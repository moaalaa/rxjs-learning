import { fromEvent } from "rxjs";

// Hot Observable: When Observer receive Observable Notifications when they just created
// -- and not receiving previous Observable Notifications which already sent Called "Hot Observable"

const observable = fromEvent(document, 'mousemove');

setTimeout(() => {
    // If we move our mouse "observer/subscription" will not receive it Observable notifications
    // But instead it will receive new notifications after 2 seconds because it will receive only 
    // notifications that was sent it when it created and it will be created after 2 seconds
    // This Simple called Hot Observables because we didn't receive Notifications which already sent.
    
    const subscription = observable.subscribe((data: MouseEvent) => addItem(`x: ${data.x}, y: ${data.y}`));
}, 2000);

function addItem(val: any) {
    const node = document.createElement('li');
    const nodeText = document.createTextNode(val);
    node.appendChild(nodeText);
    document.getElementById('output').appendChild(node);

}
