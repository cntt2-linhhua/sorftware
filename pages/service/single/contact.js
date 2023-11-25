import React from 'react'
import { homeDoc } from '../../../document/home';
import { contactDoc } from '../../../document';


const Contact = () => {
    const changeHandler = e => {
        e.preventDefault();
    };

    const submitHandler = e => {
        e.preventDefault();
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
                            placeholder={contactDoc.yourName} />
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
                            placeholder={contactDoc.yourName} />
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <select className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            type="text"
                            name="subject">
                            <option>{ contactDoc.ChooseService }</option>
                            <option>{ homeDoc.ExteriorDesign }</option>
                            <option>{ homeDoc.designPlanning }</option>
                            <option>{ homeDoc.FurnitureDecor }</option>
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
                        placeholder={ contactDoc.message }>
                    </textarea>
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">{ contactDoc.submitNow }</button>
            </div>
        </form>
    )
}

export default Contact;