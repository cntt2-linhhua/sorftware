import React from 'react'
import blogs from '../../api/blogs'
import SectionTitle from '../SectionTitle/SectionTitle'
import Link from 'next/link'
import Image from 'next/image'
import { homeDoc } from '../../document'

const BlogSection2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-blog-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subTitle={homeDoc.OURBLOG} Title={homeDoc.ReadOurLatestNews} />
                    </div>
                </div>
                <div className="blog-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gallery-container clearfix">
                                {blogs.map((blog, Bitem) => (
                                    <div className="grid" key={Bitem}>
                                        <div className={`blog-item ${blog.sClass}`}>
                                            <div className="image">
                                                <Image src={blog.screens} alt="" />
                                            </div>
                                            <div className="blog-content">
                                                <div className="thumb">
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} href={'/blog-single-fullwidth/[slug]'} as={`/blog-single-fullwidth/${blog.slug}`}>{blog.author}</Link></li>
                                                        <li>{blog.create_at}</li>
                                                    </ul>
                                                </div>
                                                <h2><Link onClick={ClickHandler} href={'/blog-single-fullwidth/[slug]'} as={`/blog-single-fullwidth/${blog.slug}`}>{blog.title}</Link></h2>
                                                <p>{blog.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection2;