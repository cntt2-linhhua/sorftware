import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Services from '../../api/Services';
import Image from 'next/image';


const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};



const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="Arkitek-service-section-s3 section-padding">
            <div className="shape-1">
                <svg width="596" height="590" viewBox="0 0 596 590" fill="none">
                    <path d="M148 590L596 0H0L148 590Z" />
                </svg>
            </div>
            <div className="shape-2">
                <svg width="328" height="510" viewBox="0 0 328 510" fill="none">
                    <path d="M62 0L328 226V510H62L0 472L62 0Z" />
                </svg>
            </div>
            <div className="container-fluid">
                <div className="service-wrap">
                    <div className="service-title-left">
                        <div className="wpo-section-title">
                            <h2>What Can We Offer
                                For You</h2>
                            <p>Lectus suspendisse mi massa et mollis diam urna interdum consequat.
                                Libero quis non odio sed convallis cursus fames vitae volutpat.
                                At congue viverra integer est. Quam convallis dignissim cras sit morbi diam.</p>
                            <Link onClick={ClickHandler} href="/service">See All Services....</Link>
                        </div>

                    </div>
                    <div className="service-content service-content-slider">
                        <Slider {...settings}>
                            {Services.map((service, Sitem) => (
                                <div className="service-single-item" key={Sitem}>
                                    <div className="icon">
                                        <Image src={service.sImg} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2><Link onClick={ClickHandler} href={'/service/[slug]'} as={`/service/${service.slug}`}>{service.sTitle}</Link></h2>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ServiceSection;