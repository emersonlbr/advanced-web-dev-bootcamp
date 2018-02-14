console.log('hello world');
// ajax is just an approach
// xml and json
// apis exists to send data between computers 


// XMLHttpRequest - no one uses it anymore 


// FETCH API Exemple
let url = 'https://randomuser.me/api';
fetch(url)
.then(function(res) {
  console.log(res);
})
.catch(function(error) {
  console.log(error);
});


