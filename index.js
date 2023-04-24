const loadMovies = async () => {
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9c6e8f700231cd9ee075f71cf45d96e7')
        const datos = await res.json()
        const movies = datos.results.slice(0, 12).map(movie => `
            <div class="item">   
                <div class="border-0">
                    <img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="img" class="card-img-top">
                    <div class="card-body text-center">
                        <h4>${movie.title}</h4>
                    </div>
                </div>
            </div>
        `).join('')

        document.getElementById('movie-carousel').innerHTML = movies

        $('.owl-carousel').owlCarousel({
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
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}

loadMovies()