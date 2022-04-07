import { merge, Observable, skipUntil, Subject } from "rxjs";

let number = 1;

const observable1 = new Observable(subscriber => {
    setInterval(() => subscriber.next(`observable1 It Called ${number++}`), 1000);
});

const observable2 = new Subject;

setTimeout(() => observable2.next(`observable2 Called ${number++}`), 3000);

// "observable1" will skip any notification until "observable2" is start emitting its notification
observable1
    .pipe(skipUntil(observable2))
    .subscribe(data => addItem(data));

observable2.subscribe(data => addItem(data));

function addItem(val: any) {
    const node = document.createElement('li');
    const nodeText = document.createTextNode(val);
    node.appendChild(nodeText);
    document.getElementById('output').appendChild(node);

}