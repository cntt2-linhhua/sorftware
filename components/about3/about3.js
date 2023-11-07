import React from 'react'
import CountUp from 'react-countup';
import Link from 'next/link'
import abimg from '/public/images/about-1.jpg'
import icon from '/public/images/call.svg'
import Image from 'next/image';
import { homeDoc } from '../../document';


const About3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className="Arkitek-about-section-s3 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-left-item">
                            <div className="wpo-section-title">
                                <span>{homeDoc.aboutUs}</span>
                                <h2>{homeDoc.solugan}</h2>
                                <p style={{ whiteSpace: 'pre-wrap' }}>{homeDoc.subSolugan}</p>
                            </div>
                            <div className="left-btn">
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">{homeDoc.btnMore}</Link>
                                <Link onClick={ClickHandler} className="call" href="/contact">
                                    <div className="icon">
                                        <Image src={icon} alt="" />
                                    </div>
                                    <div className="text">
                                        <h5>{ homeDoc.callUs }</h5>
                                        <span>{ homeDoc.sdt }</span>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="about-right-item">
                            <div className="right-image-1">
                                <Image src={abimg} alt=""/>
                            </div>
                            <div className="right-text">
                                <div className="info">
                                <h3><CountUp end={15} enableScrollSpy />+</h3>
                                    <p style={{ whiteSpace: 'pre-wrap' }}>{ homeDoc.yearOfExperience }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default About3;