import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton, CSelect, CTextarea, CAlert } from '@coreui/react';
import React, {useState} from 'react'
import './createWBS.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsThunk, fetchProjectsAssigneeThunk, fetchWbsThunk } from '../../store/slices/ProjectsSlice';
import Select from "react-select";

const CreateNewWBS = () => {
    const projects = useSelector(state => state.projects.data)
    const assigneeList = useSelector(state=>state.projects.assignee)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchProjectsThunk(5))
    }, [])

    const getAssigneeList = (option)=> {
        dispatch(fetchProjectsAssigneeThunk(option.work_package_number))
        console.log("assigneeList", assigneeList)
        setSelectedProject(option)
        setSelectedProjectEndDate(option.planned_delivery_date)
    }

    const [selectedProject, setSelectedProject] = useState(null)
    const [selectedProjectEndDate, setSelectedProjectEndDate] = useState(null)
    const [wbsTile, setWbsTitle] = useState(null)
    const [wbsDetails, setWbsDetails] = useState(null)
    const [wbsStartDate, setWbsStartDate] = useState(null)
    const [wbsEndDate, setWbsEndDate] = useState(null)
    const [wbsAssignees, setWbsAssignees] = useState(null)

    const createWbs = ()=> {
        const wbsDataSet = {
            "project": selectedProject.id,
            "work_package_number": selectedProject.work_package_number,
            "assignee": null,
            "reporter": "5",
            "title": wbsTile.target.value,
            "description": wbsDetails.target.value,
            "start_date": wbsStartDate.target.value,
            "end_date": wbsEndDate.target.value,
            "hours_worked": "0",
            "status": "1",
            "progress": "0",
            "comments": "",
            "deliverable": ""
        }
        wbsAssignees.forEach(element => {
            wbsDataSet.assignee = element.id;
            const response = dispatch(fetchWbsThunk(wbsDataSet))
            console.log("Create WBS:", response)
        });
    }

    return (
        <>
            <CContainer>
                <CRow>
                    <div className="col-md-8 offset-md-2 col-sm-12">
                        <CCard className="custom-wbs-card-1">
                            <CCardHeader className="project-wbs-1"> <h4 className="section-name-wbscreate">Create a WBS</h4>
                            </CCardHeader>
                            <CCardBody>
                                <CContainer>
                                    <CForm onSubmit={createWbs}>
                                        <CRow>
                                            {/**project name */}
                                            <div className="col-lg-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Select Project
                                                </CLabel>
                                                <Select
                                                    options={projects}
                                                    getOptionLabel={option => option.task_delivery_order + " / " + option.sub_task}
                                                    getOptionValue={option => option.id}
                                                    onChange={getAssigneeList}
                                                />
                                            </div>
                                            {selectedProject != null ? 
                                                <div className="col-lg-12 mb-3">
                                                    <CAlert color="primary">
                                                        <small>
                                                            <b>Planned Delivery Date: </b> {selectedProject.planned_delivery_date}
                                                            <br/>
                                                            <b>Planned Hours: </b> {selectedProject.planned_hours}
                                                            <br/>
                                                            <b>Remaining Hours: </b> {selectedProject.remaining_hours}
                                                        </small>
                                                    </CAlert>
                                                </div> :
                                                <></>
                                            }
                                            {/**wbs title */}
                                            <div className="col-lg-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Title
                                                </CLabel>
                                                <CInput className="custom-forminput-6" onChange={setWbsTitle}></CInput>
                                            </div>
                                            {/**WBS description */}
                                            <div className="col-lg-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Description
                                                </CLabel>
                                                <CTextarea className="custom-forminput-6" onChange={setWbsDetails}></CTextarea>
                                            </div>
                                            {/**Start date */}
                                            <div className="col-lg-6 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Start date
                                                </CLabel>
                                                <CInput type="date" className="custom-forminput-6" onChange={setWbsStartDate}></CInput>
                                            </div>
                                            {/**End date */}
                                            <div className="col-lg-6 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    End date
                                                </CLabel>
                                                <CInput max={selectedProjectEndDate} type="date" className="custom-forminput-6" onChange={setWbsEndDate}></CInput>
                                            </div>
                                            {/**Assignees */}
                                            <div className="col-lg-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Assignee(s)
                                                </CLabel>
                                                <Select className="custom-forminput-6" 
                                                    options={assigneeList}
                                                    isMulti
                                                    getOptionLabel={option => option.first_name + " " + option.last_name}
                                                    getOptionValue={option => option.id}
                                                    onChange={setWbsAssignees}
                                                />
                                            </div>
                                            {/**submit buttons */}
                                            <div className="col-md-12">
                                                <div className="projectwbs-form-button-holders mt-3">
                                                    <CButton type="submit" className="create-btn-prjctwbs create-wbs">Create WBS</CButton>
                                                    <CButton className="create-btn-prjctwbs cancel-wbs">Cancel</CButton>
                                                </div>
                                            </div>
                                        </CRow>
                                    </CForm>
                                </CContainer>
                            </CCardBody>
                        </CCard>
                    </div>
                </CRow>
            </CContainer>
        </>
    )
}
export default CreateNewWBS;