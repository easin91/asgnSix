
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.data.news_category))
}

const displayCategories = categories => {
    const ul = document.getElementById('categories-list');
    for (const category of categories) {
        const li = document.createElement('li');
        li.innerText = category.category_name;
        ul.appendChild(li);
    }
}

loadCategories();

