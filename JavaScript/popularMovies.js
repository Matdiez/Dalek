import { API_KEY } from './api.js'

export const loadPopularMovies = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        const data = await res.json()
        let movies = ''
        data.results.slice(0, 12).forEach(movie => {
            const movieDetailUrl = `movie-detail.html?id=${movie.id}`
            movies += `
                <div class="item">   
                    <div class="border-0">
                        <a href="./Detail/detailPage.html?id=${movieDetailUrl}">
                            <img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="img" class="card-img-top">
                        </a>    
                        <div class="card-body text-center">
                            <h4>${movie.title}</h4>
                        </div>
                    </div>
                </div>
            `
        })

        document.getElementById('movie-carousel-popular').innerHTML = movies

        $('#movie-carousel-popular').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1600: {
                    items: 6
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}