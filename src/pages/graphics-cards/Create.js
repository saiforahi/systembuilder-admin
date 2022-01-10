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
import { fetchGraphicsCardsThunk } from '../../store/slices/graphicsCardsSlice';
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
    const createStorage = (values) => {
        setSubmitted(true)
        let formData = new FormData()
        formData.append('name', values.name)
        formData.append('stock',values.stock)
        formData.append('short_name',values.short_name)
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
        // const general_specs = {
        //     chipset: selectedChipSet.value,
        //     memory: selectedMemory.value!==null?selectedMemory.value:'',
        // }
        // const clock_specs = {
        //     base_clock_speed: selectedPartNumber.value,
        //     clock_speed: selectedLatency.value
        // }
        
        formData.append('price', price)
        formData.append('brand', selectedBrand.value)
        formData.append('model', selectedModel.value)
        // formData.append('general_specs', JSON.stringify(general_specs))
        // formData.append('clock_specs', JSON.stringify(clock_specs))
        
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        FILE_API.post('graphics/create', formData).then((res) => {
            setSubmitted(false)
            console.log(res)
            if (res.status == 201) {
                dispatch(fetchGraphicsCardsThunk())
                history.push('/dashboard/graphics')
                swal('Created!', 'A new Graphics Card Created', 'success')
            }
        }).catch(err=>{
            setSubmitted(false)
        })
    }
    
    
    const [chipsets,setChipSets] = useState([])
    const [selectedChipSet, setSelectedChipSet] = useState(null)
    const handleChipSetChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedChipSet(option)
    }
    const handleChipSetCreate = (value) => {
        console.log('create', value)
        setSelectedChipSet({ value: value, label: value })
        setChipSets([...chipsets, { value: value, label: value }])
    }
    const [brands, setBrands] = useState([])
    const [selectedBrand, setSelectedBrand] = useState(null)
    const handleBrandChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedBrand(option)
        formCreateGraphicsCard.setFieldValue('brand',option.value)
    }
    const handleBrandCreate = (value) => {
        console.log('create', value)
        setSelectedBrand({ value: value, label: value })
        formCreateGraphicsCard.setFieldValue('brand',value)
        setBrands([...brands, { value: value, label: value }])
    }
    const [graphics, setMemories] = useState([])
    const [selectedMemory, setSelectedMemory] = useState(null)
    const handleMemoryChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedMemory(option)
        formCreateGraphicsCard.setFieldValue('memory',option.value)
    }
    const handleMemoryCreate = (value) => {
        console.log('create', value)
        setSelectedMemory({ value: value, label: value })
        formCreateGraphicsCard.setFieldValue('memory',value)
        setMemories([...graphics, { value: value, label: value }])
    }

    //write speed
    const [latencies, setLatencies] = useState([])
    const [selectedLatency, setSelectedLatency] = useState(null)
    const handleLatencyChange = (option, value, actionMeta) => {
        console.log(option, value)
        formCreateGraphicsCard.setFieldValue('latency',option.value)
        setSelectedLatency(option)
    }
    const handleLatencyCreate = (value) => {
        console.log('create', value)
        setSelectedLatency({ value: value, label: value })
        formCreateGraphicsCard.setFieldValue('latency',value)
        setLatencies([...latencies, { value: value, label: value }])
    }
    //read
    const [dimm_types, setDimmTypes] = useState([])
    const [selectedDimmType, setSelectedDimmType] = useState(null)
    const handleDimmChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedDimmType(option)
    }
    const handleDimmCreate = (value) => {
        console.log('create', value)
        setSelectedDimmType({ value: value, label: value })
        setDimmTypes([...dimm_types, { value: value, label: value }])
    }
    //drive type
    const [part_numbers, setPartNumbers] = useState([])
    const [selectedPartNumber, setSelectedPartNumber] = useState(null)
    const handlePartNumberChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedPartNumber(option)
    }
    const handlePartNumberCreate = (value) => {
        console.log('create', value)
        setSelectedPartNumber({ value: value, label: value })
        setPartNumbers([...part_numbers, { value: value, label: value }])
    }
    
    //model
    const [models, setModels] = useState([])
    const [selectedModel, setSelectedModel] = useState('')
    const handleModelChange = (option, value, actionMeta) => {
        console.log(option, value)
        formCreateGraphicsCard.setFieldValue('model',option.value)
        setSelectedModel(option)
    }
    const handleModelCreate = (value) => {
        console.log('create', value)
        setSelectedModel({ value: value, label: value })
        formCreateGraphicsCard.setFieldValue('model',value)
        setModels([...models, { value: value, label: value }])
    }
    const [price, setPrice] = useState()
    
    const reset_form = () => {
        setSelectedBrand(null)
        setSelectedMemory(null)
        setSelectedLatency(null)
        setSelectedDimmType(null)
        formCreateGraphicsCard.handleReset()
        setPictures([])
    }
    const validateForm = (values) => {
        const errors = {}
        if (!values.name) errors.name = "Name is required"
        if (!values.brand) errors.brand = "Brand is required"
        if (!values.model) errors.model = "Model is required"
        // if (!values.price) errors.price = "Price is required"
        if (!values.short_name) errors.short_name = "Short Name is required"
        // if (!values.memory) errors.memory = "Memory is required"
        // if (!values.ram_size) errors.ram_size = "RAM Size is required"
        // if (!values.latency) errors.latency = "Latency is required"
        // if (!values.dimm_type) errors.dimm_type = "DIMM is required"
        // if (!values.part_number) errors.part_number = "Part Number is required"
       
        return errors
    }
    const formCreateGraphicsCard = useFormik({
        initialValues: {
            name: '',
            brand: '',
            model:'',
            price:'',
            ram_size:'',
            memory:'',
            latency:'',
            part_number:'',
            dimm_type:'',
            stock:'',
            short_name:''
        },
        validate: validateForm,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: createStorage
    })
    function initialize() {
        API.get('graphics/specification/list/model/none').then(res => {
            console.log('models', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setModels(temp)
        })
        API.get('graphics/specification/list/brand/none').then(res => {
            console.log('brands', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setBrands(temp)
        })
        // API.get('graphics/specification/list/memory/memory').then(res => {
        //     console.log('graphics', res.data)
        //     let temp = []
        //     Array.from(res.data.data).forEach((item, idx) => {
        //         temp.push({ value: item, label: item })
        //     })
        //     setMemories(temp)
        // })
        // API.get('graphics/specification/list/memory/ram').then(res => {
        //     console.log('chipsets', res.data)
        //     let temp = []
        //     Array.from(res.data.data).forEach((item, idx) => {
        //         temp.push({ value: item, label: item })
        //     })
        //     setChipSets(temp)
        // })
        // API.get('graphics/specification/list/memory/latency').then(res => {
        //     console.log('write_speed', res.data)
        //     let temp = []
        //     Array.from(res.data.data).forEach((item, idx) => {
        //         temp.push({ value: item, label: item })
        //     })
        //     setLatencies(temp)
        // })
        // API.get('graphics/specification/list/additional/dimm').then(res => {
        //     console.log('read_speed', res.data)
        //     let temp = []
        //     Array.from(res.data.data).forEach((item, idx) => {
        //         temp.push({ value: item, label: item })
        //     })
        //     setDimmTypes(temp)
        // })
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
                            <CCardHeader className="project-wbs-1"> <h4 className="section-name-wbscreate">Add Graphics Card</h4>
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
                                                <CInput className="custom-forminput-6" id="name" name="name" type="text" values={formCreateGraphicsCard.values.name} onChange={formCreateGraphicsCard.handleChange} />
                                                {formCreateGraphicsCard.errors.name && formCreateGraphicsCard.touched.name && <small class="error">{formCreateGraphicsCard.errors.name}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Short Name
                                                </CLabel>
                                                <CInput className="custom-forminput-6" id="short_name" name="short_name" type="text" values={formCreateGraphicsCard.values.short_name} onChange={formCreateGraphicsCard.handleChange} />
                                                {formCreateGraphicsCard.errors.short_name && formCreateGraphicsCard.touched.short_name && <small class="error">{formCreateGraphicsCard.errors.short_name}</small>}
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
                                                {formCreateGraphicsCard.errors.brand && formCreateGraphicsCard.touched.brand && <small class="error">{formCreateGraphicsCard.errors.brand}</small>}
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
                                                {formCreateGraphicsCard.errors.model && formCreateGraphicsCard.touched.model && <small class="error">{formCreateGraphicsCard.errors.model}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Stock
                                                </CLabel>
                                                <CInput className="custom-forminput-6" id="stock" name="stock" type="number" values={formCreateGraphicsCard.values.stock} onChange={formCreateGraphicsCard.handleChange} />
                                                {/* {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>} */}
                                            </div>
                                            {/* <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Memory
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleMemoryChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleMemoryCreate}
                                                    options={graphics}
                                                    value={selectedMemory}
                                                    isClearable={true}
                                                />
                                                
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Chipset
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleChipSetChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleChipSetCreate}
                                                    options={chipsets}
                                                    value={selectedChipSet}
                                                    isClearable={true}
                                                />
                                                
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                Clock Speed
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleLatencyChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleLatencyCreate}
                                                    options={latencies}
                                                    value={selectedLatency}
                                                    isClearable={true}
                                                />
                                                
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Base Clock Speed
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Storages"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handlePartNumberChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handlePartNumberCreate}
                                                    options={part_numbers}
                                                    value={selectedPartNumber}
                                                    isClearable={true}
                                                />
                                                
                                            </div> */}
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Price (BDT)
                                                </CLabel>
                                                <CInput type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                                                {formCreateGraphicsCard.errors.price && formCreateGraphicsCard.touched.price && <small>{formCreateGraphicsCard.errors.price}</small>}
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
                                        <CButton type="button" disabled={!formCreateGraphicsCard.isValid} onClick={formCreateGraphicsCard.handleSubmit} className="create-btn-prjctwbs create-wbs">Add</CButton>
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