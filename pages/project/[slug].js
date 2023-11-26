import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Project from '../../api/Projects';
import Contact from './contact';
import RelatedProject from './related';
import Footer from '../../components/footer/Footer';
import Image from 'next/image';
import { projectDoc } from '../../document';
 
const ProjectSinglePage = (props) => {
    const router = useRouter()

    const projectDetails = Project.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={projectDetails?.pTitle} pagesub={projectDoc.project} />
            <div className="wpo-project-single-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="wpo-project-single-wrap">
                                <div className="wpo-project-single-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="wpo-project-single-title">
                                                <h3>{projectDoc.project} {projectDetails?.pTitle}</h3>
                                            </div>
                                            <p>{projectDoc.subArchitectureProject}</p>
                                            {/* <p>Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat
                                                odio
                                                facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra
                                                est, at
                                                rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit
                                                sit Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum.
                                                Posuere et eget orci. sed velit dictum quam. Id risus pharetra est</p> */}
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="wpo-project-single-content-des-right">
                                                <ul>
                                                    <li>{projectDoc.Location} :<span>7 Lake Street,London</span></li>
                                                    <li>{projectDoc.Client} :<span>wpOceans</span></li>
                                                    <li>{projectDoc.Consult} :<span>Harry Johnson</span></li>
                                                    <li>{projectDoc.ProjectType} :<span>{projectDetails?.pTitle}</span></li>
                                                    <li>{projectDoc.Duration} :<span>6 Month</span></li>
                                                    <li>{projectDoc.Completion} :<span>15 Apr 2023</span></li>
                                                    <li>{projectDoc.Share} :<span>Architecture, Interior</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-project-single-main-img">
                                        <Image src={projectDetails?.pSImg ?? ''} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-project-single-item list-widget">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="wpo-project-single-title">
                                                <h3>{ projectDoc.OurStrategies }</h3>
                                            </div>
                                            <p style={{ whiteSpace: 'pre-wrap' }}>{ projectDoc.subOurStrategies }</p>
                                            <ul>
                                                <li>{ projectDoc.NonSaedVelitDictumQuamRisusPharetraEsta }</li>
                                                <li>{ projectDoc.IdRisusPharetraRhoncusNecUllamcorperTincidunt }</li>
                                                <li>{ projectDoc.HacNibhFermentumNisi }</li>
                                                <li>{ projectDoc.MassaVolutpatOdioFacilisisPurusSitElementum }</li>
                                                <li>{ projectDoc.ElitCurabiturAmetRisusBibendum }</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="wpo-project-single-item-quote">
                                                <p>"{projectDoc.projectSolugan}"</p>
                                                <span>Ẩn danh - <span>Sưu tầm</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-project-single-item">
                                    <div className="wpo-project-single-title">
                                        <h3>{projectDoc.OurApproach}</h3>
                                    </div>
                                    <p style={{ whiteSpace: 'pre-wrap' }}>{ projectDoc.subOurApproach }</p>
                                </div>
                                <div className="wpo-project-single-gallery">
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <Image src={projectDetails?.ssImg1  ?? ''} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <Image src={projectDetails?.ssImg2 || ''} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-project-single-item list-widget">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="wpo-project-single-title">
                                                <h3>{ projectDoc.ResievedGoals }</h3>
                                            </div>
                                            <ul>
                                                <li>{ projectDoc.ResievedGoal1 }</li>
                                                <li>{ projectDoc.ResievedGoal2 }</li>
                                                <li>{ projectDoc.ResievedGoal3 }</li>
                                                <li>{ projectDoc.ResievedGoal4 }</li>
                                                <li>{ projectDoc.ResievedGoal5 }</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 list-widget-s">
                                            <div className="wpo-project-single-title">
                                                <h3>{ projectDoc.Results }</h3>
                                            </div>
                                            <ul>
                                                <li>{ projectDoc.Result1 }</li>
                                                <li>{ projectDoc.Result2 }</li>
                                                <li>{ projectDoc.Result3 }</li>
                                                <li>{ projectDoc.Result4 }</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <RelatedProject/>
                                <div className="wpo-project-single-item">
                                    <div className="wpo-project-contact-area">
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
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSinglePage;