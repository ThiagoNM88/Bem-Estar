let likes = [0, 0, 0, 0];
let dislikes = [0, 0, 0, 0];

function likeArticle(articleId) {
    likes[articleId - 1]++;
    updateCounts(articleId);
}

function dislikeArticle(articleId) {
    dislikes[articleId - 1]++;
    updateCounts(articleId);
}

function updateCounts(articleId) {
    document.getElementById(`like-count-${articleId}`).textContent = likes[articleId - 1];
    document.getElementById(`dislike-count-${articleId}`).textContent = dislikes[articleId - 1];
}

function toggleCommentForm(articleId) {
    const form = document.getElementById(`comment-form-${articleId}`);
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function saveComment(articleId) {
    const commentText = document.getElementById(`comment-text-${articleId}`).value;
    const commentsSection = document.getElementById(`comments-section-${articleId}`);
    const newComment = document.createElement('p');
    newComment.textContent = commentText;
    newComment.classList.add('small');
    commentsSection.appendChild(newComment);
    document.getElementById(`comment-text-${articleId}`).value = '';
    toggleCommentForm(articleId);
}
