import React from 'react';
import Link from 'next/link';
import Services from '../../api/Services';
import Image from 'next/image';
import { homeDoc } from '../../document/home';


const ServiceSection2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="Arkitek-service-section-s2 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title">
                            <span>{ homeDoc.ourServices }</span>
                            <h2>{ homeDoc.whatCanWeOffer }</h2>
                        </div>
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row" style={{ alignSelf: 'stretch', justifyContent: 'stretch'}}>
                        {Services.map((service, Sitem) => (
                            <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
                                <div className="service-item">
                                    <div className="icon">
                                        <Image src={service.scImg} alt=""/>
                                    </div>
                                    <div className="text">
                                        <h2><Link onClick={ClickHandler} href={'/service/[slug]'} as={`/service/${service.slug}`}>{service.sTitle}</Link></h2>
                                        <p>{service.des2}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ServiceSection2;