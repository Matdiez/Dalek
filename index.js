import { loadUpcomingMovies } from './JavaScript/getUpcomingMovies.js'
import { loadActionMovies } from './JavaScript/getActionMovies.js'
import { loadDramaMovies } from './JavaScript/getDramaMovies.js'
import { loadSuspenseMovies } from './JavaScript/getSuspenseMovies.js'
import { loadAnimationMovies } from './JavaScript/getAnimationMovies.js'
import { loadTopRatedMovies } from './JavaScript/getTopRatedMovies.js'
import { searchMovies } from './JavaScript/searchMovies.js'

loadUpcomingMovies()
loadActionMovies()
loadDramaMovies()
loadSuspenseMovies()
loadAnimationMovies()
loadTopRatedMovies()

document.getElementById('search-btn').addEventListener('click', searchMovies);