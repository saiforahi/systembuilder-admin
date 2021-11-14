import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton, CSelect, CTextarea, CAlert } from '@coreui/react';
import React, {useState} from 'react'
import './brands-styles.css'
import { useDispatch, useSelector } from 'react-redux';
import Select from "react-select";
import { useFormik } from 'formik';
import { API } from '../../Config';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { fetchBrandsThunk } from '../../store/slices/brandsSlice';

const CreateBrand = () => {
    const dispatch = useDispatch()
    let history=useHistory()
    const createBrand = (values)=> {
        API.post('brands/create',values).then((res)=>{
            console.log(res)
            if(res.status==200){
                dispatch(fetchBrandsThunk())
                history.push('/dashboard/brands')
                swal('Created!','A new Brand Created','success')
            }
        })
    }
    const validateForm = (values)=> {
        const errors={}
        if(!values.name) errors.name="Name is required"
        return errors
    }
    const formCreateBrand=useFormik({
        initialValues:{
            name:''
        },
        validate:validateForm,
        validateOnBlur:true,
        validateOnChange:true,
        onSubmit:createBrand
    })
    React.useEffect(() => {
        
    }, [])

    

    return (
        <>
            <CContainer>
                <CRow>
                    <div className="col-md-8 offset-md-2 col-sm-12">
                        <CCard className="custom-wbs-card-1">
                            <CCardHeader className="project-wbs-1"> <h4 className="section-name-wbscreate">Create Brand</h4>
                            </CCardHeader>
                            <CCardBody>
                                <CContainer>
                                    <CForm>
                                        <CRow>
                                            {/**Brand Name */}
                                            <div className="col-lg-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Name
                                                </CLabel>
                                                <CInput className="custom-forminput-6" id="name" name="name" type="text" values={formCreateBrand.values.name} onChange={formCreateBrand.handleChange}/>
                                                {formCreateBrand.errors.name && formCreateBrand.touched.name && <small>{formCreateBrand.errors.name}</small>}
                                            </div>
                                            
                                            {/**submit buttons */}
                                            <div className="col-md-12">
                                                <div className="projectwbs-form-button-holders mt-3">
                                                    <CButton type="button" onClick={formCreateBrand.handleSubmit} className="create-btn-prjctwbs create-wbs">Create Brand</CButton>
                                                    <CButton type="button" className="create-btn-prjctwbs cancel-wbs">Cancel</CButton>
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
export default CreateBrand;