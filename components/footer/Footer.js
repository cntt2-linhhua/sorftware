import React from 'react'
import Link from 'next/link'
import Logo from '/public/images/logo-2.svg'
import Services from '../../api/Services';
import Image from 'next/image';
import { footerDoc, homeDoc } from '../../document';

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="blog" />
                                </div>
                                <p style={{ whiteSpace: 'pre-wrap'}}>{footerDoc.footerText}</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-linkedin"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-email"></i>{ footerDoc.email }</li>
                                        <li><i className="fi flaticon-phone-call"></i>{homeDoc.phoneNumber}</li>
                                        <li style={{ whiteSpace: 'pre-wrap' }}><i className="fi flaticon-placeholder"></i>{footerDoc.address}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>{footerDoc.TopServices}</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} href={'/service/[slug]'} as={`/service/${service.slug}`}>{service.sTitle}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>{footerDoc.SubscribeNewsletter}</h3>
                                </div>
                                <form onSubmit={SubmitHandler}>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder={footerDoc.yourEmailAddess}
                                            required="" />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit">{footerDoc.subcribe}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2023  Arkitek by <Link onClick={ClickHandler} href="/">HVTeam</Link>. All
                                Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;