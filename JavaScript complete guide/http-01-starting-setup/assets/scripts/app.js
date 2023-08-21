const lestElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json';

xhr.onload = function () {
  // const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response;

  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
  }
};

xhr.send();
