import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Contact from './single/contact';
import ServiceSidebar from './single/sidebar';
import Services from '../../api/Services';
import Footer from '../../components/footer/Footer';
import Image from 'next/image';
import { projectDoc, servicesDoc } from '../../document';

const ServiceSinglePage = (props) => {

    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={serviceDetails?.sTitle} pagesub={servicesDoc.Services} />
            <div className="wpo-service-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <Image src={serviceDetails?.sSimg} alt="" />
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h3>{serviceDetails?.sTitle}</h3>
                                    </div>
                                    <p>Trong thiết kế, chúng tôi đưa những đặc điểm của thế giới tự nhiên vào không gian xây dựng như nước, cây xanh và ánh sáng tự nhiên hoặc các yếu tố như gỗ và đá. Việc khuyến khích sử dụng các hệ thống và quy trình tự nhiên trong thiết kế cho phép tiếp xúc với thiên nhiên, và từ đó, các phương pháp thiết kế này sẽ cải thiện sức khỏe và phúc lợi. Có một số lợi ích có thể có, bao gồm giảm sự thay đổi nhịp tim và nhịp tim, giảm huyết áp và tăng hoạt động trong hệ thống thần kinh của chúng ta, chỉ kể một số lợi ích.</p>
                                    <p>Theo thời gian, mối liên hệ của chúng ta với thế giới tự nhiên cũng khác nhau song song với sự phát triển của công nghệ. Những tiến bộ trong thế kỷ 19 và 20 đã thay đổi căn bản cách con người tương tác với thiên nhiên. Được che chở khỏi các yếu tố thời tiết, chúng tôi ngày càng dành nhiều thời gian hơn trong nhà. Ngày nay, phần lớn mọi người dành gần 80-90% thời gian ở trong nhà, di chuyển giữa nhà và nơi làm việc. Khi các nhà thiết kế nội thất đón nhận niềm đam mê sinh học.</p>
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <Image src={serviceDetails?.ssImg1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <Image src={serviceDetails?.ssImg2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>{ servicesDoc.OurCapabilities }</h3>
                                    </div>
                                    <p>Thiết kế nội thất trong mơ của bạn bắt đầu bằng một ý tưởng được phản ánh trong các bản thiết kế, kế hoạch dự án, dưới dạng hình ảnh 3D. Có thể làm cho bất kỳ địa điểm nào trở nên thú vị, hấp dẫn và tiện dụng hơn, vì điều này đáng để tin tưởng vào các chuyên gia thực sự và khi đó số tiền sẽ không bị chi tiêu một cách vô ích.</p>
                                    <ul>
                                        <li>{ servicesDoc.OurCapabilities1 }</li>
                                        <li>{ servicesDoc.OurCapabilities2 }</li>
                                        <li>{ servicesDoc.OurCapabilities3 }</li>
                                    </ul>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>{ servicesDoc.OurApproach }</h3>
                                    </div>
                                    <p>{servicesDoc.subOurApproach}</p>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>{ servicesDoc.OurWorkProcess }</h3>
                                    </div>
                                    <ul>
                                        <li>{ servicesDoc.OurWorkProcess1 }</li>
                                        <li>{ servicesDoc.OurWorkProcess2 }</li>
                                        <li>{ servicesDoc.OurWorkProcess3 }</li>
                                    </ul>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>{ servicesDoc.RelatedService}</h3>
                                    </div>
                                    <div className="wpo-service-area">
                                        <div className="row align-items-center">
                                            {Services.slice(0,3).map((service, srv) => (
                                                <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                                    <div className="wpo-service-item">
                                                        <i><Image src={service.scImg} alt="" /></i>
                                                        <h2>{service.sTitle}</h2>
                                                        <p>{service.des2}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-contact-area">
                                        <div className="wpo-contact-title">
                                            <h2>{ projectDoc.HaveProjectInMind }</h2>
                                            <p>{ projectDoc.HaveProjectInMindContact }</p>
                                        </div>
                                        <div className="wpo-contact-form-area">
                                            <Contact/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ServiceSidebar/>
                    </div>
                </div>
            </div>
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;