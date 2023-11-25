import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from '/public/images/logo.svg'
import Image from 'next/image';
import { useRouter } from 'next/router';


const Header = (props) => {
    const { pathname } = useRouter()
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const colorItem = (href) => {
        if (href === pathname) return '#d48256'

        return '#000'
    }

    return (
        <header id="header" className={props.topbarClass}>
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" href="/"><Image src={Logo}
                                        alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} style={{ color: colorItem('/') }} href="/">Trang chủ</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} style={{ color: colorItem('/shop') }} href="/shop">Cửa hàng</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} style={{ color: colorItem('/project') }} href="/project">Dự án</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} style={{ color: colorItem('/service') }} href="/service">Dịch vụ</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} style={{ color: colorItem('/blog') }} href="/blog">Tin tức</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} style={{ color: colorItem('/about') }} href="/about">Giới thiệu</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} style={{ color: colorItem('/contact') }} href="/contact">Liên hệ</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (_state) => {
    return { };
};


export default connect(mapStateToProps, { removeFromCart })(Header);