import React from 'react';

const Form = () => {
    return (
        <form role="form">
            <label>
                Name
                <input type="text" name="name" />
            </label>
            <label>
                Email
                <input type="email" name="email" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;