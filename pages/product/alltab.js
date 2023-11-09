import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Image from 'next/image'
import rimg1 from '/public/images/shop/shop-single/review/img-1.jpg' 
import rimg2 from '/public/images/shop/shop-single/review/img-2.jpg' 
import { productDoc } from '../../document';


const ProductTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }



    return (
        <div className="row">
            <div className="col col-xs-12">
                <div className="product-info">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                               {productDoc.Description}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >

                            {productDoc.Review}
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <div id="Schedule">
                                    <p>Giá sản phẩm thay đổi tùy thuộc vào màu da, chất liệu da, động cơ...(Quý khách vui lòng liên hệ với nhân viên kinh doanh để nhận báo giá chi tiết)</p>
                                        <p>Chắt lọc tỉ mỉ từ những nguyên liệu hàng đầu: sử dụng chất liệu da bò thật từ Ý, khung gỗ thượng hạng và lớp đệm mút êm ái nhằm mang đến trải nghiệm ngồi hoàn hảo nhất.</p>
                                        <p>Quy trình sản xuất nghiêm ngặt gồm 128 bước & 3 lần kiểm tra khắt khe trước khi đưa ra thị trường sản phẩm hoàn hảo nhất.</p>
                                        <p>Thiết kế được lấy cảm hứng từ những bức tranh cuộc sống, tượng trưng cho văn hóa và thẩm mỹ Ý.</p>
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                        <div className="row">
                            {/* <div className="col col-lg-10 col-12">
                                <div className="client-rv">
                                    <div className="client-pic">
                                        <Image src={rimg1} alt=""/>
                                    </div>
                                    <div className="details">
                                        <div className="name-rating-time">
                                            <div className="name-rating">
                                                <div>
                                                    <h4>Jenefar Willium</h4>
                                                </div>
                                                <div className="product-rt">
                                                    <span>25 Sep 2022</span>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-rv">
                                    <div className="client-pic">
                                         <Image src={rimg2} alt=""/>
                                    </div>
                                    <div className="details">
                                        <div className="name-rating-time">
                                            <div className="name-rating">
                                                <div>
                                                    <h4>Maria Bannet</h4>
                                                </div>
                                                <div className="product-rt">
                                                    <span>28 Sep 2022</span>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="col col-lg-12 col-12 review-form-wrapper">
                                <div className="review-form">
                                        <h4>{productDoc.AddReview}</h4>
                                        <p>{productDoc.subAddReview}</p>
                                    <form onSubmit={SubmitHandler}>
                                        <div className="give-rat-sec">
                                                <p>{productDoc.YourRating}</p>
                                            <div className="give-rating">
                                                <label>
                                                    <input type="radio" name="stars" value="1" />
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="2" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="3" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="4" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="5" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" placeholder={productDoc.Name}
                                                required/>
                                        </div>
                                        <div>
                                            <input type="email" className="form-control" placeholder="Email *"
                                                required/>
                                        </div>
                                        <div>
                                            <textarea className="form-control"
                                                placeholder={productDoc.ReviewMesage}></textarea>
                                        </div>
                                        <div className="rating-wrapper">
                                            <div className="submit">
                                                    <button type="submit" className="theme-btn-s2">{productDoc.PostReview}</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    );
}

export default ProductTabs;