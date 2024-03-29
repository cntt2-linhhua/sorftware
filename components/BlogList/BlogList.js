import React from 'react';
import Link from 'next/link'
import BlogSidebar from '../BlogSidebar'
import VideoModal from '../ModalVideo'

import blogs from '../../api/blogs'
import Image from 'next/image';
import { blogDoc } from '../../document';



const BlogList = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            {blogs.map((blog, bitem) => (
                                <div className={`post  ${blog.blClass}`}key={bitem}>
                                    <div className="entry-media video-holder">
                                        <Image src={blog.blogSingleImg} alt=""/>
                                        <VideoModal/>
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-user"></i> By <Link onClick={ClickHandler} href={'/blog-single-fullwidth/[slug]'} as={`/blog-single-fullwidth/${blog.slug}`}>{blog.authorTitle}</Link> </li>
                                            <li><i className="fi flaticon-comment-white-oval-bubble"></i> {blogDoc.comment} {blog.comment} </li>
                                            <li><i className="fi flaticon-calendar"></i> {blog.create_at}</li>
                                        </ul>
                                    </div>
                                    <div className="entry-details">
                                        <h3><Link onClick={ClickHandler} href={'/blog-single-fullwidth/[slug]'} as={`/blog-single-fullwidth/${blog.slug}`}>{blog.title}</Link></h3>
                                        <p style={{ whiteSpace: 'pre-wrap' }}>{ blogDoc.subSmallHouseForSmartFamily }</p>
                                        <Link onClick={ClickHandler} href={'/blog-single-fullwidth/[slug]'} as={`/blog-single-fullwidth/${blog.slug}`} className="read-more">{ blogDoc.readMore }</Link>
                                    </div>
                                </div>
                            ))}

                            {/* <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link href="/blog-left-sidebar" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link href="/blog-left-sidebar">1</Link></li>
                                    <li><Link href="/blog-left-sidebar">2</Link></li>
                                    <li><Link href="/blog-left-sidebar">3</Link></li>
                                    <li>
                                        <Link href="/blog-left-sidebar" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft}/>
                </div>
            </div>
        </section>

     )
        
}

export default BlogList;
