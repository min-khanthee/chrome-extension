fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById('author').textContent = `By: ${data.user.name}`
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjAwOTU3MzE&ixlib=rb-1.2.1&q=80&w=1080)`
  })
