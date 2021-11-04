import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton, CModal, CModalBody, CModalHeader, CModalFooter, CTextarea } from '@coreui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { form, useFormik } from 'formik';
import { PUBLIC_API } from '../../Config';
import swal from 'sweetalert';

const WbsModal = (props) => {
    console.log('props data: ', props.data)
    // const modalData = useSelector(state => state.wbs.data)

    const wbsStatusArray = [{
        "title": "To Do",
        "status": 1
    }, {
        "title": "Ongoing",
        "status": 2
    }, {
        "title": "Done",
        "status": 3
    }]

    const updateWbs = (data) => {
        console.log("formWbsUpdate:", formWbsUpdate.values)
        PUBLIC_API.put('wbs/update/' + props.data.id + '/', formWbsUpdate.values).then((res) => {
            console.log('update result', res)
            if (res.status == 200 && res.data.success == 'True') {
                swal({
                    title: "Good job!",
                    text: res.data.message,
                    icon: "success",
                });
                props.onClose()
            }
        })
    }

    const validateWbsCreateForm = (values) => {
        const errors = {};
        if (!values.title) errors.title = "Title is required!"
        console.log(errors);
        return errors;
    }
    const formWbsUpdate = useFormik({
        initialValues: {
            title: props.data.title,
            status: props.data.status,
            description: props.data.description,
            start_date: props.data.start_date,
            end_date: props.data.end_date,
            hours_worked: props.data.hours_worked,
            progress: props.data.progress,
            comments: props.data.comments,
            deliverable: props.data.deliverable,
            date_updated: ''
        },
        validateOnChange: true,
        validateOnBlur: true,
        validate: validateWbsCreateForm,
        onSubmit: (values) => updateWbs(values)
    })

    return (
        <>
            <CModal show={props.show} onClose={props.toggle} size="xl">
                <CModalHeader closeButton>
                    {props.data.project && props.data.project.task_delivery_order + " > "}
                    {props.data.project && <a href="https://www.google.com" target="_blank">{props.data.project.sub_task}</a>}
                </CModalHeader>
                <CModalBody>
                    <CRow>
                        <div className="col-lg-8 mb-3 border-right">
                            <CForm>
                                <CRow>
                                    <div className="col-lg-9 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Title
                                        </CLabel>
                                        <CInput id="title" name="title" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.title} />
                                    </div>
                                    <div className="col-lg-3 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Status
                                        </CLabel>
                                        <select className="form-select" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.status}>
                                            {wbsStatusArray.map((item, idx) => (
                                                <option key={idx} value={item.status}>{item.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                </CRow>
                                <CRow>
                                    <div className="col-lg-12 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Descriptions
                                        </CLabel>
                                        <CTextarea id="description" name="description" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.description}></CTextarea>
                                    </div>
                                </CRow>
                                <CRow>
                                    <div className="col-lg-6 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Start date
                                        </CLabel>
                                        <CInput id="start_date" name="start_date" type="date" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.start_date}></CInput>
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            End date
                                        </CLabel>
                                        <CInput id="end_date" name="end_date" type="date" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.end_date}></CInput>
                                    </div>
                                </CRow>
                                <CRow>
                                    <div className="col-lg-6 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Hours worked
                                        </CLabel>
                                        <CInput id="hours_worked" name="hours_worked" type="number" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.hours_worked}></CInput>
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Progress(%)
                                        </CLabel>
                                        <CInput id="progress" name="progress" type="number" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.progress}></CInput>
                                    </div>
                                </CRow>
                                <CRow>
                                    <div className="col-lg-12 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Comments
                                        </CLabel>
                                        <CTextarea id="comments" name="comments" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.comments}></CTextarea>
                                    </div>
                                </CRow>
                                <CRow>
                                    <div className="col-lg-12 mb-3">
                                        <CLabel className="custom-label-wbs5">
                                            Deliverable
                                        </CLabel>
                                        <CInput id="deliverable" name="deliverable" className="custom-forminput-5" onChange={formWbsUpdate.handleChange} value={formWbsUpdate.values.deliverable}></CInput>
                                    </div>
                                </CRow>
                                <div>
                                    <CButton type="button" onClick={formWbsUpdate.handleSubmit} color="primary">Update</CButton>{' '}
                                    <CButton
                                        color="secondary"
                                        onClick={props.toggle}
                                    >Cancel</CButton>
                                </div>
                            </CForm>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div>
                                <p>
                                    Reporter:
                                    <br></br>
                                    {/* Pial Noman */}
                                    {props.data.reporter?.first_name != undefined && props.data.reporter.first_name + " " + props.data.reporter.last_name}
                                </p>
                                <p>
                                    Remaining hours:
                                    <br></br>500
                                    {props.data.reporter?.remaining_hours}
                                </p>
                            </div>
                        </div>
                    </CRow>
                </CModalBody>
            </CModal>
        </>
    )
}
export default WbsModal;