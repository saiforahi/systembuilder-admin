import { CContainer, CCardFooter,CFormGroup, CButtonClose, CImg, CRow, CCol, CCard, CCardHeader, CCardBody, CForm, CLabel, CInput, CButton, CSelect, CTextarea, CAlert } from '@coreui/react';
import React, { useState } from 'react'
import '../brands/brands-styles.css'
import { useDispatch, useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { useFormik } from 'formik';
import { FILE_API, API } from '../../Config';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import ImageUploader from "react-images-upload";
import LinearProgress from '@mui/material/LinearProgress';
import { fetchPreBuildPcs } from '../../store/slices/prebuildSlice';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState,convertToRaw } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

const Create = (props) => {
    const dispatch = useDispatch()
    let history = useHistory()
    const [images, setImages] = useState([])
    const [avatars, setAvatars] = useState([])
    const [pictures, setPictures] = useState([])
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );
    const [features, setFeatures] = React.useState(
        () => EditorState.createEmpty(),
    );
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
    // const [selectedBrand,setSelectedBrand] = useState()
    const [submitted,setSubmitted]=useState(false)
    
    const createProcessor = (values) => {
        setSubmitted(true)
        let formData = new FormData()
        formData.append('name', values.name)
        formData.append('short_name', values.short_name)
        formData.append('type', values.type)
        formData.append('stock', values.stock)
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
        const specifications = {
            os: selectedOS.value,
            memory:selectedMemory.value,
            processor : selectedProcessor.value,
            storage:selectedStorage.value,
            color:selectedColor.value,
            gpu:selectedGraphic.value
        }
        formData.append('price', values.price)
        formData.append('brand', selectedBrand.value)
        formData.append('model', selectedModel.value)
        formData.append('specifications', JSON.stringify(specifications))
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }
        FILE_API.post('pre-built/create', formData).then((res) => {
            setSubmitted(false)
            console.log(res)
            if (res.status == 201) {
                dispatch(fetchPreBuildPcs())
                history.push('/dashboard/prebuild')
                swal('Created!', 'A new Pre Build PC Added', 'success')
            }
        }).catch(err=>{
            console.log(err.response.data)
            setSubmitted(false)
        })
    }
    const validateForm = (values) => {
        const errors = {}
        if (!values.name) errors.name = "Name is required"
        if (!values.short_name) errors.short_name = "Short Name is required"
        if (!values.stock) errors.stock = "Stock is required"
        if (!values.price) errors.price = "Price is required"
        if (!values.processor) errors.processor = "Processor is required"
        if (!values.storage) errors.storage = "Storage is required"
        if (!values.memory) errors.memory = "Memory is required"
        if (!values.color) errors.color = "Color is required"
        if (!values.os) errors.os = "OS is required"
        // if (!values.gpu) errors.gpu = "GPU is required"
        if (!values.type) errors.type = "Type is required"
        console.log('errors',errors,'values',values)
        return errors
    }
    
    const [processors,setProcessors] = useState([])
    const [selectedProcessor, setSelectedProcessor] = useState()
    const handleProcessorChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedProcessor(option)
        formCreateProcessor.setFieldValue('processor',option.value)
    }
    const handleProcessorCreate = (value) => {
        console.log('create', value)
        setSelectedProcessor({ value: value, label: value })
        setProcessors([...processors, { value: value, label: value }])
        formCreateProcessor.setFieldValue('processor',value)
    }
    const [memories, setMemories] = useState([])
    const [selectedMemory, setSelectedMemory] = useState('')
    const handleMemoryChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedMemory(option)
        formCreateProcessor.setFieldValue('memory',option.value)
    }
    const handleMemoryCreate = (value) => {
        console.log('create', value)
        setSelectedMemory({ value: value, label: value })
        setMemories([...memories, { value: value, label: value }])
        formCreateProcessor.setFieldValue('memory',value)
    }
    //storages
    const [storages, setStorages] = useState([])
    const [selectedStorage, setSelectedStorage] = useState('')
    const handleStorageChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedStorage(option)
        formCreateProcessor.setFieldValue('storage',option.value)
    }
    const handleStorageCreate = (value) => {
        console.log('create', value)
        setSelectedStorage({ value: value, label: value })
        setStorages([...storages, { value: value, label: value }])
        formCreateProcessor.setFieldValue('storage',value)
    }
    //color
    const [colors, setColors] = useState([])
    const [selectedColor, setSelectedColor] = useState()
    const handleColorChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedColor(option)
        formCreateProcessor.setFieldValue('color',option.value)
    }
    const handleColorCreate = (value) => {
        console.log('create', value)
        setSelectedColor({ value: value, label: value })
        setColors([...colors, { value: value, label: value }])
        formCreateProcessor.setFieldValue('color',value)
    }
    //brands
    const [brands, setBrands] = useState([])
    const [selectedBrand, setSelectedBrand] = useState()
    const handleBrandChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedBrand(option)
        formCreateProcessor.setFieldValue('brand',option.value)
    }
    const handleBrandCreate = (value) => {
        console.log('create', value)
        setSelectedBrand({ value: value, label: value })
        setBrands([...brands, { value: value, label: value }])
        formCreateProcessor.setFieldValue('brand',value)
    }
    const [operating_systems, setOperatingSystems] = useState([])
    const [selectedOS, setSelectedOS] = useState('')
    const handleOSChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedOS(option)
        formCreateProcessor.setFieldValue('os',option.value)
    }
    const handleOSCreate = (value) => {
        console.log('create', value)
        setSelectedOS({ value: value, label: value })
        setOperatingSystems([...operating_systems, { value: value, label: value }])
        formCreateProcessor.setFieldValue('os',value)
    }
    const [models, setModels] = useState([])
    const [selectedModel, setSelectedModel] = useState('')
    const handleModelChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedModel(option)
        formCreateProcessor.setFieldValue('model',option.value)
    }
    const handleModelCreate = (value) => {
        console.log('create', value)
        setSelectedModel({ value: value, label: value })
        setModels([...models, { value: value, label: value }])
        formCreateProcessor.setFieldValue('model',value)
    }
    const [price, setPrice] = useState()
    //gpu
    const [graphics, setGraphics] = useState([])
    const [selectedGraphic, setSelectedGraphic] = useState('')
    const handleGraphicChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedGraphic(option)
        formCreateProcessor.setFieldValue('gpu',option.value)
    }
    const handleGraphicCreate = (value) => {
        console.log('create', value)
        setSelectedGraphic({ value: value, label: value })
        setGraphics([...graphics, { value: value, label: value }])
        formCreateProcessor.setFieldValue('gpu',value)
    }
    const reset_form = () => {
        setSelectedGraphic(null)
        setSelectedBrand(null)
        setSelectedOS(null)
        setSelectedMemory(null)
        setSelectedProcessor(null)
        formCreateProcessor.handleReset()
        setPictures([])
    }
    const formCreateProcessor = useFormik({
        initialValues: {
            name: '',
            brand: '',
            model:'',
            short_name:'',
            stock:'',
            os:'',
            memory:'',
            storage:'',
            processor:'',
            gpu:'',
            price:0,
            type:'gaming'
        },
        validate: validateForm,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: createProcessor
    })
    function initialize() {
        API.get('pre-built/specification/list/specifications/color').then(res => {
            console.log('colors', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setColors(temp)
        })
        
        API.get('pre-built/specification/list/specifications/storage').then(res => {
            console.log('storages', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setStorages(temp)
        })
        API.get('pre-built/specification/list/specifications/memory').then(res => {
            console.log('memories', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setMemories(temp)
        })
        API.get('pre-built/specification/list/specifications/os').then(res => {
            console.log('pcies', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setOperatingSystems(temp)
        })
        
        API.get('pre-built/specification/list/specifications/processor').then(res => {
            console.log('cpu', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setProcessors(temp)
        })
        API.get('pre-built/specification/list/specifications/gpu').then(res => {
            console.log('gpu', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setGraphics(temp)
        })
        API.get('pre-built/specification/list/brand/none').then(res => {
            console.log('brands', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setBrands(temp)
        })
        API.get('pre-built/specification/list/model/none').then(res => {
            console.log('models', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setModels(temp)
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
                            <CCardHeader className="project-wbs-1"> <h4 className="section-name-wbscreate">Add Pre-Build PC</h4>
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
                                                <CInput className="custom-forminput-6" id="name" name="name" type="text" values={formCreateProcessor.values.name} onChange={formCreateProcessor.handleChange} />
                                                {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small style={{color:'red'}}>{formCreateProcessor.errors.name}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Short Name
                                                </CLabel>
                                                <CInput className="custom-forminput-6" id="short_name" name="short_name" type="text" values={formCreateProcessor.values.short_name} onChange={formCreateProcessor.handleChange} />
                                                {formCreateProcessor.errors.short_name && formCreateProcessor.touched.short_name && <small style={{color:'red'}}>{formCreateProcessor.errors.short_name}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Type
                                                </CLabel>
                                                <CSelect id='type' name='type' value={formCreateProcessor.values.type} onChange={(e)=>formCreateProcessor.setFieldValue('type',e.target.value)}>
                                                    <option value="gaming">Gaming</option>
                                                    <option value="cheap">Cheap</option>
                                                </CSelect>
                                                {/* <CInput className="custom-forminput-6" id="short_name" name="short_name" type="text" values={formCreateProcessor.values.short_name} onChange={formCreateProcessor.handleChange} /> */}
                                                {formCreateProcessor.errors.type && formCreateProcessor.touched.type && <small style={{color:'red'}}>{formCreateProcessor.errors.type}</small>}
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
                                                {/* {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>} */}
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
                                                {/* {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Stock
                                                </CLabel>
                                                <CInput className="custom-forminput-6" id="stock" name="stock" type="number" values={formCreateProcessor.values.stock} onChange={formCreateProcessor.handleChange} />
                                                {formCreateProcessor.errors.stock && formCreateProcessor.touched.stock && <small style={{color:'red'}}>{formCreateProcessor.errors.stock}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Operating System
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleOSChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleOSCreate}
                                                    options={operating_systems}
                                                    value={selectedOS}
                                                    isClearable={true}
                                                />
                                                {formCreateProcessor.errors.os && formCreateProcessor.touched.os && <small style={{color:'red'}}>{formCreateProcessor.errors.os}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Processor *
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleProcessorChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleProcessorCreate}
                                                    options={processors}
                                                    value={selectedProcessor}
                                                    isClearable={true}
                                                />
                                                {formCreateProcessor.errors.processor && formCreateProcessor.touched.processor && <small style={{color:'red'}}>{formCreateProcessor.errors.processor}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                GPU
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleGraphicChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleGraphicCreate}
                                                    options={graphics}
                                                    value={selectedGraphic}
                                                    isClearable={true}
                                                />
                                                {formCreateProcessor.errors.gpu && formCreateProcessor.touched.gpu && <small style={{color:'red'}}>{formCreateProcessor.errors.gpu}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Storage
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Storages"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleStorageChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleStorageCreate}
                                                    options={storages}
                                                    value={selectedStorage}
                                                    isClearable={true}
                                                />
                                                {formCreateProcessor.errors.storage && formCreateProcessor.touched.storage && <small style={{color:'red'}}>{formCreateProcessor.errors.storage}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Memory
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Memories"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleMemoryChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleMemoryCreate}
                                                    options={memories}
                                                    value={selectedMemory}
                                                    isClearable={true}
                                                />
                                                {formCreateProcessor.errors.memory && formCreateProcessor.touched.memory && <small style={{color:'red'}}>{formCreateProcessor.errors.memory}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Color
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Memories"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleColorChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleColorCreate}
                                                    options={colors}
                                                    value={selectedColor}
                                                    isClearable={true}
                                                />
                                                {formCreateProcessor.errors.color && formCreateProcessor.touched.color && <small style={{color:'red'}}>{formCreateProcessor.errors.color}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Price (BDT)
                                                </CLabel>
                                                <CInput required type="number" id='price' name='price' value={formCreateProcessor.values.price} onChange={formCreateProcessor.handleChange} />
                                                {formCreateProcessor.errors.price && formCreateProcessor.touched.price && <small>{formCreateProcessor.errors.price}</small>}
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
                                                    imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
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
                                <div className="col-md-12">{submitted? <LinearProgress/>:
                                    <div className="projectwbs-form-button-holders mt-3">
                                        <CButton type="button" onClick={formCreateProcessor.handleSubmit} className="create-btn-prjctwbs create-wbs">Add</CButton>
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