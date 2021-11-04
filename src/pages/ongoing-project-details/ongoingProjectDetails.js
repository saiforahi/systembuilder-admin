import { React, useEffect, useState } from 'react';
import './ongoingProjectDetails.css'
import { CAlert, CCard, CCardBody, CButton, CModal, CModalHeader, CModalBody, CContainer, CForm, CRow, CLabel, CInput, CModalTitle } from '@coreui/react';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { CIcon } from "@coreui/icons-react";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../Config';

const OngoingProjectDetails = () => {
    let history = useHistory();
    const [showTaskForm, setShowTaskForm] = useState(false);
    //const projects=useSelector(state=> state.projects.data.filter((item)=> project.project.status === 0))
    const projects = useSelector(state => {
        let temp = []
        state.projects.data.forEach((item, idx) => {
            if (item.project.status == 0) {
                temp.push(item)
            }
        })
        console.log('temp', temp)
        return temp
    })
    const toggleTaskForm = () => {
        setShowTaskForm(!showTaskForm);
    };
    const closeForm = () => {
        setShowTaskForm(false)
    }
    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: 'rgba(238, 232, 250, 0.5)', border: '1px solid #EEE8FA', borderRadius: "8px", minHeight: "60px", boxShadow: "inset 0px 4px 20px rgba(189, 158, 251, 0.1)", fontSize: "16px", lineHeight: "24px" }),
    }
    const [visible, setVisible] = useState(false);
    const options = [
        { value: "nypd", label: "New York Police Department" },
        { value: "lapd", label: "Los Angeles Police Department" },
        { value: "miamipd", label: "Miami Police Department" },
        { value: "dmp", label: "Dhaka Metropoliton Police" },

    ];
    const animatedComponents = makeAnimated();
    useEffect(() => {
        console.log('projects', projects)
    }, [projects])
    return (
        <>
            {/**WBS MODAL */}
            <CModal alignment="center" visible={visible} onClose={() => setVisible(false)} className="wbs-modal">
                <CModalHeader className="wbs-modal-header" closeButton>
                    <CModalTitle className="modal-title"><span className="bold-part1">Wireframe</span> <span className="light-part1">(50/100 Hrs)</span></CModalTitle>
                </CModalHeader>
                <CModalBody className="wbs-modal-body">
                    <CContainer>
                        <h6 className="task-name1">Seller &amp; Buyer module wireframe design with prototype</h6>
                        <CForm>
                            <CRow>
                                {/**Start date */}

                                <div className="col-md-6 mb-3">
                                    <CLabel
                                        htmlFor="startDate"
                                        className="custom-label2"
                                    >Task Start Date</CLabel>
                                    <CInput type="date" id="startDate" className="custom-formgroup2" />
                                </div>
                                {/*task end date */}

                                <div className="col-md-6 mb-3">
                                    <CLabel
                                        htmlFor="endDate"
                                        className="custom-label2"
                                    >Task end Date</CLabel>
                                    <CInput type="date" id="endDate" className="custom-formgroup2" />
                                </div>

                                {/*estimated person */}
                                <div className="col-md-6 mb-3">
                                    <CLabel
                                        htmlFor="estimatedPerons"
                                        className="custom-label2"
                                    >Estimated Persons</CLabel>
                                    <CInput type="number" id="estimatedPerons" className="custom-formgroup2" />
                                </div>
                                {/*labor hours */}
                                <div className="col-md-6 mb-3">
                                    <CLabel
                                        htmlFor="laborHours"
                                        className="custom-label2"
                                    >Labour Hours</CLabel>
                                    <CInput type="number" id="laborHours" className="custom-formgroup2" />
                                </div>

                                {/*participants */}
                                <div className="col-md-12 mb-3">
                                    <CLabel htmlFor="participants" className="custom-label2">
                                        Assignees
                                    </CLabel>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        name="participants"
                                        isMulti
                                        options={options}
                                        styles={colourStyles}

                                    />
                                </div>
                                {/*already assigned*/}
                                <div className="col-md-12 mb-3">
                                    <div className="file-show add-dude">
                                        <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"} /></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser1.png"} /></h5>
                                        {/**dummy data,remove it when dynamic */}
                                        <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"} /></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser2.png"} /></h5>
                                        <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"} /></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser3.png"} /></h5>
                                        <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"} /></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser4.png"} /></h5>
                                        <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"} /></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser1.png"} /></h5>

                                    </div>
                                </div>

                                {/**submit button */}
                                <div className="col-md-12 mb-3">
                                    <CButton type="submit" className="create-wbs-button">Create WBS</CButton>
                                </div>
                            </CRow>
                        </CForm>
                    </CContainer>
                </CModalBody>
            </CModal>
            {/*wbs modal ends */}
            <div className="container">
                <h4 className="dash-header">Ongoing Projects({Array.from(projects).length})</h4>
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-sm-12 col-xs-12 mt-1">
                        {projects != undefined && Array.from(projects).map((project, idx) => (<CCard className="card-ongoing-project">
                            <CCardBody className="details-project-body" key={idx}>
                                <h4 className="ongoing-card-header">
                                    <IconButton aria-label="favourite" disabled size="medium" >
                                        <GradeIcon fontSize="inherit" className="fav-button" />
                                    </IconButton>{project.project.task_delivery_order.title}
                                </h4>
                                <hr className="header-underline1" />

                                {/*task percentage portion */}
                                <div>
                                    <h5 className="tasks-done"><span className="tiny-header1">Task Done : </span>5/10 </h5>
                                    <h6 className="show-amount">200/{parseInt(project.project.planned_hours)} Hrs</h6>
                                    <div className="progress progress-background">
                                        <div className="progress-bar custom-progress1 progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '25%' }}></div>
                                    </div>
                                </div>
                                {/*Project category buttons */}
                                <div className="all-da-buttons-1">
                                    {/* <CButton className="package-button lilac" shape="rounded-pill" onClick={() => setVisible(!visible)}>
                                        Front End Design
                                        <span className="tooltiptext">1000.5</span>
                                    </CButton> */}
                                    {Array.from(project.subtasks).length > 0 && Array.from(project.subtasks).map((task, idx) => (
                                        <CButton key={idx} type="button" className="package-button rounded-pill">
                                            {task.sub_task}
                                            <span className="tooltiptext">{task.work_package_index}</span>
                                        </CButton>
                                    ))}
                                </div>

                                {/*Project participants */}
                                <div className="all-da-workers1">
                                    {project.assignees.length > 0 && Array.from(project.assignees).map((assignee, idx) => (
                                        <img key={idx} className="img-fluid worker-image" src={BASE_URL + assignee.profile_pic} />
                                    ))}
                                </div>

                                {/*project info in text */}
                                <div className="information-show row">
                                    <div className="info-show-now col-md-6">
                                        <h5 className="project-details-points child"><h5 className="info-header-1">Assigned by :</h5>{project.project.pm.first_name + ' ' + project.project.pm.last_name}</h5>
                                        {/* <h5 className="project-details-points"><h5 className="info-header-1">Work Package : </h5>1000</h5> */}
                                        <h5 className="project-details-points"><h5 className="info-header-1">Project Manager : </h5>{project.project.pm.first_name + ' ' + project.project.pm.last_name}</h5>
                                    </div>
                                    <div className="info-show-now col-md-6">
                                        {/* <h5 className="project-details-points"><h5 className="info-header-1">Project Details :</h5>Design and develop the app for the seller and buyer module</h5> */}
                                        <h5 className="project-details-points child"><h5 className="info-header-1">Start Date : </h5>{project.project.date_created}</h5>

                                        <h5 className="project-details-points"><h5 className="info-header-1">Planned Delivery Date : </h5>{project.project.planned_delivery_date}</h5>
                                    </div>
                                </div>

                                {/**file uploads and view */}
                                {/*  <div className="file-show">
                                    <h5 className="files-view">Files :</h5>
                                    <h5 className="file-attached"><CButton className="remove-file"><img src={"assets/icons/close-btn.svg"} /></CButton>somefile.file</h5> */}


                                {/**extra static buttons,delete code after dynamic implementation */}
                                {/* <h5 className="file-attached"><CButton className="remove-file"><img src={"assets/icons/close-btn.svg"} /></CButton>somefiledjfkdjkfjdkjfkdjkfjkdjfk.file</h5> */}
                                {/*upload file nibutton */}
                                {/* <IconButton aria-label="upload" className="upload-file-button1">
                                        <AddCircleIcon className="ad-file-icon" />
                                    </IconButton>
                                </div> */}

                                {/*add new task option */}

                                {/* <div className="new-task-add">
                                    <CButton className="task-add-btn-1" onClick={toggleTaskForm}>+ Add New Task</CButton>
                                </div> */}

                                {/*show add task form on click button */}
                                {showTaskForm ?
                                    <div className="add-task-form-div">
                                        <CForm className="add-task-form">
                                            <CContainer>
                                                <div className="close-form"><CButton className="closeform-custom-button" onClick={closeForm}><img src={"assets/icons/close-button-salmon.png"} /></CButton></div>
                                                <CRow>
                                                    {/**task title */}
                                                    <div className="col-md-6 mb-3">
                                                        <CLabel
                                                            htmlFor="taskTitle"
                                                            className="custom-label2"
                                                        >Task Title</CLabel>
                                                        <CInput type="text" id="taskTitle" className="custom-formgroup2" />
                                                    </div>
                                                    {/**work package */}
                                                    <div className="col-md-6 mb-3">
                                                        <CLabel
                                                            htmlFor="workPackage"
                                                            className="custom-label2"
                                                        >Work Package</CLabel>
                                                        <CInput type="number" id="workPackage" className="custom-formgroup2" />
                                                    </div>
                                                    {/**Start date */}

                                                    <div className="col-md-6 mb-3">
                                                        <CLabel
                                                            htmlFor="startDate"
                                                            className="custom-label2"
                                                        >Task Start Date</CLabel>
                                                        <CInput type="date" id="startDate" className="custom-formgroup2" />
                                                    </div>
                                                    {/*task end date */}

                                                    <div className="col-md-6 mb-3">
                                                        <CLabel
                                                            htmlFor="endDate"
                                                            className="custom-label2"
                                                        >Task end Date</CLabel>
                                                        <CInput type="date" id="endDate" className="custom-formgroup2" />
                                                    </div>
                                                    {/**Task details */}
                                                    {/**Start date */}

                                                    <div className="col-md-12 mb-3">
                                                        <CLabel
                                                            htmlFor="taskDetails"
                                                            className="custom-label2"
                                                        >Task Details</CLabel>
                                                        <CInput type="text" id="taskDetails" className="custom-formgroup2" />
                                                    </div>
                                                    {/*estimated person */}
                                                    <div className="col-md-6 mb-3">
                                                        <CLabel
                                                            htmlFor="estimatedPerons"
                                                            className="custom-label2"
                                                        >Estimated Persons</CLabel>
                                                        <CInput type="number" id="estimatedPerons" className="custom-formgroup2" />
                                                    </div>
                                                    {/*labor hours */}
                                                    <div className="col-md-6 mb-3">
                                                        <CLabel
                                                            htmlFor="laborHours"
                                                            className="custom-label2"
                                                        >Labour Hours</CLabel>
                                                        <CInput type="number" id="laborHours" className="custom-formgroup2" />
                                                    </div>

                                                    {/*participants */}
                                                    <div className="col-md-12 mb-3">
                                                        <CLabel htmlFor="participants" className="custom-label2">
                                                            Assignees
                                                        </CLabel>
                                                        <Select
                                                            closeMenuOnSelect={false}
                                                            components={animatedComponents}
                                                            name="participants"
                                                            isMulti
                                                            options={options}
                                                            styles={colourStyles}

                                                        />
                                                    </div>
                                                    {/*already assigned*/}
                                                    <div className="col-md-12 mb-3">
                                                        <div className="file-show add-dude">
                                                            <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"} /></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser1.png"} /></h5>
                                                            {/**dummy data,remove it when dynamic */}
                                                            <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"} /></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser2.png"} /></h5>
                                                            <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"} /></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser3.png"} /></h5>
                                                            <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"} /></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser4.png"} /></h5>
                                                            <h5 className="added-images"><CButton className="remove-dude"><img src={"assets/icons/close-icon-red.png"} /></CButton> <img className="img-fluid added-worker-image" src={"assets/thumbnails/defaultuser1.png"} /></h5>

                                                        </div>
                                                    </div>

                                                    {/**submit button */}
                                                    <div className="col-md-12 mb-3">
                                                        <CButton type="submit" className="create-wbs-button">Create WBS</CButton>
                                                    </div>
                                                </CRow>
                                            </CContainer>
                                        </CForm>
                                    </div>
                                    : null
                                }
                                <div className="ongoing-action-card-buttons">
                                    <CButton className="view-ongoing-details" onClick={() => history.push({ pathname: '/dashboard/Projects/ongoing-projects/details/' + project.project.work_package_number, state: { project: project } })}><CIcon name="cil-list-rich" className="mr-1" />View Details</CButton>
                                    <CButton className="mark-ongoing-completed"><CIcon name="cil-check-alt" className="mr-1" />Mark as Completed</CButton>
                                </div>
                            </CCardBody>

                        </CCard>))}
                        {/**If no projects are there */}
                        {Array.from(projects).length < 1 ? (
                            <CAlert className="no-value-show-alert" color="primary">Currently there are no ongoing projects</CAlert>
                        ) : null}
                    </div>
                    {/**Dummy cards for viewing design */}

                    {/**Dummy card,REMOVE AFTER DYNAMIC DATA LOAD */}

                </div>
            </div>

        </>
    )
}

export default OngoingProjectDetails;