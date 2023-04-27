import { API_KEY } from './api.js'

export const loadDramaMovies = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`)
        const data = await res.json()
        let movies = ''
        data.results.slice(0, 12).forEach(movie => {
            movies += `
                <div class="item">   
                    <div class="border-0">
                        <a href="./Detail/detailPage.html?id=${movie.id}">
                            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="img" class="card-img-top">
                        </a>    
                        <p class="text-center">${movie.title}</p>
                    </div>
                </div>
            `
        })

        document.getElementById('movie-carousel-drama').innerHTML = movies

        $('#movie-carousel-drama').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}