const posts = [
  { title: 'Post1', body: 'This is my post' },
  { title: 'Post2', body: 'This is my post2' },
]


function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Something wrong!')
      }
    }, 2000)
  });
}

createPost({ title: 'Post3', body: 'This is my post3' })
  .then(getPosts)
  .catch(err => console.error(err))


const promise1 = Promise.resolve('hello world')
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'Finish')
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())

Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values))