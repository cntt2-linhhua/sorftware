import React from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from '/public/images/logo.svg'
import HeaderTopbar from '../HeaderTopbar';
import Image from 'next/image';


const Header2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <header id="header">
            <HeaderTopbar />
            <div className="wpo-site-header wpo-header-style-4">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/"><Image src={Logo}
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className="col col-xl-5 col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Home</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/shop">Shop</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/project">Portfolio</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/service">Service</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/blog">Blog</Link>
                                            <ul className="sub-menu">
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/blog-single-fullwidth/The-Golden-Ratio-2D-Sketch">Blog details</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
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

const mapStateToProps = (state) => {
    return {
        // carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header2);