import react from 'react'
import './Library.css'

class Library extends react.Component {
    render() {
        return (
            <div className="container" id="library">
                <i class="play-icon fas fa-forward"></i>                
                <p className="enjoy">Enjoy your favourite videos</p>
                <p className="liked">Sign in to access videos that you've liked or saved</p>
                <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den-GB%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en-GB&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                    <button className="sign-in"> <i className="fas fa-user-circle"></i> SIGN IN</button>
                </a>
            </div>
        )
    }
}

export default Library;