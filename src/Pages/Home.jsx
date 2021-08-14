import react from 'react'
import './Home.css'

class Home extends react.Component {

    render() {

        const { titleImage, duration, logo, title, channelName, views, month } = this.props

        return (

            <div className="video-container">

                <div className="card">

                    <div className="card-img">
                        <img className="title-img" src={titleImage} alt="" />
                        <p className="video-duration">{duration}</p>
                    </div>

                    <div className="logo-title">
                        <img width="40" className="logo-img" src={logo} alt="" />
                        <p className="title">{title}</p>
                    </div>

                    <div className="channel">
                        <p className="channel-name">{channelName}</p>
                    </div>

                    <div className="views-time">
                        <div className="views"> <span className="views">{views}</span><span className="time">{month}</span> </div>
                    </div>

                </div>

            </div >

        )

    }

}

export default Home;