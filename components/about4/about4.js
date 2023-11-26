import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about.jpg'
import sign from '/public/images/signeture.png'
import Image from 'next/image'


const About4 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`Arkitek-about-section ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-8 col-12">
                        <div className="about-left-item">
                            <div className="wpo-section-title">
                                <span>Giới thiệu về chúng tôi</span>
                                <h2>Chúng tôi gọi phong cách của mình là "sống tối giản". Sống tối giản không phải là về ngoại hình hay hình ảnh. Nó đề cập đến cảm xúc bên trong, con người thật của bạn.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-12">
                        <div className="about-middle-item">
                            <Image src={abimg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-12">
                        <div className="about-right-item">
                            <p><span>T</span>riết lý cơ bản của studio chúng tôi là tạo ra các giải pháp cá nhân, tuyệt đẹp về mặt thẩm mỹ cho khách hàng của chúng tôi bằng cách phát triển nhanh như chớp các dự án sử dụng phong cách độc đáo.</p>
                            <p><span>C</span>húng tôi gọi phong cách của mình là "sống tối giản". Sống tối giản không phải là về ngoại hình hay hình ảnh. Nó đề cập đến cảm xúc bên trong, con người thật của bạn.</p>
                            <h2>Mr. Đạt</h2>
                            <h3>- Giám đốc Công ty</h3>
                            <div className="signeture-img">
                                <Image src={sign} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About4;