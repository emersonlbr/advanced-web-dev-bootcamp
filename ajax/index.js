console.log('hello world');
// ajax is just an approach
// xml and json
// apis exists to send data between computers 
// XMLHttpRequest - no one uses it anymore 

// btn.addEventListenner('click', () => {
//   //do stuff here
//   console.log("Hello World!");
// });

// let dq = 'document.querySelector';

function dq(selector){return document.querySelector(selector);}
let h1 = dq('h1');
dq('h1').onclick = () => {console.log('yey');};