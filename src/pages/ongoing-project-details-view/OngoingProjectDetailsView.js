import { CCardBody, CCard, CForm, CButton, CInput, CBadge, CModal, CModalHeader, CModalTitle, CModalBody, CContainer, CRow, CCol, CLabel } from '@coreui/react'
import React, { useEffect, useState } from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';
import './OngoingProjectDetailsView.css'
import CIcon from '@coreui/icons-react';
import Select from "react-select";
import Creatable from 'react-select/creatable';
import { useHistory, useLocation } from 'react-router';
import { API, BASE_URL, USER_ID } from '../../Config';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux'
import { fetchProjectsThunk } from '../../store/slices/ProjectsSlice';
import {
    useParams
} from "react-router-dom";
const OngoingDetailsView = () => {
    const { work_package_number } = useParams();
    const dispatch = useDispatch()
    const [status, setStatus] = useState(0);
    const [project, setProject] = useState()
    let location = useLocation()
    let history = useHistory()
    const [titleStatus, setTitleStatus] = useState(1);
    const [tdo, setTdo] = useState('')
    const radioHandler = (status, titleStatus) => {
        setStatus(status);
        setTitleStatus(titleStatus);
    };
    const [editModal, setEditModal] = useState('');
    const editInfoForm = () => {
        setEditModal(!editModal)
    }
    const colourStyles = {
        // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
        option: (provided, state) => ({ ...provided, fontSize: '14px !important' }),

    }
    const [assigneeValue, setAssigneeValue] = useState('')
    const assignees = [
        { value: "1", label: "La Casa De papel" },
        { value: "2", label: "Aninda" },
        { value: "3", label: "Pial Noman" },
        { value: "4", label: "Saif Rahi" },

    ];
    useEffect(() => {
        if (location.state != undefined) {
            console.log('project', location.state.project)
            setProject(location.state.project)
            setTdo(location.state.project.project.task_delivery_order.title)
        }
        else {
            //history.goBack()

        }
        // API.get('project/details/'+work_package_number+'/').then((res)=>{
        //     console.log('project details',res.data)
        //     setProject(res.data.data)
        // })
        console.log('project', project)
    }, [])
    const handle_tdo_title_change = (id) => {
        console.log({ title: tdo })
        API.put('project/change-tdo-title/' + id + '/', { title: tdo }).then((res) => {
            console.log('rs', res.data)
            if (res.data.success == 'True') {
                setStatus(0)
                setTitleStatus(0)
                // let temp = project
                // temp.project.task_delivery_order = res.data.data
                // setProject(temp)
                dispatch(fetchProjectsThunk(localStorage.getItem(USER_ID)))
                swal('Updated', 'Task Delivery Order name has been updated', 'success')
            }
        }).catch(err => {
            console.log(err)
            swal('Failed', 'Proccess Failed', 'error')
        })
    }
    const handleChange = (field, value) => {
        switch (field) {
            case 'assignees':
                setAssigneeValue(value)
                break
            default:
                break
        }
    }
    const delete_subtask = (work_package_index) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    API.delete('/project/subtask/delete/' + work_package_index + "/").then(response => {
                        if (response.data.success == "True") {
                            // const data=Array.from(employees);
                            // for(let index=0;index<data.length;index++){
                            //   if(data[index].id==work_package_index.id){
                            //     data.splice(index,1);
                            //     break;
                            //   }
                            // }
                            // setEmployees(data);
                            swal("Poof! Your selected loan record has been deleted!", {
                                icon: "success",
                            });

                        }
                        else if (response.data.success == "False") {
                            swal("Poof!" + response.data.message, {
                                icon: "error",
                            });
                        }

                    }).catch(error => {
                        //swal("Failed!",error,"error");
                    })

                }
            });
    }
    const delete_assignee = (assignee_id) => {

    }
    return (
        <>
            <CContainer>
                {/**Edit ongoing project details starts */}
                <CModal alignment="center" show={editModal} onClose={editInfoForm}>
                    <CModalHeader onDismiss={() => setEditModal(!editModal)} closeButton>
                        <CModalTitle className="modal-title-projects">
                            <span className="edit-profile-form-header">Edit Project Info</span>
                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CContainer>
                            <CForm>
                                <CRow>
                                    {/**Subtask Name*/}
                                    <CCol lg="12" className="mb-2">
                                        <CLabel htmlFor="subTaskName" className="custom-label-5">Sub Task Name</CLabel>
                                        <CInput id="subTaskName" name="subTaskName" type="text" className="custom-forminput-6" />
                                    </CCol>
                                    {/**PM Name */}
                                    <CCol lg="6" className="mb-2">
                                        <CLabel htmlFor="pmName" className="custom-label-5">PM Name</CLabel>
                                        <CInput id="pmName" name="pmName" type="text" className="custom-forminput-6" readOnly />
                                    </CCol>
                                    {/**Work Package Number */}
                                    <CCol lg="6" className="mb-2">
                                        <CLabel htmlFor="wpNumber" className="custom-label-5">Work Package Number</CLabel>
                                        <CInput id="wpNumber" name="wpNumber" type="number" className="custom-forminput-6" min="0" />
                                    </CCol>
                                    {/**Task Title */}
                                    <CCol lg="12" className="mb-2">
                                        <CLabel htmlFor="taskTitle" className="custom-label-5">Task Title</CLabel>
                                        <CInput id="taskTitle" name="taskTitle" type="text" className="custom-forminput-6" />
                                    </CCol>
                                    {/**assignees */}
                                    <CCol lg="12" classID="mb-2">
                                        <CLabel htmlFor="assignees" className="custom-label-5">Assignee(s)</CLabel>
                                        <Creatable
                                            closeMenuOnSelect={false}
                                            aria-labelledby="assignees"
                                            id="assignees"
                                            placeholder="Select from list or create new"
                                            isClearable
                                            onChange={(value) => handleChange('assignees', value)}
                                            isMulti
                                            classNamePrefix="custom-forminput-6"
                                            value={assigneeValue}
                                            options={assignees}
                                            // getOptionLabel= {option=>option.task_delivery_order}
                                            // getOptionValue = {option=>option.task_delivery_order}
                                            styles={colourStyles}
                                        />
                                    </CCol>
                                    {/**Estimated persons */}
                                    <CCol lg="6" className="mb-2">
                                        <CLabel htmlFor="estPersons" className="custom-label-5">Estimated Person(s)</CLabel>
                                        <CInput id="estPersons" name="estPersons" type="number" className="custom-forminput-6" min="0" />
                                    </CCol>

                                    {/**planned Value */}
                                    <CCol lg="6" className="mb-2">
                                        <CLabel htmlFor="plannedVal" className="custom-label-5">Planned Value</CLabel>
                                        <CInput id="plannedVal" name="plannedVal" type="number" className="custom-forminput-6" min="0" />
                                    </CCol>
                                    {/**Planned hours */}
                                    <CCol lg="6" className="mb-2">
                                        <CLabel htmlFor="plannedHrs" className="custom-label-5">Planned Value</CLabel>
                                        <CInput id="plannedHrs" name="plannedHrs" type="number" className="custom-forminput-6" min="0" />
                                    </CCol>
                                    {/**Remaining hours */}
                                    <CCol lg="6" className="mb-2">
                                        <CLabel htmlFor="remHrs" className="custom-label-5">Planned Value</CLabel>
                                        <CInput id="remHrs" name="remHrs" type="number" className="custom-forminput-6" min="0" />
                                    </CCol>
                                    {/**Action buttons */}
                                    <CCol md="12" className="mt-2">
                                        <div className="project-form-button-holders mt-3">
                                            <CButton className="profile-form-btn update-profile">
                                                Update Info
                                            </CButton>
                                            <CButton className="profile-form-btn cancel-update" onClick={() => editInfoForm(!editModal)} type="reset">
                                                Cancel
                                            </CButton>
                                        </div>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CContainer>
                    </CModalBody>
                </CModal>
                {/**Edit ongoing project details ends */}
                <h3 className="dash-header-1">Project Details</h3>
                {status === 0 ?
                    (
                        <div className="card-header-portion-ongoing">
                            <h4 className="ongoing-card-header-1">
                                <IconButton aria-label="favourite" disabled size="medium" color="primary">
                                    <GradeIcon fontSize="inherit" className="fav-button" />
                                </IconButton>
                                {project != undefined ? project.project.task_delivery_order.title : ''}
                            </h4>
                            <CButton className="edit-ongoing-project-title" variant='ghost' onClick={(e) => radioHandler(1, 0)}><CIcon name="cil-pencil" className="mr-1 pen-icon" /></CButton>
                        </div>) : null}
                {/**header portion */}



                {/**Show the form for edit when clicked */}
                {status === 1 ? (
                    <div className="card-header-portion-ongoing">
                        <CForm>
                            <CInput value={tdo} onChange={(event) => setTdo(event.target.value)} className="custom-forminput-6" type="text" />
                        </CForm>
                        <div>
                            <CButton type="button" variant="ghost" className="confirm-name" onClick={(e) => handle_tdo_title_change(project.project.task_delivery_order.id)}><CIcon name="cil-check-circle" className="mr-1 tick" size="xl" /></CButton>
                            <CButton type="button" variant="ghost" className="cancel-name" onClick={(e) => radioHandler(0, 1)}><CIcon name="cil-x-circle" className="mr-1 cross" size="xl" /></CButton>
                        </div>

                    </div>) : null}

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
                                        {project != undefined && Array.from(project.assignees).map((item, idx) => (
                                            <div key={idx} className="col-md-6 col-sm-6 col-lg-3">
                                                <div className="file-attached-ongoing rounded-pill">
                                                    <CButton type="button" onClick={() => delete_assignee(item.id)} className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.png"} className="close-icon-size" /></CButton>{item.first_name + ' ' + item.last_name}
                                                </div>
                                            </div>
                                        ))}
                                        {/* *extra static buttons,delete code after dynamic implementation */}
                                    </div>
                                </div>
                                {/**ACTION BUTTONS !!!!!!!!!! */}
                                <div className="col-md-12 mt-2 mb-2">
                                    <div className="project-actions">
                                        <CButton className="edit-project-ongoing-task" onClick={() => editInfoForm()} ><CIcon name="cil-pencil" className="mr-1" /> Edit </CButton>
                                        <CButton type="button" onClick={() => delete_subtask(project.project.work_package_index)} className="delete-project-2"><CIcon name="cil-trash" className="mr-1" /> Delete</CButton>
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
export default OngoingDetailsView