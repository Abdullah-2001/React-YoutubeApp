import react from 'react'
import './Trending-cards.css'
import Cardimg1 from '../Images/trending-img.jpg'

class Trendingcards extends react.Component {

    render() {

        return (

            <div className="container">

                <a href="https://www.youtube.com/watch?v=zvXxQoLpZqQ">

                    <div className="card-container">

                        <div className="img-container">
                            <img className="card-img-1" width="250" src={Cardimg1} alt="" />
                        </div>

                        <div className="title-container">
                            <p className="title-1">Khuda Aur Mohabbat - Season 3 Ep 01 [Eng Sub] Digitally Presented by Happilac Paints - 12th Feb 21</p>
                            <span className="title-2">HAR PAL GEO</span>
                            <i id="verified" class="fas fa-check-circle"></i>
                            <span className="title-3">18M views</span>
                            <span className="title-4">1 Week ago</span>
                            <p className="title-5">Subscribe to our channel so you never miss any of your favorite dramas https://bit.ly/30JSSPr Khuda Aur Mohabbat - Season 03 - Digitally Presented by Happilac Paints Farhad and Mahi hail...</p>
                        </div>

                    </div>

                </a>

            </div>

        )
    }
}

export default Trendingcards;