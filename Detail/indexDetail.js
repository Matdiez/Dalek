const API_KEY = '9c6e8f700231cd9ee075f71cf45d96e7'
const urlParams = new URLSearchParams(window.location.search)
const movie_id = urlParams.get('id')

const loadMovie = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`)
        const data = await res.json()
        const poster_url = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        const title = data.title
        const sinopsis = data.overview
        const release_date = new Date(data.release_date).toLocaleDateString()
        const rate = data.vote_average.toFixed(1)
        const genres = data.genres
        const tagline = data.tagline

        const genreContainer = document.getElementById('genre')
        genreContainer.textContent = genres.map(genre => genre.name).join(', ')

        document.getElementById('title').textContent = title;
        document.getElementById('poster').src = poster_url;
        document.getElementById('sinopsis').textContent = sinopsis;
        document.getElementById('release-date').textContent = `${release_date}`;
        document.getElementById('rate').innerHTML = `<span>${rate}/10</span> Rating`;
        document.getElementById('tagline').textContent = tagline

        const trailerRes = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}`)
        const trailerData = await trailerRes.json()
        const trailers = trailerData.results.filter(trailer => trailer.type === 'Trailer')
        
        if (trailers.length > 0) {
            const trailerContainer = document.getElementById('trailer')
            const trailerHtml = `
                <div class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${trailers[0].key}" frameborder="0" allowfullscreen></iframe>
                </div>
            `
            trailerContainer.innerHTML = trailerHtml
        }
    } catch (error) {
        console.log(error)
    }
}

loadMovie()