import { CCardBody, CCard, CButton, CBadge, CContainer } from '@coreui/react'
import React from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';
import '../ongoing-project-details-view/OngoingProjectDetailsView.css'
import CIcon from '@coreui/icons-react';


const completedDetailsView=()=>{
return(
    <>
    
<CContainer>
<h3 className="dash-header-1">Project Details</h3>
<div className="card-header-portion-ongoing">
<h4 className="ongoing-card-header-1"><IconButton aria-label="favourite" disabled size="medium" color="primary">
                             <GradeIcon fontSize="inherit" className="fav-button" />
                         </IconButton>Virtual Guard</h4>
    </div> 
     {/**card show */}
     <hr className="header-underline1" />
       {/**Details card */}
       <div className="row">
       <div className="col-md-10 offset-md-1 col-sm-12 col-xs-12 mt-1 mb-2">
       <CCard className="card-ongoing-project">
       <CCardBody className="details-project-body">
             {/*task percentage portion */}
             <div className="ongoing-initial-info row">
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Sub Task Name</h6>
                                        <h6 className="project-point-details">Do lungi dance</h6></div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">PM Name</h6>
                                        <h6 className="project-point-details">The one and only </h6></div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Work Package Number</h6>
                                        <h6 className="project-point-details">IDGAF</h6>
                                    </div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Task Title</h6>
                                        <h6 className="project-point-details">Send object in mqtt</h6>
                                    </div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Estimated Person(s)</h6>
                                        <h6 className="project-point-details">1,bceause why hire more!</h6>
                                    </div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Planned Value</h6>
                                        <h6 className="project-point-details">120 </h6>
                                    </div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Planned Hours</h6>
                                        <h6 className="project-point-details">120 </h6>
                                    </div>
                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Remaining Hours</h6>
                                        <h6 className="project-point-details">120 </h6>
                                    </div>
                                </div>

                                {/**assignees */}
                                <div className="col-md-12 mt-4 mb-2">
                                    <h5 className="projectName mb-3">Asssignee(s)-(6)</h5>
                                    <div className="file-show-ongoing-details row">
                                        <div className="col-md-6 col-sm-6 col-lg-3">
                                            <div className="file-attached-ongoing rounded-pill">KIbria Papel</div>
                                        </div>



                                        {/* *extra static buttons,delete code after dynamic implementation */}
                                        <div className="col-md-6 col-sm-6 col-lg-3">
                                            <div className="file-attached-ongoing rounded-pill">hassibul Hassan</div>
                                        </div><div className="col-md-6 col-sm-6 col-lg-3">
                                            <div className="file-attached-ongoing rounded-pill">Pial noman</div>
                                        </div><div className="col-md-6 col-sm-6 col-lg-3">
                                            <div className="file-attached-ongoing rounded-pill">Fahmida Sharmin</div>
                                        </div><div className="col-md-6 col-sm-6 col-lg-3">
                                            <div className="file-attached-ongoing rounded-pill">Saif Azad</div>
                                        </div><div className="col-md-6 col-sm-6 col-lg-3">
                                            <div className="file-attached-ongoing rounded-pill">Hafij Shobuj</div>
                                        </div>

                                    </div>
                                </div>
       </CCardBody>
       </CCard>
       </div>
       </div>

</CContainer>
    
    </>
)

}
export default completedDetailsView;