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
import { fetchCPUcoolersThunk } from '../../store/slices/cpucoolersSlice';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState,convertToRaw } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
const Create = (props) => {
    const dispatch = useDispatch()
    const [submitted,setSubmitted]=useState(false)
    let history = useHistory()
    const [pictures, setPictures] = useState([])
    const onDrop = picture => {
        setPictures([...pictures, picture]);
    };
    // const [selectedBrand,setSelectedBrand] = useState()
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );
    const [features, setFeatures] = React.useState(
        () => EditorState.createEmpty(),
    );
    const createMotherboard = (values) => {
        setSubmitted(true)
        let formData = new FormData()
        formData.append('name', values.name)
        formData.append('stock',values.stock)
        formData.append('short_name', values.short_name)
        formData.append('description',draftToHtml(convertToRaw(editorState.getCurrentContent())))
        formData.append('features',draftToHtml(convertToRaw(features.getCurrentContent())))
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
        FILE_API.post('cpucoolers/create', formData).then((res) => {
            setSubmitted(false)
            console.log(res)
            if (res.status == 201) {
                dispatch(fetchCPUcoolersThunk())
                history.push('/dashboard/cpu-coolers')
                swal('Created!', 'A new CPU Cooler Created', 'success')
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
        formCreateCPUcooler.setFieldValue('brand',option.value)
    }
    const handleBrandCreate = (value) => {
        console.log('create', value)
        setSelectedBrand({ value: value, label: value })
        formCreateCPUcooler.setFieldValue('brand',value)
        setBrands([...brands, { value: value, label: value }])
    }
    //model
    const [models, setModels] = useState([])
    const [selectedModel, setSelectedModel] = useState('')
    const handleModelChange = (option, value, actionMeta) => {
        console.log(option, value)
        formCreateCPUcooler.setFieldValue('model',option.value)
        setSelectedModel(option)
    }
    const handleModelCreate = (value) => {
        console.log('create', value)
        setSelectedModel({ value: value, label: value })
        formCreateCPUcooler.setFieldValue('model',value)
        setModels([...models, { value: value, label: value }])
    }
    const reset_form = () => {
        formCreateCPUcooler.handleReset()
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
    const formCreateCPUcooler = useFormik({
        initialValues: {
            name: '',
            brand: '',
            model:'',
            price:'',
            stock:'',
            short_name:''
        },
        validate: validateForm,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: createMotherboard
    })
    function initialize() {
        API.get('cpucoolers/specification/list/model/none').then(res => {
            console.log('models', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setModels(temp)
        })
        API.get('cpucoolers/specification/list/brand/none').then(res => {
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
                            <CCardHeader className="project-wbs-1"> <h4 className="section-name-wbscreate">Add CPU Cooler</h4>
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
                                                <CInput className="custom-forminput-6" id="name" name="name" type="text" values={formCreateCPUcooler.values.name} onChange={formCreateCPUcooler.handleChange} />
                                                {formCreateCPUcooler.errors.name && formCreateCPUcooler.touched.name && <small class="error">{formCreateCPUcooler.errors.name}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Short Name
                                                </CLabel>
                                                <CInput className="custom-forminput-6" id="short_name" name="short_name" type="text" values={formCreateCPUcooler.values.short_name} onChange={formCreateCPUcooler.handleChange} />
                                                {formCreateCPUcooler.errors.short_name && formCreateCPUcooler.touched.short_name && <small class="error">{formCreateCPUcooler.errors.short_name}</small>}
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
                                                {formCreateCPUcooler.errors.brand && formCreateCPUcooler.touched.brand && <small class="error">{formCreateCPUcooler.errors.brand}</small>}
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
                                                {formCreateCPUcooler.errors.model && formCreateCPUcooler.touched.model && <small class="error">{formCreateCPUcooler.errors.model}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Stock
                                                </CLabel>
                                                <CInput className="custom-forminput-6" id="stock" name="stock" type="number" values={formCreateCPUcooler.values.stock} onChange={formCreateCPUcooler.handleChange} />
                                                {/* {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>} */}
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Price (BDT)
                                                </CLabel>
                                                <CInput type="number" id='price' name='price' value={formCreateCPUcooler.values.price} onChange={formCreateCPUcooler.handleChange} />
                                                {formCreateCPUcooler.errors.price && formCreateCPUcooler.touched.price && <small>{formCreateCPUcooler.errors.price}</small>}
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Description
                                                </CLabel>
                                                <Editor
                                                    editorState={editorState}
                                                    wrapperClassName="demo-wrapper border rounded p-2"
                                                    editorClassName="demo-editor border p-2"
                                                    onEditorStateChange={setEditorState}
                                                    // toolbar={{
                                                    //     inline: { inDropdown: true },
                                                    //     list: { inDropdown: true },
                                                    //     textAlign: { inDropdown: true },
                                                    //     link: { inDropdown: true },
                                                    //     history: { inDropdown: true },
                                                    // }}
                                                    localization={{
                                                        locale: 'en',
                                                      }}
                                                />
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Features
                                                </CLabel>
                                                <Editor
                                                    editorState={features}
                                                    wrapperClassName="demo-wrapper border rounded p-2"
                                                    editorClassName="demo-editor border p-2"
                                                    onEditorStateChange={setFeatures}
                                                />
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
                                        <CButton type="button" disabled={!formCreateCPUcooler.isValid} onClick={formCreateCPUcooler.handleSubmit} className="create-btn-prjctwbs create-wbs">Add</CButton>
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