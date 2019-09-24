const button1 = document.getElementById('inner');
const button2 = document.getElementById('write');
const button3 = document.getElementById('alert');
const button4 = document.getElementById('console');

button1.onclick = () => document.getElementById('innerBox').innerHTML = '<h3>Welcome to the webpage!</h3>';
button2.onclick = () => document.write('<h3>Greeting from write button</h3>');
button3.onclick = () => alert('Hello, from alert button!');
button4.onclick = () => console.log('Welcome to console!');


let price1 = 20;
let price2 = 40;
let total = price1 + price2;

document.getElementById("calc").onclick = () => {
    document.getElementById("total").innerHTML = total;
    document.getElementById("total").style.backgroundColor = 'green';
}

document.getElementById('dateBtn').onclick = () => {
    document.getElementById('dateBox').innerHTML = Date();
}