import React, {useReducer, useRef, useState} from 'react'

function useEmailValidation(seconds) {
    const [emailValid, setEmailValid] = useState(false);
    const [email, setEmail] = useReducer(emailReducer, '');

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function emailReducer(state, action) {
        const isValidEmail = validateEmail(action);
        setEmailValid(isValidEmail);
        return action;
    }

    return {setEmail, email, emailValid}
}

export default useEmailValidation;