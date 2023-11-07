import React from 'react'
import Services from '../../../api/Services';
import Link from 'next/link';
import { servicesDoc } from '../../../document';

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder={servicesDoc.Search} />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>{ servicesDoc.Services }</h3>
                    <ul>
                        {Services.slice(0, 6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href={'/service/[slug]'} as={`/service/${service.slug}`}>{service.sTitle}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ServiceSidebar;