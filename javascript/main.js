drawMovieCard = movies =>{
    console.log(movies)
    const cardlist = document.querySelector("#card-list");
    movies.results.forEach(movie => {
        let card = document.createElement('div');
        
        const img = document.createElement("img")
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        card.appendChild(img)

        const title = document.createElement('h3')
        title.textContent = `${movie.title}`;
        card.appendChild(title)

        const overview = document.createElement('p');
        overview.textContent = `${movie.overview}`;
        card.appendChild(overview)

        const rating = document.createElement('p')
        rating.textContent = `${movie.vote_average}`
        card.appendChild(rating);

        card.addEventListener("click", () => {
            alert(`ID : ${movie.id}`);})
    cardlist.appendChild(card)    
    })
};

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWMzODAzZjhjMzIwZDg2MDZlY2E3ZmZmMDc0MDAyNSIsInN1YiI6IjY1MmYyYmI5YTgwMjM2MDBhYjQwYzFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4mJX_VIOBJRSteeigJ35kU1Uo8R-HJyyU8SB13gULYw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(drawMovieCard)
    .catch(err => console.error(err));

    let searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", ()=>{
        const keyword = searchInput.value;
        findMovie(keyword);
    })

    const findMovie = (keyword) => {
        const lowerKeyword = keyword.toLowerCase();
        const cardlist = document.querySelector("#card-list");
        Movies = ori
        const searchData = movies.results.filter(movie =>{
            const titleLowerCase = movie.title.toLowerCase();
            return titleLowerCase.includes(lowerKeyword);
        });
        return drawMovieCard(findMovie)        
    };
