import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import Link from 'next/link'
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image'
import blog3 from '/public/images/blog-details/comments-author/img-1.jpg'
import blog4 from '/public/images/blog-details/comments-author/img-2.jpg'
import blog5 from '/public/images/blog-details/comments-author/img-3.jpg'
import blog6 from '/public/images/blog-details/author.jpg'
import gl1 from '/public/images/blog/img-3.jpg'
import gl2 from '/public/images/blog/img-2.jpg'
import Logo from '/public/images/logo.svg'
import { blogDoc, projectDoc } from '../../document';

const submitHandler = (e) => {
    e.preventDefault()
}


const BlogSingle = (props) => {
    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={BlogDetails?.title} pagesub="blog" />
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-10 offset-lg-1">
                            <div className="wpo-blog-content">
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <Image src={BlogDetails?.blogSingleImg || ''} alt="" />
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi ti-user"></i> By <Link href="/">{BlogDetails?.author}</Link> </li>
                                            <li><i className="fi ti-comment-alt"></i> {blogDoc.comment} {BlogDetails?.comment}</li>
                                            <li><i className="fi flaticon-calendar"></i> {BlogDetails?.create_at}</li>
                                        </ul>
                                    </div>
                                    <h2>{BlogDetails?.title}</h2>
                                    <p>Một hiệu ứng tổng thể làm sống dậy và làm gián đoạn chủ nghĩa lập thể vốn đặt hình thái của hệ thống phương Tây ngoài những khuôn mẫu của thiết kế hiện đại. Đặc trưng bởi sự phù hợp để sử dụng trong một loạt các cách sắp xếp đương đại và truyền thống khác nhau, West cũng có những tia sáng của sự sáng tạo thuần túy, chẳng hạn như ghế dài, ở dạng ngũ giác hoặc lục giác và các yếu tố nổi bật cho tựa lưng nổi bật của chúng trong yên ngựa , được tạo hình công thái học để nâng đỡ và nâng đỡ phần đệm phía sau. Các yếu tố thực sự gây ngạc nhiên, chúng phá vỡ bố cục thành phần, tạo ra một điểm thu hút về phong cách và làm gián đoạn hiệu ứng liên tục của lớp phủ vải, làm sáng trực quan âm lượng ở phía sau. Một giải pháp được thiết kế để tối ưu hóa cả diện mạo và hình thức, được tạo ra với bí quyết về thiết kế và chất liệu savoir-faire kết hợp với những đường may tinh xảo luôn tạo nên sự khác biệt cho thương hiệu Minotti.</p>
                                    <blockquote>
                                        Mọi thành phần của hệ thống đều được làm bằng đệm lông ngỗng tinh tế để đảm bảo sự thoải mái tối đa, đệm được hoàn thiện bằng đường ống xác định cấu hình của chúng và dải nhôm đặc biệt, hơi tròn ở các cạnh lướt qua sàn, trong màu Brandy đánh bóng hoàn toàn mới hoàn thành.
                                    </blockquote>
                                    <div className="gallery">
                                        <div>
                                            <Image src={gl1 || ''} alt="" />
                                        </div>
                                        <div>
                                            <Image src={gl2 || ''} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="tag-share clearfix">
                                    <div className="tag">
                                        <span>{ projectDoc.Share }: </span>
                                        <ul>
                                            <li><Link href="/">Planning</Link></li>
                                            <li><Link href="/">Architecture</Link></li>
                                            <li><Link href="/">creative</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tag-share-s2 clearfix">
                                    <div className="tag">
                                        <span>{ projectDoc.Share }: </span>
                                        <ul>
                                            <li><Link href="/">facebook</Link></li>
                                            <li><Link href="/">twitter</Link></li>
                                            <li><Link href="/">linkedin</Link></li>
                                            <li><Link href="/">pinterest</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="author-box">
                                    <div className="author-avatar">
                                        <Link href="/" target="_blank"><Image src={blog6 || ''} alt="" /></Link>
                                    </div>
                                    <div className="author-content">
                                    <h4>Hoang Linh Nghi</h4>
                    <p>CHÀO! Chúc bạn một ngày tốt lành. Tôi là tác giả của blog này. Cảm ơn bạn đã dành thời gian đọc bài viết của tôi.</p>
                                        <div className="socials">
                                            <ul className="social-link">
                                                <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                                <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                                <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                                                <li><Link href="/"><i className="ti-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="more-posts">
                                    <div className="previous-post">
                                        <Link href="/">
                                            <span className="post-control-link">{ blogDoc.PreviousPost }</span>
                                            <span className="post-name">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</span>
                                        </Link>
                                    </div>
                                    <div className="next-post">
                                        <Link href="/">
                                            <span className="post-control-link">{ blogDoc.NextPost }</span>
                                            <span className="post-name">Dignissimos ducimus qui blanditiis praesentiu deleniti atque corrupti quos dolores</span>
                                        </Link>
                                    </div>
                                </div> */}

                                <div className="comments-area">
                                    {/* <div className="comments-section">
                                        <h3 className="comments-title">{ blogDoc.Comments }</h3>
                                        <ol className="comments">
                                            <li className="comment even thread-even depth-1" id="comment-1">
                                                <div id="div-comment-1">
                                                    <div className="comment-theme">
                                                        <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>John Abraham <span className="comments-date">January 12,2022
                                                                    At 9.00am</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>I will give you a complete account of the system, and
                                                                    expound the actual teachings of the great explorer of
                                                                    the truth, </p>
                                                                <div className="comments-reply">
                                                                    <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="children">
                                                    <li className="comment">
                                                        <div>
                                                            <div className="comment-theme">
                                                                <div className="comment-image"><Image src={blog4} alt="" /></div>
                                                            </div>
                                                            <div className="comment-main-area">
                                                                <div className="comment-wrapper">
                                                                    <div className="comments-meta">
                                                                        <h4>Lily Watson <span className="comments-date">January
                                                                            12,2022 At 9.00am</span></h4>
                                                                    </div>
                                                                    <div className="comment-area">
                                                                        <p>I will give you a complete account of the system,
                                                                            and expound the actual teachings of the great
                                                                            explorer of the truth, </p>
                                                                        <div className="comments-reply">
                                                                            <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li className="comment">
                                                                <div>
                                                                    <div className="comment-theme">
                                                                        <div className="comment-image"><Image src={blog5} alt="" /></div>
                                                                    </div>
                                                                    <div className="comment-main-area">
                                                                        <div className="comment-wrapper">
                                                                            <div className="comments-meta">
                                                                                <h4>John Abraham <span className="comments-date">January
                                                                                    12,2022 At 9.00am</span></h4>
                                                                            </div>
                                                                            <div className="comment-area">
                                                                                <p>I will give you a complete account of the
                                                                                    system, and expound the actual teachings
                                                                                    of the great explorer of the truth, </p>
                                                                                <div className="comments-reply">
                                                                                    <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="comment">
                                                <div>
                                                    <div className="comment-theme">
                                                        <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>John Abraham <span className="comments-date">January 12,2022
                                                                    At 9.00am</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>I will give you a complete account of the system, and
                                                                    expound the actual teachings of the great explorer of
                                                                    the truth, </p>
                                                                <div className="comments-reply">
                                                                    <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div> */}
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">{ blogDoc.postComment }</h3>
                                        <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                            <div className="form-textarea">
                                                <textarea id="comment" placeholder={blogDoc.WriteYourComments}></textarea>
                                            </div>
                                            <div className="form-inputs">
                                                <input placeholder="Tên" type="text" />
                                                <input placeholder="Email" type="email" />
                                            </div>
                                            <div className="form-submit">
                                                <input id="submit" value="Gửi bình luận" type="submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogSingle;
