const loadNews = (category) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data));
}

const displayNews = categories => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ``;
    categories.forEach(category => {

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.innerHTML = `

        <div class="col-md-4">
            <img src="${category.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
    <div onclick="loadNewsDetail()" class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${category.title}</h5>
            <p class="card-text">${category.details.slice(0, 500)} . . .</p>

        </div>
        <div class="d-flex justify-content-between align-items-center"> 
            <div>
                <img src="${category.author.img}" class="img-thumbnail rounded-circle border-0" width="60" height="24">${category.author.name}
            </div> 
            <p>
                <img src="viewIcon.png" class="img-thumbnail rounded-circle border-0" width="60" height="24">
                ${category.total_view}
            </p>
            <div class="d-flex align-items-center">Rating:${category.rating.number} ${category.rating.badge}</div>

            
            <p> 
                <img src="arrow.png" class="img-thumbnail rounded-circle border-0" width="60" height="24">
            </p>
        </div>
    </div>
        `;
        newsContainer.appendChild(newsDiv);
    })
}

loadNews();
