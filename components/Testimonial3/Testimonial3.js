import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../public/images/testimonial/4.jpeg'
import ts2 from '../../public/images/testimonial/5.jpeg'
import quote from '../../public/images/testimonial/quote-1.png'
import Image from 'next/image';


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "Triết lý cơ bản của cty chúng tôi là tạo ra các giải pháp cá nhân, tuyệt đẹp về mặt thẩm mỹ cho khách hàng bằng cách phát triển nhanh như chớp các dự án sử dụng phong cách và kiến ​​trúc độc đáo. Ngay cả khi bạn không có sẵn bản phác thảo về những gì bạn muốn – chúng tôi sẽ giúp bạn có được kết quả mà bạn mơ ước.",
        Title: 'Đỗ Văn Đạt',
        Sub: "Giám đốc",
    },
    {
        id: '02',
        tImg: ts2,
        Des: "Trong thế giới của thiết kế, mỗi đường nét không chỉ là một hình ảnh, mà là câu chuyện được kể một cách tinh tế. Thiết kế không chỉ là về việc tạo ra cái nhìn, mà là về việc làm cho mọi cái nhìn đều có ý nghĩa và tương tác với người nhìn một cách sâu sắc",
        Title: 'Đỗ Thị Thuý',
        Sub: "Designer",
    }
]

const Testimonial3 = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <section className="Arkitek-testimonial-section s3 section-padding">
            <div className="container">
                <div className="row align-items-center testimonial-slider">
                    <div className="col-lg-6 col-md-5 col-12">
                        <div className="testimonial-left-item slider-nav">
                            <Slider
                                asNavFor={nav1}
                                ref={(slider2) => setNav2(slider2)}
                                slidesToShow={1}
                                fade={true}
                                arrows={false}
                                swipeToSlide={true}
                                focusOnSelect={true}
                            >
                                {
                                    testimonial.map((tesmnl, tsm) => (
                                        <div className="image" key={tsm}>
                                            <Image src={tesmnl.tImg} alt="" />
                                        </div>
                                    ))
                                }

                            </Slider>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7 col-12">
                        <div className="testimonial-right-wrap slider-for">
                            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={true} arrows={false} fade={true}>
                                {
                                    testimonial.map((tesmnl, tsm) => (
                                        <div className="testimonial-item" key={tsm}>
                                            <div className="icon">
                                                <Image src={quote} alt="" />
                                            </div>
                                            <p>{tesmnl.Des}</p>
                                            <h3>{tesmnl.Title}</h3>
                                            <span>{tesmnl.Sub}</span>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial3;