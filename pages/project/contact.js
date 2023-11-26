

import React from 'react'
// import SimpleReactValidator from 'simple-react-validator';
import { projectDoc } from '../../document';


const Contact = () => {

    // const [validator] = useState(new SimpleReactValidator({
    //     className: 'errorMessage'
    // }));
    const changeHandler = e => {
        e.preventDefault()
    };

    const submitHandler = e => {
        e.preventDefault();
        // if (validator.allValid()) {
        //     validator.hideMessages();
        //     setForms({
        //         name: '',
        //         email: '',
        //         subject: '',
        //         message: ''
        //     })
        // } else {
        //     validator.showMessages();
        // }
    };


    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder={projectDoc.YourName} />
                    </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder={projectDoc.YourEmail} />
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <select className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            type="text"
                            name="subject">
                            <option disabled="disabled">{ projectDoc.project }</option>
                            <option>{ projectDoc.Furniture }</option>
                            <option>{ projectDoc.CompleteInterior }</option>
                            <option>{ projectDoc.ExteriorDesign }</option>
                        </select>
                    </div>
                </div>
                <div className="col fullwidth col-lg-12">
                    <textarea
                        className="form-control"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        type="text"
                        name="message"
                        placeholder={projectDoc.Messege}>
                    </textarea>
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">{projectDoc.submitNow}</button>
            </div>
        </form>
    )
}

export default Contact;
