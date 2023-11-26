import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const menus = [
    {
        id: 1,
        title: 'Trang chủ',
        link: '/',
    },

    {
        id: 3,
        title: 'Cửa hàng',
        link: '/shop',
    },

    {
        id: 6,
        title: 'Dự án',
        link: '/project',
    },
    {
        id: 7,
        title: 'Dịch vụ',
        link: '/service',
    },
    {
        id: 5,
        title: 'Tin tức',
        link: '/blog',
    },
    {
        id: 9,
        title: 'Giới thiệu',
        link: '/about',
    },
    {
        id: 88,
        title: 'Liên hệ',
        link: '/contact',
    }


]

const MobileMenu = () => {
    const { pathname } = useRouter()
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const colorItem = (href) => {
        if (pathname === href || (href !== '/' && pathname.includes(href))) return '#d48256'
        return '#fff'
    }

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.overflowY = menuActive ? 'hidden' : 'auto'
    }, [menuActive])

    return (
        <div>
            <div
                style={menuActive ? {
                    position: 'fixed',
                    zIndex: 9999,
                    width: '100vw',
                    height: '100vh',
                    top: 0,
                    left: 0,
                } : {}}
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                }}
            >
                <div style={{ overflow: 'hidden' }} className={`mobileMenu ${menuActive ? "show" : ""}`}>
                    <div className="menu-close">
                        <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                    </div>

                    <ul className="responsivemenu">
                        {menus.map((item, mn) => {
                            return (
                                <ListItem key={mn}>
                                    {/* {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{item.title}</Link>
                                } */}
                                    <Link className="active" onClick={ClickHandler} style={{ color: colorItem(item.link) }} href={item.link}>{item.title}</Link>
                                </ListItem>
                            )
                        })}
                    </ul>

                </div>
            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;