import { map, merge, of } from "rxjs";

let number = 1;

const observable = of('Let\'s Start Our Test').pipe(map(data => data.toUpperCase() + ': ' + number++));

const observable2 = of('Our test will be executed in 2 seconds').pipe(map(data => data.toUpperCase() + ': ' + number++));

merge(observable, observable2).subscribe(data => addItem(data));

function addItem(val: any) {
    const node = document.createElement('li');
    const nodeText = document.createTextNode(val);
    node.appendChild(nodeText);
    document.getElementById('output').appendChild(node);

}