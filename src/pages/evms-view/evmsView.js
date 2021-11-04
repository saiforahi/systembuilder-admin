import { CCard, CCardBody, CContainer, CRow, CButton, CModal, CModalHeader, CModalTitle, CModalBody, CForm, CCol, CLabel, CInput } from '@coreui/react';
import React, { useState } from 'react';
import CIcon from '@coreui/icons-react';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';
import './evmsView.css';

import { CChart, CChartLine } from '@coreui/react-chartjs';
const ViewEvms = () => {
    const [visible, setVisible] = useState(false);
    const editEVMSForm = () => {
        setVisible(!visible);
    }
    return (
        <>
            {/**display all evms */}
            <CContainer>
                {/**modal to edit evms */}
                <CModal alignment="center" show={visible} onClose={editEVMSForm}>
                    <CModalHeader onDismiss={() => setVisible(!visible)} closeButton>  <CModalTitle className="modal-title">
                        <span className="edit-profile-form-header">
                            Edit EVMS Info
                        </span>
                    </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CContainer>
                            <CForm>

                                <CRow>
                                    {/**Project Name */}
                                    <CCol lg="6" md="6" sm="12" className="mb-2">
                                        <CLabel className="custom-label-5" htmlFor="project">
                                            Project Name
                                        </CLabel>
                                        <CInput className="custom-forminput-6" name="project" id="project" value="Virtual Guard" readOnly />
                                    </CCol>
                                    {/**Work package */}
                                    <CCol lg="6" md="6" sm="12" className="mb-2">
                                        <CLabel className="custom-label-5" htmlFor="wPackage">
                                            Work Package
                                        </CLabel>
                                        <CInput className="custom-forminput-6" name="wPackage" id="wPackage" readOnly />
                                    </CCol>
                                    {/**Planned Value */}

                                    <CCol className="mb-2" g="6" md="6" sm="12">
                                        <CLabel className="custom-label-5" htmlFor="plannedVal">
                                            Planned Value
                                        </CLabel>
                                        <CInput className="custom-forminput-6" name="plannedVal" id="plannedVal" />
                                    </CCol>
                                    {/**Planned hours */}
                                    <CCol className="mb-2" g="6" md="6" sm="12">
                                        <CLabel className="custom-label-5" htmlFor="plannedHrs">
                                            Planned Hours
                                        </CLabel>
                                        <CInput className="custom-forminput-6" name="plannedHrs" id="plannedHrs" />
                                    </CCol>
                                    {/**Earned Value */}
                                    <CCol lg="6" md="6" sm="12" className="mb-2">
                                        <CLabel className="custom-label-5" htmlFor="earnedValue">
                                            Earned Value
                                        </CLabel>
                                        <CInput className="custom-forminput-6" name="earnedValue" id="earnedValue" />

                                    </CCol>
                                    {/**Actual Cost */}
                                    <CCol lg="6" md="6" sm="12" className="mb-2">
                                        <CLabel className="custom-label-5" htmlFor="actualCost">
                                            Actual Cost
                                        </CLabel>
                                        <CInput className="custom-forminput-6" name="actualCost" id="actualCost" />

                                    </CCol>
                                    {/**estimate at completion */}
                                    <CCol lg="6" md="6" sm="12" className="mb-2">
                                        <CLabel className="custom-label-5" htmlFor="estAtCompltn">
                                            Estimate at completion
                                        </CLabel>
                                        <CInput className="custom-forminput-6" name="estAtCompltn" id="estAtCompltn" />

                                    </CCol>

                                    {/**estimate to completion */}
                                    <CCol lg="6" md="6" sm="12" className="mb-2">
                                        <CLabel className="custom-label-5" htmlFor="estToCompltn">
                                            Estimate to completion
                                        </CLabel>
                                        <CInput className="custom-forminput-6" name="estToCompltn" id="estToCompltn" />

                                    </CCol>
                                    {/**variance at completion */}

                                    <CCol lg="6" md="6" sm="12" className="mb-2">
                                        <CLabel className="custom-label-5" htmlFor="varAtCompltn">
                                            Variance at completion
                                        </CLabel>
                                        <CInput className="custom-forminput-6" name="varAtCompltn" id="varAtCompltn" />

                                    </CCol>
                                    {/**budget at completion */}

                                    <CCol lg="6" md="6" sm="12" className="mb-2">
                                        <CLabel className="custom-label-5" htmlFor="budgetAtCompletion">
                                            Budget at completion
                                        </CLabel>
                                        <CInput className="custom-forminput-6" name="budgetAtCompletion" id="budgetAtCompletion" />

                                    </CCol>
                                    {/**submit buttons */}
                                    <CCol md="12">
                                        <div className="project-form-button-holders mt-3">
                                            <CButton className="profile-form-btn update-profile">
                                                Update Info
                                            </CButton>
                                            <CButton className="profile-form-btn cancel-update" onClick={() => setVisible(!visible)} type="reset">
                                                Cancel
                                            </CButton>
                                        </div>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CContainer>
                    </CModalBody>
                </CModal>
                <h4 className="dash-header mb-3">EVMS View</h4>
                <CRow>
                    <div className="col-md-12 col-sm-12 col-xs-12 mt-1">
                        <CCard className="card-ongoing-project">
                            <CCardBody className="details-project-body">
                                <div className="card-header-portion-ongoing">
                                    <h4 className="ongoing-card-header-1"><IconButton aria-label="favourite" disabled size="medium" color="primary">
                                        <GradeIcon fontSize="inherit" className="fav-button" />
                                    </IconButton>Virtual Guard</h4>
                                    <div className="action-button-holders--2">
                                        <CButton className="edit-project-on" onClick={() => editEVMSForm()}><CIcon name="cil-pencil" className="mr-1" /> Edit</CButton>
                                        <CButton className="view-ongoing-details" ><CIcon name="cil-list-rich" className="mr-1" />View Details</CButton>
                                    </div>
                                </div>
                                <hr className="header-underline1" />
                                <div className="row">
                                    {/**graph view */}

                                    <div className="col-lg-6 col-md-12">
                                        <CChart
                                            type="line"
                                            datasets={[
                                                {
                                                    label: 'Time',
                                                    backgroundColor: 'rgba(179,181,198,0.2)',
                                                    borderColor: 'rgba(179,181,198,1)',
                                                    pointBackgroundColor: 'rgba(179,181,198,1)',
                                                    pointBorderColor: '#fff',
                                                    pointHoverBackgroundColor: '#fff',
                                                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                                                    tooltipLabelColor: 'rgba(179,181,198,1)',
                                                    data: [65, 59, 900, 81, 560, 55, 1000]
                                                },
                                                {
                                                    label: 'Cost',
                                                    backgroundColor: 'rgba(255,99,132,0.2)',
                                                    borderColor: 'rgba(255,99,132,1)',
                                                    pointBackgroundColor: 'rgba(255,99,132,1)',
                                                    pointBorderColor: '#fff',
                                                    pointHoverBackgroundColor: '#fff',
                                                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                                                    tooltipLabelColor: 'rgba(255,99,132,1)',
                                                    data: [28, 48, 40, 19, 96, 27, 10]
                                                }
                                            ]}
                                            options={{
                                                aspectRatio: 1.5,
                                                tooltips: {
                                                    enabled: true
                                                }
                                            }}
                                        // labels={[
                                        //   'Eating', 'Drinking', 'Sleeping', 'Designing',
                                        //   'Coding', 'Cycling', 'Running'
                                        // ]}
                                        />


                                    </div>
                                    {/**Text details */}
                                    <div className="col-lg-5 offset-lg-1 col-md-12 mt-3">
                                        <h5 className="evms-info-view child"><span className="info-header--evms">work package : </span>1067</h5>
                                        <h5 className="evms-info-view child"><span className="info-header--evms">earned value: </span>1067</h5>
                                        <h5 className="evms-info-view child"><span className="info-header--evms">actual cost : </span>1067</h5>
                                        <h5 className="evms-info-view child"><span className="info-header--evms">planned value : </span>1067</h5>
                                        <h5 className="evms-info-view child"><span className="info-header--evms">planned hours : </span>1067</h5>
                                        <h5 className="evms-info-view child"><span className="info-header--evms">estimate at completion : </span>1067</h5>
                                        <h5 className="evms-info-view child"><span className="info-header--evms">estimation to completion : </span>1067</h5>
                                        <h5 className="evms-info-view child"><span className="info-header--evms">variance at completion : </span>1067</h5>

                                        <h5 className="evms-info-view child"><span className="info-header--evms">budget at completion : </span>1067</h5>
                                        <h5 className="evms-info-view child"><span className="info-header--evms">date created : </span>12th October,2021</h5>
                                        <h5 className="evms-info-view child"><span className="info-header--evms">date updated : </span>12th October,2021</h5>

                                    </div>
                                </div>
                            </CCardBody>
                        </CCard>
                    </div>
                </CRow>
            </CContainer>




        </>
    )


}
export default ViewEvms;