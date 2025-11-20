for (let i = 1; i <= 110; i++) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
