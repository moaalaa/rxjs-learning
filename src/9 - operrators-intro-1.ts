import { merge, Observable, of } from "rxjs";

let number = 0;

const observable = of('Let\'s Start Our Test');

const observable2 = of('Our test will be executed in 2 seconds');

const mergedObservable = merge(observable, observable2);

const subscription = mergedObservable.subscribe(data => addItem(data));



function addItem(val: any) {
    const node = document.createElement('li');
    const nodeText = document.createTextNode(val);
    node.appendChild(nodeText);
    document.getElementById('output').appendChild(node);

}