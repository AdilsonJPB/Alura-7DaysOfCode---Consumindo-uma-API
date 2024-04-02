function renderizarFilme (movie) {
    const conteudoPrincipalFilme = document.createElement('section');
    conteudoPrincipalFilme.classList.add('conteudo_principal__filme');

    const conteudoPrincipalMovie = document.createElement('div');
    conteudoPrincipalMovie.classList.add('conteudo_principal__movie');
    document.body.appendChild(conteudoPrincipalMovie);

    const conteudoPrincipalImagem = document.createElement('img');
    conteudoPrincipalImagem.classList.add('conteudo_principal__imagem');
    document.body.appendChild(conteudoPrincipalImagem);

    const movieAvalicoes = document.createElement('img');
    movieAvalicoes.classList.add('movie__avalicoes');

    const avaliacoesContainer = document.createElement('div');
    avaliacoesContainer.classList.add('avaliacoes__container');
    document.body.appendChild(avaliacoesContainer);

    const avalicoesTitulo = document.createElement('span');
    avalicoesTitulo.classList.add('avalicoes__titulo');
    document.body.appendChild(avalicoesTitulo);

    const avaliacoes = document.createElement('div');
    avaliacoes.classList.add('avaliacoes');

    const avalicoesPontuacoes = document.createElement('div');
    avalicoesPontuacoes.classList.add('avalicoes__pontuacoes');
    document.body.appendChild(avalicoesPontuacoes);

    const pontuacoesImagem = document.createElement('img');
    pontuacoesImagem.classList.add('pontuacoes__imagem');
    document.body.appendChild(pontuacoesImagem);

    const pontuacoesPontos = document.createElement('span');
    pontuacoesPontos.classList.add('pontuacoes__pontos');
}