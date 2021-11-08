import { CContainer, CFormGroup, CButtonClose, CImg, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton, CSelect, CTextarea, CAlert } from '@coreui/react';
import React, { useState } from 'react'
import '../brands/brands-styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsThunk, fetchProjectsAssigneeThunk, fetchWbsThunk } from '../../store/slices/ProjectsSlice';
import Select from "react-select";
import { useFormik } from 'formik';
import { API } from '../../Config';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { Stack, Tile, SimpleSlides, AnimatedSlides } from "react-easy-image";
import ImageUploader from "react-images-upload";
import Dropzone from 'react-dropzone-uploader'
const Create = (props) => {
    const dispatch = useDispatch()
    let history = useHistory()
    const [images, setImages] = useState([])
    const [avatars, setAvatars] = useState([])
    const [pictures, setPictures] = useState([]);
    const onDrop = picture => {
        setPictures([...pictures, picture]);
    };
    const deleteFile = (idx) => {
        const new_images = images.filter((item, index) => index !== idx);
        setImages(new_images);
        const new_avatars = avatars.filter((item, index) => index !== idx);
        setAvatars(new_avatars);
    }
    const onImageChange = (file) => {
        setImages([...images, file]);
        setAvatars([...avatars, URL.createObjectURL(file)]);
    }
    const brands = useSelector(state => {
        let temp = []
        Array.from(state.brands.data).forEach((item, idx) => {
            temp.push({ value: item.id, label: item.name, data: item })
        })
        return temp
    })
    const createlaptop = (values) => {
        API.post('laptops/create', values).then((res) => {
            console.log(res)
            if (res.status == 200) {
                history.push('/dashboard/laptops')
                swal('Created!', 'A new laptop Created', 'success')
            }
        })
    }
    const validateForm = (values) => {
        const errors = {}
        if (!values.name) errors.name = "Name is required"
        return errors
    }
    const handleBrandChange = (option, actionMeta) => {
        if (actionMeta.action == 'select-option') {
            formCreateLaptop.setFieldValue('brand', option.value)
        }
    }
    
    const formCreateLaptop = useFormik({
        initialValues: {
            name: '',
            brand: ''
        },
        validate: validateForm,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: createlaptop
    })
    React.useEffect(() => {
        dispatch(fetchProjectsThunk(5))
    }, [])
    
    
    return (
        <>
            <CContainer>
                <CRow>
                    <div className="col-md-8 offset-md-2 col-sm-12">
                        <CCard className="custom-wbs-card-1">
                            <CCardHeader className="project-wbs-1"> <h4 className="section-name-wbscreate">Add Laptop</h4>
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
                                                <CInput className="custom-forminput-6" id="name" name="name" type="text" values={formCreateLaptop.values.name} onChange={formCreateLaptop.handleChange} />
                                                {formCreateLaptop.errors.name && formCreateLaptop.touched.name && <small>{formCreateLaptop.errors.name}</small>}
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Brand
                                                </CLabel>
                                                <Select
                                                    className="custom-forminput-6"
                                                    options={brands}
                                                    isClearable={true}
                                                    onChange={handleBrandChange}
                                                />
                                                {formCreateLaptop.errors.name && formCreateLaptop.touched.name && <small>{formCreateLaptop.errors.name}</small>}
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <ImageUploader
                                                    {...props}
                                                    withIcon={true}
                                                    onChange={onDrop}
                                                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                                                    maxFileSize={5242880}
                                                    withPreview={true}
                                                    singleImage={false}
                                                />
                                            </div>
                                            {/**submit buttons */}
                                            <div className="col-md-12">
                                                <div className="projectwbs-form-button-holders mt-3">
                                                    <CButton type="button" onClick={formCreateLaptop.handleSubmit} className="create-btn-prjctwbs create-wbs">Add Laptop</CButton>
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
export default Create;