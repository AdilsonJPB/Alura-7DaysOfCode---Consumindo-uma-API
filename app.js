const containerFilmes = document.querySelector('.conteudo_principal__filme');

function renderizarFilme(movie) {
    
    // Cria o contêiner para os detalhes do filme
    const conteudoPrincipalMovie = document.createElement('div');
    conteudoPrincipalMovie.classList.add('conteudo_principal__movie');
    containerFilmes.appendChild(conteudoPrincipalMovie);

    // Cria a imagem do filme
    const conteudoPrincipalImagem = document.createElement('img');
    conteudoPrincipalImagem.classList.add('conteudo_principal__imagem');
    conteudoPrincipalImagem.src = movie.image;
    conteudoPrincipalImagem.alt = "imagem de " + movie.title;
    conteudoPrincipalMovie.appendChild(conteudoPrincipalImagem);

    // Cria o contêiner para as avaliações
    const movieAvaliacoes = document.createElement('div');
    movieAvaliacoes.classList.add('movie__avalicoes');
    conteudoPrincipalMovie.appendChild(movieAvaliacoes);

    // Cria o contêiner para as informações de avaliação
    const avaliacoesContainer = document.createElement('div');
    avaliacoesContainer.classList.add('avaliacoes__container');
    movieAvaliacoes.appendChild(avaliacoesContainer);

    // Cria o título do filme
    const avalicoesTitulo = document.createElement('p');
    avalicoesTitulo.classList.add('avalicoes__titulo');
    avalicoesTitulo.textContent = movie.title;
    avaliacoesContainer.appendChild(avalicoesTitulo);

    const avaliacoes = document.createElement('div');
    avaliacoes.classList.add('avaliacoes');
    avaliacoesContainer.appendChild(avaliacoes);

    // Cria o contêiner para as pontuações
    const avaliacoesPontuacoes = document.createElement('div');
    avaliacoesPontuacoes.classList.add('avaliacoes__pontuacoes');
    avaliacoes.appendChild(avaliacoesPontuacoes);

    // Cria a pontuação com a imagem
    const pontuacoesImagem1 = document.createElement('img');
    pontuacoesImagem1.classList.add('pontuacoes__imagem1');
    pontuacoesImagem1.src = "assets/img/Vector.png"; // Supondo que esta é a imagem de pontuação
    pontuacoesImagem1.alt = "imagem de avaliacoes";
    avaliacoesPontuacoes.appendChild(pontuacoesImagem1);

    // Cria o texto da pontuação 1
    const pontuacoesPontos1 = document.createElement('span');
    pontuacoesPontos1.classList.add('pontuacoes__pontos1'); // Corrigido para 'pontuacoes__pontos1'
    pontuacoesPontos1.textContent = movie.rating; // Utiliza a pontuação do filme
    avaliacoesPontuacoes.appendChild(pontuacoesPontos1);

    const pontuacoesImagem2 = document.createElement('img');
    pontuacoesImagem2.classList.add('pontuacoes__imagem2');
    pontuacoesImagem2.src = "assets/img/Vector (1).png"; // Supondo que esta é a imagem de pontuação
    pontuacoesImagem2.alt = "imagem de avaliacoes";
    avaliacoesPontuacoes.appendChild(pontuacoesImagem2);

    const pontuacoesPontos2 = document.createElement('span');
    pontuacoesPontos2.classList.add('pontuacoes__pontos2');
    pontuacoesPontos2.textContent = 'Favoritar'; 
    avaliacoesPontuacoes.appendChild(pontuacoesPontos2);

    // Cria o parágrafo com a descrição do filme
    const avaliacoesParagrafo = document.createElement('p');
    avaliacoesParagrafo.classList.add('avaliacoes__paragrafo');
    avaliacoesParagrafo.textContent = movie.description; // Utiliza a descrição do filme
    movieAvaliacoes.appendChild(avaliacoesParagrafo);
}

// Dados dos filmes
const movies = [
    {
        "image": 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
        "title": 'Batman',
        "rating": 9.2,
        "year": 2022,
        "description": "“Descrição Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. filme…”",
        "isFavorited": true,
    }
];

// Renderiza cada filme
window.onload = function() {
    movies.forEach(movie => renderizarFilme(movie));
  }
