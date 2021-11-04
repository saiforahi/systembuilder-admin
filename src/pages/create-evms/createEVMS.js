import {
  CCard,
  CContainer,
  CRow,
  CCardHeader,
  CForm,
  CLabel,
  CInput,
  CButton,
  CAlert
} from "@coreui/react";
import { BASE_URL } from '../../Config';
import React, { useState } from "react";
import Select from "react-select";
import "../createProject/createProject.css";
import { fetchProjectsThunk, fetchProjectsAssigneeThunk, fetchWbsThunk } from '../../store/slices/ProjectsSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { API, USER_ID } from '../../Config';
import swal from 'sweetalert'
const ProjectEVMS = () => {

  const colourStyles = {
    // control: (styles, state) => ({ ...styles,height:"35px", fontSize: '14px !important', lineHeight: '1.42857', borderRadius: "8px",borderRadius:".25rem",color:"rgb(133,133,133)",border:state.isFocused ? '2px solid #0065ff' :'inherit'}),
    option: (provided, state) => ({ ...provided, fontSize: "14px !important" }),
  };
  const projects = useSelector(state =>{
    let e=[]
    Array.from( state.projects.pm_projects).forEach((item,idx)=>{
      e.push({value:item.id,label:item.task_delivery_order.title+'/'+item.sub_task,data:item})
    })
    return e
  })
  console.log("pM projects", projects);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchProjectsThunk(5))
  }, [])


  const assigneeList = useSelector(state => state.projects.project)

  const handleChange = (field, value) => {
    switch (field) {
      case "projects":

        setProjectValue(value);

       
        break;
      // case "workPackage":
      //   setPackageValue(value);
      //   break;
      default:
        break;
    }
  };
  const [projectValue, setProjectValue] = useState();

  
  const getAssigneeList = (option) => {
    dispatch(fetchProjectsAssigneeThunk(option.work_package_number))
    setProjectValue(option)
    console.log('projectValue',option)
    
    formCreateEVMS.setFieldValue('project',option.value)
  
    formCreateEVMS.setFieldValue('planned_hours',option.data.planned_hours)
formCreateEVMS.setFieldValue('planned_value',option.data.planned_value)
formCreateEVMS.setFieldValue('work_package_number',option.data.work_package_number)
    // setSelectedProjectEndDate(option.planned_delivery_date)
  }
  const create_evms = async () => {
    console.log('values', JSON.stringify(formCreateEVMS.values))
    API.post('evms/create/', formCreateEVMS.values).then((res) => {
      console.log(res)
      if (res.status == 200 && res.data.success == 'True') {
        reset_form()
        swal('Created!', 'Successfuly Created', 'success')
      }
    })
  }
  const reset_form = () => {
    formCreateEVMS.resetForm()
    setProjectValue(null);


  }
  const validate_evms_form=(values) =>{
    const errors ={}
    // if(!values.project)errors.project="Project Selection is required"
    if(!values.earned_value)errors.earned_value="Earned value is required"
    if(!values.actual_cost)errors.actual_cost="Actual Cost is required"
    if(!values.estimate_at_completion)errors.estimate_at_completion="Estimate at completion is required"
    if(!values.estimate_to_completion)errors.estimate_to_completion="Estimate to completion is required"
    if(!values.variance_at_completion) errors.variance_at_completion="Variance at completion is required"
    if(!values.budget_at_completion)errors.budget_at_completion="Budget at completion is required"
    // if(!values.planned_value)errors.planned_value="Planned value is required"
    // if(!values.planned_hours)errors.planned_hours="Planned hours is required"
    return errors
  }
  const formCreateEVMS = useFormik({
    initialValues: {
      project: "",
     work_package_number:"",
      earned_value: "",
      actual_cost: "",
      estimate_at_completion: "",
      estimate_to_completion: "",
      planned_value: "",
      planned_hours:"",
      variance_at_completion: "",
      budget_at_completion: ""

    },
validate:true,
    validateOnChange: true,
    validateOnBlur: true,
    validate:validate_evms_form,
    onSubmit: create_evms
  })

  return (
    <>
      <CContainer>
        <CRow>
          <div className="col-lg-10 offset-lg-1 col-md-12">
            <CCard className="custom-project-card-1">
              <CCardHeader className="project-header-3">
                {" "}
                <h4 className="section-name-projectcreate">Create EVMS</h4>
              </CCardHeader>
              <CContainer>
                <CForm className="mt-3">
                  <CRow>
                    {/**Project Name */}
                    <div className="col-lg-12 mb-3">
                      <CLabel className="custom-label-5" htmlFor="project">
                        Project *
                      </CLabel>
                      <Select
                        closeMenuOnSelect={true}
                        aria-labelledby="project"
                        id="project"
                        // getOptionLabel={option => option.task_delivery_order.title + " / " + option.sub_task}
                        // getOptionValue={option => option.id}
                        placeholder="Select a project"
                        isClearable={false}
                        isMulti={false}
                     
                        // onChange={(value) => handleChange("projects", value)}
                        onChange={getAssigneeList}
                        classNamePrefix="custom-forminput-6"
                        required
                        options={projects}
                        styles={colourStyles}
                      />
                      {/**View related TDO details */}
                      {projectValue != undefined ?
                        (<div className="mt-1">
                          <CAlert color="primary">
                            <small>
                              <b>Work Package Number:</b> {projectValue.data.work_package_number}
                              <br />
                              <b>Estimated Persons: </b> {projectValue.data.estimated_person}
                              <br />
                              <b>Planned Delivery Date: </b> {projectValue.data.planned_delivery_date}
                              <br />
                              <b>Assignee(s):</b><span> </span>


                            </small>
                          </CAlert>
                        </div>
                        ) :
                        null}
                        {/**Error show */}
                        {formCreateEVMS.errors.project && <p className="error">{formCreateEVMS.errors.project}</p>}
                    </div>
                    {/**Work package */}
                    {/* <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="wPackage">
                        Work Package
                      </CLabel>
                      <CInput name="wPackage" id="wPackage" type="number" readOnly />
                    </div> */}
                    {/**Earned Value */}
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="earned_value">
                        Earned Value *
                      </CLabel>
                      <CInput className="custom-forminput-6" name="earned_value" id="earned_value" type="number" min="0.00" step="0.01" value={formCreateEVMS.values.earned_value} onChange={formCreateEVMS.handleChange} required>

                      </CInput>
                      {/**Error show */}
                      {formCreateEVMS.errors.earned_value && <p className="error">{formCreateEVMS.errors.earned_value}</p>}
                    </div>
                    {/**Actual Cost */}
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="actual_cost">
                        Actual Cost  *
                      </CLabel>
                      <CInput className="custom-forminput-6" name="actual_cost" id="actual_cost" type="number" min="0" step="0.1" value={formCreateEVMS.values.actual_cost} onChange={formCreateEVMS.handleChange} required />
                      {/**Error show */}
                      {formCreateEVMS.errors.actual_cost && <p className="error">{formCreateEVMS.errors.actual_cost}</p>}
                    </div>
                    {/**estimate at completion */}
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="estimate_at_completion">
                        Estimate at completion *
                      </CLabel>
                      <CInput className="custom-forminput-6" name="estimate_at_completion" id="estimate_at_completion" type="number" min="0" step="0.1" value={formCreateEVMS.values.estimate_at_completion} onChange
                        ={formCreateEVMS.handleChange} required />
                        {/**error show */}
                           {formCreateEVMS.errors.estimate_at_completion && <p className="error">{formCreateEVMS.errors.estimate_at_completion}</p>}
                    </div>
                    {/**estimate to completion */}
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="estimate_to_completion">
                        Estimate to completion *
                      </CLabel>
                      <CInput className="custom-forminput-6" name="estimate_to_completion" id="estimate_to_completion" type="number" min="0" step="0.1" value={formCreateEVMS.values.estimate_to_completion} onChange={formCreateEVMS.handleChange} required />
                      {/**Error show */}
                      {formCreateEVMS.errors.estimate_to_completion && <p className="error">{formCreateEVMS.errors.estimate_to_completion}</p>}
                    </div>
                    {/**Planned Value */}

                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="planned_value">
                        Planned Value
                      </CLabel>
                      <CInput className="custom-forminput-6" name="planned_value" id="planned_value" type="number" min="0" value={formCreateEVMS.values.planned_value} onChange={formCreateEVMS.handleChange} />
                      {/**Error show */}
                      {formCreateEVMS.errors.planned_value && <p className="error">{formCreateEVMS.errors.planned_value}</p>}
                    </div>
                    {/**Planned hours */}
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="planned_hours">
                        Planned Hours
                      </CLabel>
                      <CInput className="custom-forminput-6" name="planned_hours" id="planned_hours" type="number" value={formCreateEVMS.values.planned_hours} onChange={formCreateEVMS.handleChange} />
                      {/**Error show */}
                      {formCreateEVMS.errors.planned_hours && <p className="error">{formCreateEVMS.errors.planned_hours}</p>}
                    </div>
                    {/**variance at completion */}
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="variance_at_completion">
                        Variance at completion *
                      </CLabel>
                      <CInput className="custom-forminput-6" name="variance_at_completion" id="variance_at_completion" type="number" min="0" step="0.1" value={formCreateEVMS.values.variance_at_completion} onChange={formCreateEVMS.handleChange} required />
{/**Error show */}
{formCreateEVMS.errors.variance_at_completion && <p className="error">{formCreateEVMS.errors.variance_at_completion}</p>}
                    </div>
                    {/**budget at completion */}
                    <div className="col-lg-6 mb-3">
                      <CLabel className="custom-label-5" htmlFor="budget_at_completion">
                        Budget at completion *
                      </CLabel>
                      <CInput className="custom-forminput-6" name="budget_at_completion" id="budget_at_completion" type="number" min="0" step="0.1" value={formCreateEVMS.values.budget_at_completion} onChange={formCreateEVMS.handleChange} required />
                    
                    {/**Error show */}
                    {formCreateEVMS.errors.budget_at_completion && <p className="error">{formCreateEVMS.errors.budget_at_completion}</p>}
                    </div>
                    {/**submit buttons */}
                    <div className="col-md-12">
                      <div className="project-form-button-holders mt-3">
                        <CButton className="create-btn-prjct create-prjct" onClick={formCreateEVMS.handleSubmit}>Create EVMS</CButton>
                        <CButton className="create-btn-prjct cancel-prjct" onClick={reset_form}>Cancel</CButton>
                      </div>
                    </div>

                  </CRow>
                </CForm>
              </CContainer>
            </CCard>
          </div>
        </CRow>
      </CContainer>
    </>
  );
};
export default ProjectEVMS;
