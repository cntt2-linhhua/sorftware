import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Footer from '../../components/footer/Footer';
import { projectDoc } from '../../document';


const ProjectPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={projectDoc.project} pagesub={projectDoc.project}/> 
            <ProjectSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;
