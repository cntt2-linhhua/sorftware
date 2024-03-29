import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Scrollbar from '../components/scrollbar/scrollbar';
import Hero3 from '../components/hero3/hero3';
import About3 from '../components/about3/about3';
import FunFact from '../components/FunFact';
import ServiceSection2 from '../components/ServiceSection2/ServiceSection2';
import ProjectSectionS2 from '../components/ProjectSectionS2/ProjectSectionS2';
import Testimonial3 from '../components/Testimonial3/Testimonial3';
import CtaSection from '../components/CtaSection/CtaSection';
import BlogSection2 from '../components/BlogSection2/BlogSection2';
import Footer from '../components/footer/Footer';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <Fragment>
            <h1>{t("main.header")}</h1>
            <Navbar hclass={'wpo-header-style-3'} topbarNone={'topbar-none'} />
            <Hero3 />
            <About3 />
            <FunFact />
            <ServiceSection2 />
            <ProjectSectionS2 />
            <Testimonial3 />
            <CtaSection />
            <BlogSection2 />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;
  