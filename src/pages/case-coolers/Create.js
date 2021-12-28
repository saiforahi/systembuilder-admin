import { CContainer, CCardFooter,CFormGroup, CButtonClose, CImg, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton, CSelect, CTextarea, CAlert } from '@coreui/react';
import React, { useState } from 'react'
import '../brands/brands-styles.css'
import { useDispatch, useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import CreatableSelect from 'react-select/creatable';
import Select from "react-select";
import { useFormik } from 'formik';
import { FILE_API, API } from '../../Config';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import ImageUploader from "react-images-upload";
import { fetchCaseCoolersThunk } from '../../store/slices/caseCoolersSlice';
const Create = (props) => {
    const dispatch = useDispatch()
    const [submitted,setSubmitted]=useState(false)
    let history = useHistory()
    const [pictures, setPictures] = useState([])
    const onDrop = picture => {
        setPictures([...pictures, picture]);
    };
    // const [selectedBrand,setSelectedBrand] = useState()
    
    const createMotherboard = (values) => {
        setSubmitted(true)
        let formData = new FormData()
        formData.append('name', values.name)
        formData.append('short_name', values.short_name)
        formData.append('stock',values.stock)
        if (pictures.length > 0) {
            formData.append('total_images', pictures[0].length)
            // formData.append('images',pictures[0])
            console.log('pictures', pictures[0])
            for (let index = 0; index < pictures[0].length; index++) {
                console.log('picture'.concat(index), pictures[0][index])
                formData.append('image' + (index + 1), pictures[0][index])
            }
        }
        
        formData.append('price', values.price)
        formData.append('brand', selectedBrand.value)
        formData.append('model', selectedModel.value)
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        FILE_API.post('casecoolers/create', formData).then((res) => {
            setSubmitted(false)
            console.log(res)
            if (res.status == 201) {
                dispatch(fetchCaseCoolersThunk())
                history.push('/dashboard/case-coolers')
                swal('Created!', 'A new Case Cooler Created', 'success')
            }
        }).catch(err=>{
            setSubmitted(false)
        })
    }
    

    const [brands, setBrands] = useState([])
    const [selectedBrand, setSelectedBrand] = useState(null)
    const handleBrandChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedBrand(option)
        formCreateCaseCooler.setFieldValue('brand',option.value)
    }
    const handleBrandCreate = (value) => {
        console.log('create', value)
        setSelectedBrand({ value: value, label: value })
        formCreateCaseCooler.setFieldValue('brand',value)
        setBrands([...brands, { value: value, label: value }])
    }
    

    
    
    //model
    const [models, setModels] = useState([])
    const [selectedModel, setSelectedModel] = useState('')
    const handleModelChange = (option, value, actionMeta) => {
        console.log(option, value)
        formCreateCaseCooler.setFieldValue('model',option.value)
        setSelectedModel(option)
    }
    const handleModelCreate = (value) => {
        console.log('create', value)
        setSelectedModel({ value: value, label: value })
        formCreateCaseCooler.setFieldValue('model',value)
        setModels([...models, { value: value, label: value }])
    }
    const [price, setPrice] = useState()
    
    const reset_form = () => {
        formCreateCaseCooler.handleReset()
        setPictures([])
    }
    const validateForm = (values) => {
        const errors = {}
        if (!values.name) errors.name = "Name is required"
        if (!values.brand) errors.brand = "Brand is required"
        if (!values.short_name) errors.short_name = "Short Name is required"
        if (!values.model) errors.model = "Model is required"
        // if (!values.price) errors.price = "Price is required"
        // if (!values.memory) errors.memory = "Memory is required"
        // if (!values.ram_size) errors.ram_size = "RAM Size is required"
        // if (!values.latency) errors.latency = "Latency is required"
        // if (!values.dimm_type) errors.dimm_type = "DIMM is required"
        // if (!values.part_number) errors.part_number = "Part Number is required"
       
        return errors
    }
    const formCreateCaseCooler = useFormik({
        initialValues: {
            name: '',
            short_name:'',
            brand: '',
            model:'',
            price:'',
            stock:''
        },
        validate: validateForm,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: createMotherboard
    })
    function initialize() {
        API.get('monitors/specification/list/model/none').then(res => {
            console.log('models', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setModels(temp)
        })
        API.get('monitors/specification/list/brand/none').then(res => {
            console.log('brands', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setBrands(temp)
        })
        
    }
    React.useEffect(() => {
        initialize()
    }, [])


    return (
        <>
            <CContainer>
                <CRow>
                    <div className="col-md-12 col-sm-12">
                        <CCard className="custom-wbs-card-1">
                            <CCardHeader className="project-wbs-1"> <h4 className="section-name-wbscreate">Add Case Cooler</h4>
                            </CCardHeader>
                            <CCardBody>
                                <CContainer>
                                    <CForm>
                                        <CRow>
                                            {/**Brand Name */}
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Name
                                                </CLabel>
                                                <CInput className="custom-forminput-6" id="name" name="name" type="text" values={formCreateCaseCooler.values.name} onChange={formCreateCaseCooler.handleChange} />
                                                {formCreateCaseCooler.errors.name && formCreateCaseCooler.touched.name && <small class="error">{formCreateCaseCooler.errors.name}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Name
                                                </CLabel>
                                                <CInput className="custom-forminput-6" id="short_name" name="short_name" type="text" values={formCreateCaseCooler.values.short_name} onChange={formCreateCaseCooler.handleChange} />
                                                {formCreateCaseCooler.errors.short_name && formCreateCaseCooler.touched.short_name && <small class="error">{formCreateCaseCooler.errors.short_name}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Brand
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Memories"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleBrandChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleBrandCreate}
                                                    options={brands}
                                                    value={selectedBrand}
                                                    isClearable={true}
                                                />
                                                {formCreateCaseCooler.errors.brand && formCreateCaseCooler.touched.brand && <small class="error">{formCreateCaseCooler.errors.brand}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Model
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Memories"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleModelChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleModelCreate}
                                                    options={models}
                                                    value={selectedModel}
                                                    isClearable={true}
                                                />
                                                {formCreateCaseCooler.errors.model && formCreateCaseCooler.touched.model && <small class="error">{formCreateCaseCooler.errors.model}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Stock
                                                </CLabel>
                                                <CInput className="custom-forminput-6" id="stock" name="stock" type="number" values={formCreateCaseCooler.values.stock} onChange={formCreateCaseCooler.handleChange} />
                                                {/* {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>} */}
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Price (BDT)
                                                </CLabel>
                                                <CInput type="number" id='price' name='price' value={formCreateCaseCooler.values.price} onChange={formCreateCaseCooler.handleChange} />
                                                {formCreateCaseCooler.errors.price && formCreateCaseCooler.touched.price && <small>{formCreateCaseCooler.errors.price}</small>}
                                            </div>

                                            <div className="col-lg-12 mb-3">
                                                <ImageUploader
                                                    {...props}
                                                    withIcon={true}
                                                    onChange={onDrop}
                                                    imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg",".webp"]}
                                                    maxFileSize={5242880}
                                                    withPreview={true}
                                                    singleImage={false}
                                                />
                                            </div>
                                            {/**submit buttons */}

                                        </CRow>
                                    </CForm>
                                </CContainer>
                            </CCardBody>
                            <CCardFooter>
                                <div className="col-md-12">{ submitted? <LinearProgress/>:
                                    <div className="projectwbs-form-button-holders mt-3">
                                        <CButton type="button" disabled={!formCreateCaseCooler.isValid} onClick={formCreateCaseCooler.handleSubmit} className="create-btn-prjctwbs create-wbs">Add</CButton>
                                        <CButton type="button" onClick={reset_form} className="create-btn-prjctwbs cancel-wbs">Reset</CButton>
                                    </div>}
                                </div>
                            </CCardFooter>
                        </CCard>
                    </div>
                </CRow>
            </CContainer>
        </>
    )
}
export default Create;