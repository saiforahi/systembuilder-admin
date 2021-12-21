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
import { fetchStoragesList } from '../../store/slices/storagesSlice';
import { fetchMemoriesThunk } from '../../store/slices/memoriesSlice';
const Create = (props) => {
    const dispatch = useDispatch()
    const [submitted,setSubmitted]=useState(false)
    let history = useHistory()
    const [pictures, setPictures] = useState([])
    const onDrop = picture => {
        setPictures([...pictures, picture]);
    };
    // const [selectedBrand,setSelectedBrand] = useState()
    
    const createStorage = (values) => {
        setSubmitted(true)
        let formData = new FormData()
        formData.append('name', values.name)
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
        const general_specs = {
            part_number: selectedPartNumber.value
        }
        const memory_specs = {
            memory: selectedMemory.value!==null?selectedMemory.value:'',
            ram_size: selectedRAMsize.value,
            latency: selectedLatency.value
        }
        const additional_specs={
            dimm:selectedDimmType.value
        }
        formData.append('price', price)
        formData.append('brand', selectedBrand.value)
        formData.append('model', selectedModel.value)
        formData.append('general_specs', JSON.stringify(general_specs))
        formData.append('memory_specs', JSON.stringify(memory_specs))
        formData.append('additional_specs', JSON.stringify(additional_specs))
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        FILE_API.post('memories/create', formData).then((res) => {
            setSubmitted(false)
            console.log(res)
            if (res.status == 201) {
                dispatch(fetchMemoriesThunk())
                history.push('/dashboard/memories')
                swal('Created!', 'A new memory Created', 'success')
            }
        }).catch(err=>{
            setSubmitted(false)
        })
    }
    
    
    const [ram_sizes,setRAMsizes] = useState([])
    const [selectedRAMsize, setSelectedRAMsize] = useState(null)
    const handleRAMChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedRAMsize(option)
    }
    const handleRAMCreate = (value) => {
        console.log('create', value)
        setSelectedRAMsize({ value: value, label: value })
        setRAMsizes([...ram_sizes, { value: value, label: value }])
    }
    const [brands, setBrands] = useState([])
    const [selectedBrand, setSelectedBrand] = useState(null)
    const handleBrandChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedBrand(option)
        formCreateMemory.setFieldValue('brand',option.value)
    }
    const handleBrandCreate = (value) => {
        console.log('create', value)
        setSelectedBrand({ value: value, label: value })
        formCreateMemory.setFieldValue('brand',value)
        setBrands([...brands, { value: value, label: value }])
    }
    const [memories, setMemories] = useState([])
    const [selectedMemory, setSelectedMemory] = useState(null)
    const handleMemoryChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedMemory(option)
        formCreateMemory.setFieldValue('memory',option.value)
    }
    const handleMemoryCreate = (value) => {
        console.log('create', value)
        setSelectedMemory({ value: value, label: value })
        formCreateMemory.setFieldValue('memory',value)
        setMemories([...memories, { value: value, label: value }])
    }

    //write speed
    const [latencies, setLatencies] = useState([])
    const [selectedLatency, setSelectedLatency] = useState(null)
    const handleLatencyChange = (option, value, actionMeta) => {
        console.log(option, value)
        formCreateMemory.setFieldValue('latency',option.value)
        setSelectedLatency(option)
    }
    const handleLatencyCreate = (value) => {
        console.log('create', value)
        setSelectedLatency({ value: value, label: value })
        formCreateMemory.setFieldValue('latency',value)
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
        formCreateMemory.setFieldValue('model',option.value)
        setSelectedModel(option)
    }
    const handleModelCreate = (value) => {
        console.log('create', value)
        setSelectedModel({ value: value, label: value })
        formCreateMemory.setFieldValue('model',value)
        setModels([...models, { value: value, label: value }])
    }
    const [price, setPrice] = useState()
    
    const reset_form = () => {
        setSelectedBrand(null)
        setSelectedMemory(null)
        setSelectedLatency(null)
        setSelectedDimmType(null)
        formCreateMemory.handleReset()
        setPictures([])
    }
    const validateForm = (values) => {
        const errors = {}
        if (!values.name) errors.name = "Name is required"
        if (!values.brand) errors.brand = "Brand is required"
        if (!values.model) errors.model = "Model is required"
        // if (!values.price) errors.price = "Price is required"
        // if (!values.memory) errors.memory = "Memory is required"
        // if (!values.ram_size) errors.ram_size = "RAM Size is required"
        // if (!values.latency) errors.latency = "Latency is required"
        // if (!values.dimm_type) errors.dimm_type = "DIMM is required"
        // if (!values.part_number) errors.part_number = "Part Number is required"
       
        return errors
    }
    const formCreateMemory = useFormik({
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
            stock:''
        },
        validate: validateForm,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: createStorage
    })
    function initialize() {
        API.get('memories/specification/list/model/none').then(res => {
            console.log('models', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setModels(temp)
        })
        API.get('memories/specification/list/brand/none').then(res => {
            console.log('brands', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setBrands(temp)
        })
        API.get('memories/specification/list/memory/memory').then(res => {
            console.log('memories', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setMemories(temp)
        })
        API.get('memories/specification/list/memory/ram').then(res => {
            console.log('ram_sizes', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setRAMsizes(temp)
        })
        API.get('memories/specification/list/memory/latency').then(res => {
            console.log('write_speed', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setLatencies(temp)
        })
        API.get('memories/specification/list/additional/dimm').then(res => {
            console.log('read_speed', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setDimmTypes(temp)
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
                            <CCardHeader className="project-wbs-1"> <h4 className="section-name-wbscreate">Add Memory</h4>
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
                                                <CInput className="custom-forminput-6" id="name" name="name" type="text" values={formCreateMemory.values.name} onChange={formCreateMemory.handleChange} />
                                                {formCreateMemory.errors.name && formCreateMemory.touched.name && <small class="error">{formCreateMemory.errors.name}</small>}
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
                                                {formCreateMemory.errors.brand && formCreateMemory.touched.brand && <small class="error">{formCreateMemory.errors.brand}</small>}
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
                                                {formCreateMemory.errors.model && formCreateMemory.touched.model && <small class="error">{formCreateMemory.errors.model}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Stock
                                                </CLabel>
                                                <CInput className="custom-forminput-6" id="stock" name="stock" type="number" values={formCreateMemory.values.stock} onChange={formCreateMemory.handleChange} />
                                                {/* {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
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
                                                    options={memories}
                                                    value={selectedMemory}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateMemory.errors.name && formCreateMemory.touched.name && <small class="error">{formCreateMemory.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    RAM size
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleRAMChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleRAMCreate}
                                                    options={ram_sizes}
                                                    value={selectedRAMsize}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateMemory.errors.name && formCreateMemory.touched.name && <small class="error">{formCreateMemory.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                CAS Latency
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
                                                {/* {formCreateMemory.errors.name && formCreateMemory.touched.name && <small class="error">{formCreateMemory.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                DIMM type
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleDimmChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleDimmCreate}
                                                    options={dimm_types}
                                                    value={selectedDimmType}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateMemory.errors.name && formCreateMemory.touched.name && <small class="error">{formCreateMemory.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Part Number
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
                                                {/* {formCreateMemory.errors.name && formCreateMemory.touched.name && <small class="error">{formCreateMemory.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Price (BDT)
                                                </CLabel>
                                                <CInput type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                                                {formCreateMemory.errors.name && formCreateMemory.touched.name && <small>{formCreateMemory.errors.name}</small>}
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
                                        <CButton type="button" disabled={!formCreateMemory.isValid} onClick={formCreateMemory.handleSubmit} className="create-btn-prjctwbs create-wbs">Add</CButton>
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