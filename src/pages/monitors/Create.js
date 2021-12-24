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
import { fetchMonitorsThunk } from '../../store/slices/monitorsSlice';
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
        const cpu_specs = {
            chipset: selectedChipset.value,
            cpu_socket: selectedCpuSocket.value
        }
        const memory_specs = {
            memory_slots: selectedMemorySlot.value!==null?selectedMemorySlot.value:'',
            memory_support: selectedMemorySupport.value,
        }
        const physical_specs={
            form_factor:selectedFormFactor.value
        }
        formData.append('price', price)
        formData.append('brand', selectedBrand.value)
        formData.append('model', selectedModel.value)
        formData.append('cpu_specs', JSON.stringify(cpu_specs))
        formData.append('memory_specs', JSON.stringify(memory_specs))
        formData.append('physical_specs', JSON.stringify(physical_specs))
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        FILE_API.post('motherboards/create', formData).then((res) => {
            setSubmitted(false)
            console.log(res)
            if (res.status == 201) {
                dispatch(fetchMonitorsThunk())
                history.push('/dashboard/monitors')
                swal('Created!', 'A new motherboard Created', 'success')
            }
        }).catch(err=>{
            setSubmitted(false)
        })
    }
    
    //chipset
    const [chipsets,setChipsets] = useState([])
    const [selectedChipset, setSelectedChipset] = useState(null)
    const handleChipsetChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedChipset(option)
    }
    const handleChipsetCreate = (value) => {
        console.log('create', value)
        setSelectedChipset({ value: value, label: value })
        setChipsets([...chipsets, { value: value, label: value }])
    }

    const [brands, setBrands] = useState([])
    const [selectedBrand, setSelectedBrand] = useState(null)
    const handleBrandChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedBrand(option)
        formCreateMotherboard.setFieldValue('brand',option.value)
    }
    const handleBrandCreate = (value) => {
        console.log('create', value)
        setSelectedBrand({ value: value, label: value })
        formCreateMotherboard.setFieldValue('brand',value)
        setBrands([...brands, { value: value, label: value }])
    }
    //memory slots
    const [memory_slots, setMemorySlots] = useState([])
    const [selectedMemorySlot, setSelectedMemorySlot] = useState(null)
    const handleMemorySlotChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedMemorySlot(option)
        formCreateMotherboard.setFieldValue('memory',option.value)
    }
    const handleMemorySlotCreate = (value) => {
        console.log('create', value)
        setSelectedMemorySlot({ value: value, label: value })
        formCreateMotherboard.setFieldValue('memory',value)
        setMemorySlots([...memory_slots, { value: value, label: value }])
    }

    //memory support
    const [memory_supports, setMemorySupports] = useState([])
    const [selectedMemorySupport, setSelectedMemorySupport] = useState(null)
    const handleLatencyChange = (option, value, actionMeta) => {
        console.log(option, value)
        formCreateMotherboard.setFieldValue('latency',option.value)
        setSelectedMemorySupport(option)
    }
    const handleLatencyCreate = (value) => {
        console.log('create', value)
        setSelectedMemorySupport({ value: value, label: value })
        formCreateMotherboard.setFieldValue('latency',value)
        setMemorySupports([...memory_supports, { value: value, label: value }])
    }
    //cpu_socket
    const [cpu_sockets, setCpuSockets] = useState([])
    const [selectedCpuSocket, setSelectedCpuSocket] = useState(null)
    const handleCpuSocketChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedCpuSocket(option)
    }
    const handleCpuSocketCreate = (value) => {
        console.log('create', value)
        setSelectedCpuSocket({ value: value, label: value })
        setCpuSockets([...cpu_sockets, { value: value, label: value }])
    }
    //form_factor
    const [form_factors, setFormFactors] = useState([])
    const [selectedFormFactor, setSelectedFormFactor] = useState(null)
    const handleFormFactorChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedFormFactor(option)
    }
    const handleFormFactorCreate = (value) => {
        console.log('create', value)
        setSelectedFormFactor({ value: value, label: value })
        setFormFactors([...form_factors, { value: value, label: value }])
    }
    
    //model
    const [models, setModels] = useState([])
    const [selectedModel, setSelectedModel] = useState('')
    const handleModelChange = (option, value, actionMeta) => {
        console.log(option, value)
        formCreateMotherboard.setFieldValue('model',option.value)
        setSelectedModel(option)
    }
    const handleModelCreate = (value) => {
        console.log('create', value)
        setSelectedModel({ value: value, label: value })
        formCreateMotherboard.setFieldValue('model',value)
        setModels([...models, { value: value, label: value }])
    }
    const [price, setPrice] = useState()
    
    const reset_form = () => {
        setSelectedBrand(null)
        setSelectedMemorySlot(null)
        setSelectedMemorySupport(null)
        setSelectedCpuSocket(null)
        formCreateMotherboard.handleReset()
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
    const formCreateMotherboard = useFormik({
        initialValues: {
            name: '',
            brand: '',
            model:'',
            price:'',
            chipset:'',
            cpu_socket:'',
            form_factor:'',
            memory_slots:'',
            memory_support:'',
            stock:''
        },
        validate: validateForm,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: createMotherboard
    })
    function initialize() {
        API.get('motherboards/specification/list/model/none').then(res => {
            console.log('models', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setModels(temp)
        })
        API.get('motherboards/specification/list/brand/none').then(res => {
            console.log('brands', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setBrands(temp)
        })
        API.get('motherboards/specification/list/cpu/chipset').then(res => {
            console.log('chipset', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setChipsets(temp)
        })
        API.get('motherboards/specification/list/cpu/cpu_socket').then(res => {
            console.log('cpu_socket', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setCpuSockets(temp)
        })
        API.get('motherboards/specification/list/memory/memory_slots').then(res => {
            console.log('memory_slots', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setMemorySlots(temp)
        })
        API.get('motherboards/specification/list/memory/memory_support').then(res => {
            console.log('memory_support', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setMemorySupports(temp)
        })
        API.get('motherboards/specification/list/physical/form_factor').then(res => {
            console.log('form_factor', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setFormFactors(temp)
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
                            <CCardHeader className="project-wbs-1"> <h4 className="section-name-wbscreate">Add Monitor</h4>
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
                                                <CInput className="custom-forminput-6" id="name" name="name" type="text" values={formCreateMotherboard.values.name} onChange={formCreateMotherboard.handleChange} />
                                                {formCreateMotherboard.errors.name && formCreateMotherboard.touched.name && <small class="error">{formCreateMotherboard.errors.name}</small>}
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
                                                {formCreateMotherboard.errors.brand && formCreateMotherboard.touched.brand && <small class="error">{formCreateMotherboard.errors.brand}</small>}
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
                                                {formCreateMotherboard.errors.model && formCreateMotherboard.touched.model && <small class="error">{formCreateMotherboard.errors.model}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Stock
                                                </CLabel>
                                                <CInput className="custom-forminput-6" id="stock" name="stock" type="number" values={formCreateMotherboard.values.stock} onChange={formCreateMotherboard.handleChange} />
                                                {/* {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Memory Slots
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleMemorySlotChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleMemorySlotCreate}
                                                    options={memory_slots}
                                                    value={selectedMemorySlot}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateMotherboard.errors.name && formCreateMotherboard.touched.name && <small class="error">{formCreateMotherboard.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Chipset
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleChipsetChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleChipsetCreate}
                                                    options={chipsets}
                                                    value={selectedChipset}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateMotherboard.errors.name && formCreateMotherboard.touched.name && <small class="error">{formCreateMotherboard.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                Memory Support
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleLatencyChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleLatencyCreate}
                                                    options={memory_supports}
                                                    value={selectedMemorySupport}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateMotherboard.errors.name && formCreateMotherboard.touched.name && <small class="error">{formCreateMotherboard.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                CPU socket
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleCpuSocketChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleCpuSocketCreate}
                                                    options={cpu_sockets}
                                                    value={selectedCpuSocket}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateMotherboard.errors.name && formCreateMotherboard.touched.name && <small class="error">{formCreateMotherboard.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Form Factor
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Storages"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleFormFactorChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleFormFactorCreate}
                                                    options={form_factors}
                                                    value={selectedFormFactor}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateMotherboard.errors.name && formCreateMotherboard.touched.name && <small class="error">{formCreateMotherboard.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Price (BDT)
                                                </CLabel>
                                                <CInput type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                                                {formCreateMotherboard.errors.price && formCreateMotherboard.touched.price && <small>{formCreateMotherboard.errors.price}</small>}
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
                                        <CButton type="button" disabled={!formCreateMotherboard.isValid} onClick={formCreateMotherboard.handleSubmit} className="create-btn-prjctwbs create-wbs">Add</CButton>
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