import React from 'react';
import ContactForm from '../ContactFrom'
import { contactDoc } from '../../document';


const Contactpage = () => {

    return (
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-placeholder"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>{ contactDoc.Address }</h2>
                                            <p>{ contactDoc.subAddress }</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>{ contactDoc.EmailUs }</h2>
                                            <p>{ contactDoc.subEmailUs }</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>{ contactDoc.CallNow }</h2>
                                            <p>{ contactDoc.subCallNow1 }</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>{ contactDoc.HaveAnyQuestion }</h2>
                            <p style={{ whiteSpace: 'pre-wrap' }}>{ contactDoc.subHaveAnyQuestion }</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.795007295136!2d105.73654277594733!3d21.00085278873524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453070dd3cb8d%3A0xc1a8b1a238ffedff!2sT%C3%B2a%20S3.03%20Vinhomes%20Smart%20City!5e0!3m2!1svi!2s!4v1701003906523!5m2!1svi!2s"></iframe>
                </div>
            </section>
        </section>
    )

}

export default Contactpage;
