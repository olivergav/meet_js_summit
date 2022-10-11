import {useState} from "react";

function SignMeUp() {
    const [email, setEmail] = useState('');

    function signUpCallback() {

    }

    return (
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
            >Get Updates</button>
        </>
    )
}

export default SignMeUp;