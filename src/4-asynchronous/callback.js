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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000)
}

getPosts();

createPost({ title: 'Post3', body: 'This is my post3' }, getPosts)