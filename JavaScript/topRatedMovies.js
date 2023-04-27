import { API_KEY } from './api.js'

export const loadTopRatedMovies = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
        const data = await res.json()
        let movies = ''
        data.results.splice(0, 8).forEach(movie => {
            movies += `
                <div class="top-card">
                    <a href="./Detail/detailPage.html?id=${movie.id}">
                        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="img">
                    </a>
                        <div class="container body-card">
                        <h5>${movie.title}</h5>
                        <div class="info-card">
                            <p>Rated: 10/${movie.vote_average}</p>
                            <p>Year: ${movie.release_date.split('-')[0]}</p>
                        </div>
                    </div>
                </div>
            `
        })

        document.getElementById('movie-right').innerHTML = movies

    } catch (error) {
        console.log(error)
    }
}