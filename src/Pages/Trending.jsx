import react from 'react'
import './Trending.css'
import Trendingcard from '../Components/Trending-cards.jsx'
import Music from '../Images/music.png'
import Game from '../Images/game.png'
import Movie from '../Images/movie.png'

class Trending extends react.Component {

    render() {

        return (

            <div>

                <div className="container container-1">

                    <a href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ">
                        <div className="music-div">
                            <img className="music-img" src={Music} alt="" />
                            <span className="music">Music</span>
                        </div>
                    </a>

                    <a href="https://www.youtube.com/gaming">
                        <div className="game-div">
                            <img className="game-img" src={Game} alt="" />
                            <span className="game">Gaming</span>
                        </div>
                    </a>

                    <a href="https://www.youtube.com/wbpictures">
                        <div className="movie-div">
                            <img className="movie-img" src={Movie} alt="" />
                            <span className="movie">Movies</span>
                        </div>
                    </a>

                </div>

                <div>
                    <Trendingcard />
                    <Trendingcard />
                    <Trendingcard />
                    <Trendingcard />
                    <Trendingcard />
                    <Trendingcard />
                    <Trendingcard />
                    <Trendingcard />
                    <Trendingcard />
                    <Trendingcard />
                </div>

            </div>

        )
    }
}

export default Trending;