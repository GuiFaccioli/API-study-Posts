async function mostrarPost() {
  const usarAPI = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await usarAPI.json();

  const container = document.querySelector(".containerCards");
  const input = document.getElementById("campoBusca");

  // Função que renderiza os cards
  function renderizarCards(lista) {
    container.innerHTML = ""; // limpa os cards anteriores

    lista.forEach((post) => {
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

  // Renderiza todos os posts ao carregar
  renderizarCards(posts);

  input.addEventListener("input", () => {
    const termo = input.value.toLowerCase();

    const filtrado = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(termo) ||
        post.id.toString().includes(termo) || // id é number — não tem .toLowerCase()
        post.body.toLowerCase().includes(termo),
    );

    renderizarCards(filtrado);
  });
}
mostrarPost();
