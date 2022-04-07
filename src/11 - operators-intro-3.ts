import { from, map, merge, of, pluck } from "rxjs";

let number = 1;

const observable = of(
        {message: 'Let\'s Start Our Test'},
        {message: 'Where is the test ?'},
        {message: 'Test is in the next line'},
    )
    .pipe(
        map(data => data.message.toUpperCase() + ': ' + number++),
    );

const observable2 = from([
        {message: 'Our test will be executed in 3 seconds'},
        {message: 'Our test will be executed in 2 seconds'},
        {message: 'Our test will be executed in 1 seconds'},
    ])
    .pipe(
        map(data => data.message.toUpperCase() + ': ' + number++),
    );


merge(observable, observable2).subscribe(data => addItem(data));

function addItem(val: any) {
    const node = document.createElement('li');
    const nodeText = document.createTextNode(val);
    node.appendChild(nodeText);
    document.getElementById('output').appendChild(node);

}