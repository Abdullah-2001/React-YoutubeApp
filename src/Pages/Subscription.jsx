import react from 'react'
import './Subscription.css'

class Subscription extends react.Component {

    render() {

        return (

                <div className="container" id="subscription">
                    <i class="subscription-icon fab fa-youtube"></i>
                    <p className="dont-miss">Don't miss new videos</p>
                    <p className="favourites">Sign in to see updates from your favourite YouTube channels</p>
                    <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den-GB%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en-GB&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                        <button className="sign-in"> <i className="fas fa-user-circle"></i> SIGN IN</button>
                    </a>
                </div>

        )

    }

}

export default Subscription;