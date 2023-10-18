import { useState } from "react";
import "./add-member-page.css"

function AddMemberPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    
    function changeName(e) {
        setName(e.target.value)
    }

    function changeEmail(e) {
        setEmail(e.target.value)
    }

    function validateForm(e) {
        e.preventDefault();
        let nameError = true;
        let emailError = true;

        if (name.length <= 0) {
            setNameError(true);
            nameError = true;
        } else {
            setNameError(false);
            nameError = false;
        }

        if (email.length <= 0) {
            setEmailError(true);
            emailError = true;
        } else {
            setEmailError(false);
            emailError = false;
        }

        if (!nameError && !emailError) {
            handleSubmit(e);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (name.length > 0 && email.length > 0) {
            fetch('http://localhost:8000/api/members', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    school_ids: [1], //hard coded for now, 
                    //with more time I would create a list where you can select multiple schools
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);  
            });
        }

    }

    return (
        <div className="form-container">
            <form onSubmit={validateForm} className="add-member-form">
                <h3>Add a new member</h3>
                <div>
                    <label htmlFor="name">Name</label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={changeName}
                        className={nameError ? "input-error" : ""}
                    />
                    <p className={nameError ? "error" : "hidden"}>name field error</p>
                </div>
                <div>
                    <label htmlFor="email">Email</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={changeEmail}
                        className={emailError ? "input-error" : ""}
                    />
                    <p className={emailError ? "error" : "hidden"}>email field error</p>
                </div>

                <input type="submit" value="Add" className="submit-button" />
            </form>
        </div>
    );
}

export default AddMemberPage