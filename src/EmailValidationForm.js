import useEmailValidation from "./hooks/useEmailValidation";

function EmailValidationForm() {

    const {setEmail, email, emailValid} = useEmailValidation(30);

    return (
        <div className="container">
            <br/>
            <div>
                <div className="content">
                    <input

                        placeholder="Enter Email"
                        type="email"
                        name="email"
                        required
                    />
                    &nbsp;&nbsp;&nbsp;
                    <button

                        className="btn-lg"
                        type="submit"
                    >
                        PRESS ME!
                    </button>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )

}


export default EmailValidationForm;