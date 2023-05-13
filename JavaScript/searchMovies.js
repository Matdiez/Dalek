import { API_KEY } from './api.js'

export const searchMovies = async () => {
    const search_input = document.getElementById('search-input').value
    const search_query = encodeURIComponent(search_input)

    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_query}`)
        const data = await res.json()
        const main = document.getElementById('main')

        main.innerHTML = ''

        data.results.forEach(movie => {
            const movie_container = document.createElement('div')
            movie_container.classList.add('container')

            const movie_detail = document.createElement('a')
            movie_detail.href = `./Detail/detailPage.html?id=${movie.id}`

            const movie_container_card = document.createElement('div')
            movie_container_card.classList.add('movie-card')

            const movie_poster = document.createElement('img')
            movie_poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            movie_poster.alt = `${movie.title} poster`
            movie_poster.classList.add('search-movie-poster')

            const movie_title = document.createElement('h3')
            movie_title.textContent = movie.title

            movie_container.appendChild(movie_detail)
            movie_detail.appendChild(movie_container_card)
            movie_container_card.appendChild(movie_poster)
            movie_container_card.appendChild(movie_title)
            main.appendChild(movie_container)
        })

        main.classList.add('container-search-main')
    } catch (error) {
        console.log(error)
    }
}