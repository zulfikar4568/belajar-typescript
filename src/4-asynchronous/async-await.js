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

async function init() {
  await createPost({ title: 'Post3', body: 'This is my post3' })
  
  getPosts();

  const data = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
  console.log(data)
}

init();