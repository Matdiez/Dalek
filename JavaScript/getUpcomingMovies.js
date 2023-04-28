import { API_KEY } from './api.js'

export const loadUpcomingMovies = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
        const data = await res.json()
        let movies = ''
        data.results.slice(0, 15).forEach(movie => {
            movies += `
                <div class="item">   
                    <div class="border-0">
                        <a href="./Detail/detailPage.html?id=${movie.id}">
                            <img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="img" class="card-img-top">
                        </a>    
                        <h5 class="text-center">${movie.title}</h5>
                    </div>
                </div>
            `
        })

        document.getElementById('movie-carousel-upcoming').innerHTML = movies

        $('#movie-carousel-upcoming').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}