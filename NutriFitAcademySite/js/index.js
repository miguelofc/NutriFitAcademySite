
let postId = 1;
let commentId = 1;

// Ao clicar no botão "Postar"
function postar() {
    // Pega o conteúdo da postagem
    const postContent = document.getElementById('post-content').value;

    // Verifica se o conteúdo da postagem não está vazio
    if (postContent.trim() !== '') {
        const postContainer = document.getElementById('posts-container');

        // Cria um novo elemento para representar a postagem
        const postDiv = document.createElement('div');

        // Obtém o ID atual e incrementa o postId para o próximo ID único
        const currentPostId = postId++;

        // Define o ID da postagem com base no ID atual
        postDiv.id = `post-${currentPostId}`;

        // Define a classe da postagem como 'post'
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <p>${postContent}</p>
            <div class="comment-section">
                <textarea id="comment-content-${currentPostId}" class="comment-content" placeholder="Adicione um comentário"></textarea>
                <button onclick="comentar(${currentPostId})">Comentar</button>
            </div>
            <div id="comments-container-${currentPostId}" class="comments-container"></div>
        `;

        postContainer.prepend(postDiv);
        document.getElementById('post-content').value = '';
    }
}

// Ao clicar no botão "Comentar"
function comentar(postId) {
    // Pega o conteúdo da área de texto correspondente à postagem
    const commentContent = document.getElementById(`comment-content-${postId}`).value;

    // Verifica se o conteúdo não está vazio
    if (commentContent.trim() !== '') {
        // Pega o contêiner de comentários para a postagem específica
        const commentsContainer = document.getElementById(`comments-container-${postId}`);

        // Cria um novo elemento que representa o comentário
        const commentDiv = document.createElement('div');

        // Define o ID do comentário com base no próximo ID único de comentário
        commentDiv.id = `comment-${commentId++}`;

        commentDiv.className = 'comment';
        commentDiv.innerHTML = `<p>${commentContent}</p>`;
        commentsContainer.prepend(commentDiv);
        document.getElementById(`comment-content-${postId}`).value = '';
    }
}

function toggleTexto() {
    var paragrafoLongo = document.getElementById("paragrafo-longo");
    var botao = document.querySelector(".ler-mais-btn");

    if (paragrafoLongo.style.display === "none") {
        paragrafoLongo.style.display = "block";
        botao.innerText = "Ler Menos";
    } else {
        paragrafoLongo.style.display = "none";
        botao.innerText = "Ler Mais";
    }
}
