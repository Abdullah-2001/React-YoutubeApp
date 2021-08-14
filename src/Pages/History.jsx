import react from 'react'
import './History.css'

class History extends react.Component {

    render() {

        return (

            <div>

                <div className="container" id="history">
                    <i class="history-icon far fa-history"></i>
                    <p className="keep-track">Keep track of what you watch</p>
                    <p className="viewable">Watch history isn't viewable when you're signed out. <a href="#">Learn more</a></p>
                    <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den-GB%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en-GB&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                        <button className="sign-in"> <i className="fas fa-user-circle"></i> SIGN IN</button>
                    </a>
                </div>

                <div class="sidenav">
                    <p className="history-type">History type</p>
                    <hr/>
                    <p>Watch history</p>
                    <hr/>
                    <p>Community</p>
                </div>

            </div>

        )

    }

}

export default History;