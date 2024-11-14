// Sample movie data
const movies = [
    {
        name: "Inception",
        poster: "img/img1.1.jpeg",
        trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
        name: "Interstellar",
        poster: "img/img2,2.jpg",
        trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
        name: "The Dark Knight",
        poster: "img/img2.jpg",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        name: "Fight Club",
        poster: "img/img1.png",
        trailer: "https://www.youtube.com/embed/8m6mZdfF9tw"
    }
];

const movieContainer = document.getElementById('movieContainer');
const trailerModal = document.getElementById('trailerModal');
const closeModal = document.querySelector('.close');
const trailerVideo = document.getElementById('trailerVideo');

// Function to render movie cards
function renderMovies() {
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.name}">
            <h3>${movie.name}</h3>
            <button onclick="openTrailer('${movie.trailer}')">Watch Trailer</button>
        `;
        movieContainer.appendChild(card);
    });
}

// Function to open trailer modal
function openTrailer(trailerUrl) {
    trailerVideo.src = trailerUrl;
    trailerModal.style.display = "block";
}

// Close modal
closeModal.onclick = function() {
    trailerModal.style.display = "none";
    trailerVideo.src = ""; // Stop video when modal closes
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    if (event.target === trailerModal) {
        trailerModal.style.display = "none";
        trailerVideo.src = "";
    }
}

// Render movies on page load
window.onload = renderMovies;