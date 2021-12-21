const grid = document.querySelector('.grid')
const cardTemplate = document.querySelector('#card-template')

// Скелетные карточки до загрузки данных
grid.textContent = ''
for (let i = 0; i < 9; i++) {
    const card = cardTemplate.content.cloneNode(true)
    grid.append(card)
}

// Загрузка данных карточки
getPosts();

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    grid.textContent = ''
    posts.forEach(post => {
        const card = cardTemplate.content.cloneNode(true)
        const title = post.title.substr(0, 25) + '...'
        const text = post.body

        card.querySelector('.card-title').textContent = title
        card.querySelector('.card-body').textContent = text
        grid.append(card)
    })
}


