import React, { useState } from 'react'

const OrderDetailsModal=(props)=>{
    const [show,setShow]=useState(props.show)
    return(
        <>
        <CModal size="lg" alignment="center" show={show} onClose={() => { setShow(false) }}>
                <CModalHeader onClose={() => setShow(false)} closeButton>
                    <CModalTitle className="modal-title-projects">
                        <span className="edit-profile-form-header">Subtask Details</span>
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CContainer>
                        <CForm>
                            <CRow>
                                <div className="card-header-portion-ongoing">
                                    <h4 className="ongoing-card-header-1">
                                        <IconButton aria-label="favourite" disabled size="medium" color="primary">
                                            <GradeIcon fontSize="inherit" className="fav-button" />
                                        </IconButton>
                                        {selectedSubTask != undefined ? selectedSubTask.task_delivery_order.title : ''}
                                    </h4>

                                </div>
                                <div className="justify-content-center">
                                    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 mt-1 mb-2">
                                        <CCard className="card-ongoing-project">
                                            <CCardBody className="details-project-body">
                                                <div className="ongoing-initial-info row">
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Sub Task Name</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.task_title}</h6></div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">PM Name</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.pm.first_name + ' ' + selectedSubTask.pm.last_name}</h6></div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Work Package Number</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.work_package_number}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Task Title</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.task_title}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Estimated Person(s)</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.estimated_person}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Planned Value</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.assignees[0].project.planned_value} </h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Planned Hours</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.assignees[0].project.planned_hours} </h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="tiny-header2">Remaining Hours</h6>
                                                        <h6 className="project-point-details">{selectedSubTask.remaining_hours} </h6>
                                                    </div>
                                                </div>

                                                <div className="col-md-12 mt-4 mb-2">
                                                    <h5 className="projectName mb-3">Asssignee(s)-({Array.from(selectedSubTask.assignees).length})</h5>
                                                    <div className="file-show-ongoing-details row">
                                                        {selectedSubTask != undefined && Array.from(selectedSubTask.assignees).map((item, idx) => (
                                                            <div key={idx} className="col-md-4 col-sm-6 col-lg-4">
                                                                <div className="file-attached-ongoing rounded-pill">
                                                                    <CButton type="button" onClick={() => delete_assignee(selectedSubTask.id, item.assignee.id)} className="remove-file-ongoing"><img src={"assets/icons/icons8-close-64-blue.svg"} className="close-icon-size" /></CButton>{item.assignee.first_name + ' ' + item.assignee.last_name}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-12 mt-2 mb-2">
                                                    <div className="project-actions">
                                                        <CButton className="edit-project-ongoing-task" onClick={() => editInfoForm(subtask)} ><CIcon name="cil-pencil" className="mr-1" /> Edit </CButton>
                                                        <CButton type="button" onClick={() => delete_subtask(subtask.work_package_index)} className="delete-project-2"><CIcon name="cil-trash" className="mr-1" /> Delete</CButton>
                                                    </div>
                                                </div> */}
                                            </CCardBody>
                                        </CCard>
                                    </div>
                                </div>
                            </CRow>
                            {/**forward to wbs button  */}
                            <CRow className="justify-content-center">
                                <CButton className="create-wbs-from-modal" onClick={() => history.push({pathname:'/dashboard/WBS/create-wbs'})}>Create WBS</CButton>
                            </CRow>
                        </CForm>
                    </CContainer>
                </CModalBody>
            </CModal>
        </>
    )
}

export default OrderDetailsModal