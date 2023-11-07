import React from 'react'
import Link from 'next/link'
import ctimg1 from '/public/images/cta-left.jpg'
import ctimg2 from '/public/images/cta-right.jpg'
import { homeDoc } from '../../document'

const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="Arkitek-cta-section-s2 section-padding">
            <div className="cta-left">
                <img src={ctimg1} alt="" />
            </div>
            <div className="cta-right">
                <img src={ctimg2} alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-7 col-12">
                        <div className="cta-content">
                            <h5>{homeDoc.callUs} 24/7</h5>
                            <Link onClick={ClickHandler} className="call" href="/contact">
                                {homeDoc.phoneNumber}
                            </Link>
                            <p>{homeDoc.subContact}</p>
                            <div className="cta-btn">
                                <Link onClick={ClickHandler} className="theme-btn" href="/contact">{homeDoc.btnMore}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection;