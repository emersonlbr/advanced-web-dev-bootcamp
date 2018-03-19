// see "proxy" on package.json
// requesting from another port
const APIURL = '/api/todos/';
const status = {
  min: 400,
  max: 500
};

export async function getTodos() {
  return fetch(APIURL)
  .then(resp => {
    // Error handling
    if (!resp.ok) {
      if (resp.status >= status.min && resp.status < status.max) {
        return resp.json().then(data => {
          let err = {erroMessage: data.message};
          throw err;
        });
      } else {
        let err = {errorMessage: 'ops the server is fucked up'};
        throw err;
      }
    } else
      return resp.json();
  });
}

export async function createTodo(val) {
  return fetch(APIURL, {
    method: 'post',
    headers: new Headers ({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({name: val})
  })
    .then(resp => {
      // Error handling
      if (!resp.ok) {
        if (resp.status >= status.min && resp.status < status.max) {
          return resp.json().then(data => {
            let err = {erroMessage: data.message};
            throw err;
          });
        } else {
          let err = {errorMessage: 'ops the server is fucked up'};
          throw err;
        }
      } else
        return resp.json();
    })
}

export async function removeTodo(id) {
  const deleteURL = APIURL + id;
  return fetch(deleteURL, {
    method: 'delete'
  })
    .then(resp => {
      // Error handling
      if (!resp.ok) {
        if (resp.status >= status.min && resp.status < status.max) {
          return resp.json().then(data => {
            let err = {erroMessage: data.message};
            throw err;
          });
        } else {
          let err = {errorMessage: 'ops the server is fucked up'};
          throw err;
        }
      } else
        return resp.json();
    })
}

export async function updatedTodo(todo) {
  const updateURL = APIURL + todo._id;
  return fetch(updateURL, {
    method: 'put',
    headers: new Headers ({
      'Content-Type': 'application/json'
    }),
    // toggle the todo completed status
    body: JSON.stringify({completed: !todo.completed})

    })
    .then(resp => {
      // Error handling
      if (!resp.ok) {
        if (resp.status >= status.min && resp.status < status.max) {
          return resp.json().then(data => {
            let err = {erroMessage: data.message};
            throw err;
          });
        } else {
          let err = {errorMessage: 'ops the server is fucked up'};
          throw err;
        }
      } else
        return resp.json();
    })
}