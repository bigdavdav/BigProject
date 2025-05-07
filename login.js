let users = []

fetch('./users.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      users.push(element)
    });
  })

console.log(users)