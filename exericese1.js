import fetch from 'node_modules';

fetch('https://ciprand.p3p.repl.co/api?len=10&count=10')
.then(response => response.json())
.then(data => console.log(data));