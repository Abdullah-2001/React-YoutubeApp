import react from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './Router.css'
import Sidebar from "./Sidebar.jsx";
import Home from '../Pages/Home.jsx'
import Trending from '../Pages/Trending.jsx'
import Subscription from '../Pages/Subscription.jsx'
import Library from '../Pages/Library.jsx'
import History from '../Pages/History'

// first row cards image
import titleImage1 from '../Images/mortal-kombat2.jpg'
import titleImage2 from '../Images/mortal-kombat.jpg'
import titleImage3 from '../Images/resident-evil.jpg'
import titleImage4 from '../Images/king-kong.jpg'

// first row cards logo
import logoimage1 from '../Images/samuelramogo.jpg'
import logoimage2 from '../Images/ign.jpg'
import logoimage3 from '../Images/radbrad.jpg'

// second row cards image
import titleImage5 from '../Images/ayekuch.jpg'
import titleImage6 from '../Images/horizonzerodawn.jpg'
import titleImage7 from '../Images/spiderman.jpg'
import titleImage8 from '../Images/ittakestwo.jpg'

// second row cards logo
import logoimage4 from '../Images/cokestudio.jpg'
import logoimage5 from '../Images/radbrad.jpg'
import logoimage6 from '../Images/playstation.jpg'

// third row cards image
import titleImage9 from '../Images/avengers.jpg'
import titleImage10 from '../Images/black-adam.jpg'
import titleImage11 from '../Images/mortal-kombat3.jpg'
import titleImage12 from '../Images/gotham.jpg'

// third row cards logo
import logoimage7 from '../Images/marvel-logo.jpg'
import logoimage8 from '../Images/dc-logo.jpg'
import logoimage9 from '../Images/playstation.jpg'

// fourth row cards image
import titleImage13 from '../Images/alanwalker.jpg'
import titleImage14 from '../Images/ed-shreen.jpg'
import titleImage15 from '../Images/gtx.jpg'
import titleImage16 from '../Images/plague.jpg'

// fourth row cards logo
import logoimage10 from '../Images/alanwalker-logo.jpg'
import logoimage11 from '../Images/ed-shreen-logo.jpg'
import logoimage12 from '../Images/gtx-logo.jpg'
import logoimage13 from '../Images/hollow-logo.jpg'

// fifth row cards image
import titleImage17 from '../Images/injustice-2.jpg'
import titleImage18 from '../Images/pubg.jpg'
import titleImage19 from '../Images/godzilla.jpg'
import titleImage20 from '../Images/batman-footage.jpg'

// fourth row cards logo
import logoimage14 from '../Images/json-logo.jpg'
import logoimage15 from '../Images/ign.jpg'
import logoimage16 from '../Images/one-media-logo.jpg'
import logoimage17 from '../Images/playstation-europe-logo.jpg'


class Routerapp extends react.Component {

    render() {

        return (

            <div>

                <Router>

                    <Sidebar />

                    <div id="pages">

                        <Route exact path="/">

                            <div className="home-container container-fluid">
                                <Home titleImage={titleImage1} duration="2:34" logo={logoimage1} title="Mortal Kombat 11 - Kabal Vs Sonya (Very Hard)" channelName="Samuel Ramogo" views="5.2K views" month="1 hours ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage2} duration="2:21" logo={logoimage2} title="Mortal Kombat (2021) - Official Red Band Trailer" channelName="IGN" views="6.6M views" month="13 hours ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage3} duration="35:00" logo={logoimage3} title="RESIDENT EVIL 3 REMAKE Walkthrough Gameplay Part 1" channelName="theRadBrad" views="3.6M views" month="25 days ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage4} duration="2:50" logo={logoimage2} title="GODZILLA VS KING KONG Final Trailer (NEW 2021)" channelName="IGN" views="1.5M views" month="18 hours ago" />
                            </div>

                            <br />
                            <br />

                            <div className="home-container container-fluid">
                                <Home titleImage={titleImage5} duration="2:34" logo={logoimage4} title="Coke Studio Season 12 | Aaye Kuch Abr | Atif Aslam" channelName="Coke Studio" views="6.5M views" month="1 year ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage6} duration="2:34" logo={logoimage5} title="HORIZON ZERO DAWN Walkthrough Gameplay Part 1 - Aloy (PS4 Pro)" channelName="theRadBrad" views="4.8M views" month="3 years ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage7} duration="2:34" logo={logoimage5} title="SPIDER-MAN MILES MORALES PS5 Walkthrough Gameplay Part 1..." channelName="theRadBrad" views="7.2M views" month="3 months ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage8} duration="2:34" logo={logoimage6} title="It Takes Two – Official Gameplay Trailer | PS5, PS4" channelName="PlayStation" views="53K views" month="12 hours ago" />
                            </div>

                            <br />
                            <br />

                            <div className="home-container container-fluid">
                                <Home titleImage={titleImage9} duration="2:04" logo={logoimage7} title="Marvel's The Avengers- Trailer (OFFICIAL)" channelName="Marvel Entertainment" views="34M views" month="8 years ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage10} duration="1:11" logo={logoimage8} title="Black Adam - Official Teaser (2021) Dwayne Johnson | DC FanDome" channelName="DC" views="11M views" month="1 year ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage11} duration="60:00" logo={logoimage9} title="Mortal Kombat 11 : Weekly Invitational NA : PS4 Tournaments..." channelName="PlayStation" views="58K views" month="1 week ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage12} duration="4:40" logo={logoimage9} title="Gotham Knights - World Premiere Trailer | PS4, PS5" channelName="PlayStation" views="1M views" month="1 year ago" />
                            </div>

                            <br />
                            <br />

                            <div className="home-container container-fluid">
                                <Home titleImage={titleImage13} duration="3:32" logo={logoimage10} title="Alan Walker - Faded" channelName="Alan Walker" views="2.8B views" month="5 years ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage14} duration="4:23" logo={logoimage11} title="Ed Sheeran - Shape of You (Official Music Video)" channelName="Ed Sheeran" views="5.2B views" month="3 years ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage15} duration="12:53" logo={logoimage12} title="Call of Duty : Warzone Battle Royale | RTX 3080 10GB..." channelName="GTX 1050 TI" views="28K views" month="1 month ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage16} duration="45:32" logo={logoimage13} title="The Rats Nest | A Plague Tale: Innocence - Part 2" channelName="Hollow" views="79.5K views" month="1 week ago" />
                            </div>

                            <br />
                            <br />

                            <div className="home-container container-fluid">
                                <Home titleImage={titleImage18} duration="1:29" logo={logoimage15} title="PUBG: New State - Official Trailer 2021" channelName="IGN" views="695K views" month="1 day ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage17} duration="3:07" logo={logoimage14} title="Injustice 2 - Reverse Flash Vs. Savitar (VERY HARD)" channelName="XGAMER" views="59K views" month="1 year ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage19} duration="1:26" logo={logoimage16} title="GODZILLA VS KONG Underwater Battle Trailer (2021) Monster Movie" channelName="ONE media" views="2.3K views" month="1 day ago" />
                                <br />
                                <br />
                                <Home titleImage={titleImage20} duration="7:46" logo={logoimage17} title="Batman Arkham Knight | PS4 Game Footage" channelName="playStation Europe" views="1.8M views" month="5 years ago" />
                            </div>

                        </Route>

                        <Route path="/trending">
                            <Trending />
                        </Route>

                        <Route path="/subscription">
                            <Subscription />
                        </Route>

                        <Route path="/library">
                            <Library />
                        </Route>

                        <Route path="/history">
                            <History />
                        </Route>

                    </div>

                </Router>

            </div>
        )
    }
}

export default Routerapp;