const showfilmsBtn = document.getElementById('show-film-btn');
const addfilms = document.getElementById('add-film');
const serchfilm = document.getElementById('search-film');
const markfilm = document.getElementById('mark-film-btn');
const contentid = document.getElementById('content');

const movies = [
  { title: 'Inception', isAvailable: true },
  { title: 'The Dark Knight', isAvailable: true },
  { title: 'Avatar', isAvailable: false },
  { title: 'Titanic', isAvailable: true },
  { title: 'Avengers: Endgame', isAvailable: false },
];
const clearContent = () => {
    contentid.innerHTML = '';
}

const showFilms = () => {
    clearContent();
    const moviespisok = document.createElement('ul')
    contentid.append(moviespisok);
    for (const movie of movies) {
        console.log(movie.title);
        const movieItem = document.createElement('li')
        movieItem.textContent = `${movie.title} - ${movie.isAvailable ? 'доступен' : 'недоступен'}`
        moviespisok.append(movieItem)
    }
};

showfilmsBtn.addEventListener('click', showFilms);
