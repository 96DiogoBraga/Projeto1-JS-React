function obterBlogs() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://gorest.co.in/public-api/posts', true);
    request.send();

    request.onload = function () {
        if (request.status === 200) {
            var body = JSON.parse(request.responseText);
            var blogsTag = document.getElementById('blogs');

            body.data.forEach(blog => {
                let blogsItem = document.createElement('li');
                blogsItem.innerHTML = `<b>Título</b>: ${blog.title}<br><br><b>Postagem</b>: ${blog.body}<br><br><b>Autor</b>: ${blog.user_id}.<br><br>`;
                blogsTag.appendChild(blogsItem);
            });
        }
    };
}

