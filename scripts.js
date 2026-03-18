async function mostrarPost() {
  const usarAPI = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // já busca só o post 1
  const post = await usarAPI.json();

  document.getElementById("idUsuario").innerText = post.id;
  document.getElementById("titlePost").innerText = post.title;
  document.getElementById("Post").innerText = post.body;
}

mostrarPost();
