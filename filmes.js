const filmes = [

  {
    titulo: "Herege",
    genero: "Visto : 01/01/2026",
    imagem: "/filmes/Herege.png",
    progresso: 100
  },

  {
    titulo: "Watchmen",
    genero: "Visto : 01/01/2026",
    imagem: "/filmes/Watchmen.jpg",
    progresso: 100
  },

  {
    titulo: "Bad Boys até o Fim",
    genero: "Visto : 26/12/2025",
    imagem: "/filmes/Bad boys até o fim.jpg",
    progresso: 100
  },
  
  {
    titulo: "Resgate implacável",
    genero: "Visto : 27/12/2025",
    imagem: "/filmes/Resgate Implacavel.jpg",
    progresso: 100
  },

  {
    titulo: "A grande inundação",
    genero: "Visto : 26/12/2025",
    imagem: "/filmes/A grande inundação.jpg",
    progresso: 100
  },

  {
    titulo: "Vivo ou Morto - Um Mistério Knives Out",
    genero: "Visto : 25/12/2025",
    imagem: "/filmes/Vivo ou Morto Um Mistério Knives Out.jpg",
    progresso: 100
  },

  {
    titulo: "Devolta ao Jogo",
    genero: "Acão • Crime",
    imagem: "/filmes/De volta ao Jogo.jpg",
    progresso: 100
  },

  {
    titulo: "Batman Begins",
    genero: "Ação • Crime",
    imagem: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    progresso: 100
  },

  {
    titulo: "Interstellar",
    genero: "Ficção • Drama",
    imagem: "/filmes/interestellar.png",
    progresso: 100
  },

  {
    titulo: "Parasita",
    genero: "Ficção • Drama",
    imagem: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    progresso: 100
  },

  {
    titulo: "Vingadores: Guerra Infinita",
    genero: "Ficção • Ação",
    imagem: "/filmes/Vingadores Guerra infinita.jpg",
    progresso: 100
  },

  {
    titulo: "O Regresso",
    genero: "Drama",
    imagem: "/filmes/O Regresso.jpg",
    progresso: 100
  },
];


const grid = document.getElementById('gridFilmes');

filmes.forEach(filme => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="${filme.imagem}">

    <div class="progress">
      <div class="progress-bar" style="width:${filme.progresso}%"></div>
    </div>

    <span class="progress-text">${filme.progresso}%</span>

    <div class="info">
      <h3>${filme.titulo}</h3>
      <p>${filme.genero}</p>
    </div>
  `;

  grid.appendChild(card);
});


const searchInput = document.getElementById('searchFilmes');

searchInput.addEventListener('input', () => {
  const texto = searchInput.value.toLowerCase();

  document.querySelectorAll('.grid-filmes .card').forEach(card => {
    const titulo = card.querySelector('h3').innerText.toLowerCase();

    if (titulo.includes(texto)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

