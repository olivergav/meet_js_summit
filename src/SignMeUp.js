import {useContext, useState} from "react";
import {ConfigContext} from "./App";

function SignMeUp() {
    const [email, setEmail] = useState('');
    const {showSignMeUp} = useContext(ConfigContext);

    function signUpCallback() {

    }

    return (
        !showSignMeUp ? null : (
            <>
                <input type="email"
                       placeholder="Enter email"
                       onChange={(event) => setEmail(event.target.value)}
                       value={email}/>
                <button onClick={() => {
                    signUpCallback(email)
                    setEmail('')
                }}
                        disabled={!email.includes('@')}
                >Get Updates
                </button>
            </>
        )
    )
}

export default SignMeUp;