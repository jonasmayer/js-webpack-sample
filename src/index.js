const greeting = Promise.resolve('Hello!');

greeting.then(message => console.log(message));

fetch('https://api.github.com/users/octocat/orgs')
  .then(res => res.json())
  .then(data => console.log(data));
