console.log('hello world');

// a higher order function accepts a callback as a parameter

// without a for each
let arr = [1, 5, 3, 4, 5, 8];

function double(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}

double(arr);

function double1(arr) {
  for(let i in arr) {
    console.log(i * 2 + 'yey');
  }
}

double1(arr);


arr.forEach(element => {
  console.log(element * 2);
});

// make your life easier