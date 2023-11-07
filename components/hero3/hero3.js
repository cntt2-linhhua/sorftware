import React from "react";
import Link from 'next/link'
import { homeDoc } from "../../document";


const Hero3 = () => {
    return (
        <section className="static-hero-s2">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-10 col-12">
                                <div className="wpo-static-hero-inner">
                                    <span>{homeDoc.subTitilePage}</span>
                                    <h2 className="title">{ homeDoc.titlePage}</h2>
                                    <Link href="/about" className="theme-btn">{homeDoc.btnMore}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-img-4"></div>
        </section>
    )
}

export default Hero3;