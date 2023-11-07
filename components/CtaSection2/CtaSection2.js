import React from 'react'
import Link from 'next/link'
import { homeDoc } from '../../document';

const CtaSection2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="Arkitek-cta-section section-padding">
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

export default CtaSection2;