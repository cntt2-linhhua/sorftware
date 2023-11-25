import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import { contactDoc } from '../../document';


const ContactForm = () => {
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        e.preventDefault()
    };

    const submitHandler = e => {
        e.preventDefault();
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder={contactDoc.yourName} />
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder={contactDoc.yourEmail} />
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            type="phone"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder={contactDoc.phone} />
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            type="text"
                            name="subject">
                            <option>{contactDoc.Architecture}</option>
                            <option>{contactDoc.TheRehearsalDinner}</option>
                            <option>{contactDoc.TheAfterparty}</option>
                            <option>{contactDoc.Videographers}</option>
                            <option>{contactDoc.PerfectCake}</option>
                            <option>{contactDoc.AllOfTheAbove}</option>
                        </select>
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        type="text"
                        name="message"
                        placeholder={ contactDoc.message }>
                    </textarea>
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">{ contactDoc.submitNow }</button>
            </div>
        </form >
    )
}

export default ContactForm;