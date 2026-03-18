async function mostrarPost() {
  const usarAPI = await fetch("https://jsonplaceholder.typicode.com/posts");
  const propriedadesJSON = await usarAPI.json();
  const posts = propriedadesJSON.map((post) => ({
    id: post.id,
    title: post.title,
    body: post.body,
  }));

  const container = document.querySelector(".containerCards");

  posts.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("cardGeral");

    card.innerHTML = `
      <h1 class="idCard">${post.id}</h1>
      <p class="titleCard">${post.title}</p>
      <p class="bodyCard">${post.body}</p>
    `;

    container.appendChild(card);
  });
}

mostrarPost();
