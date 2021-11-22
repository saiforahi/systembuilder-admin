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
const Create = (props) => {
    const dispatch = useDispatch()
    const [submitted,setSubmitted]=useState(false)
    let history = useHistory()
    const [images, setImages] = useState([])
    const [avatars, setAvatars] = useState([])
    const [pictures, setPictures] = useState([])
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
    
    const createStorage = (values) => {
        setSubmitted(true)
        let formData = new FormData()
        formData.append('name', values.name)
        if (pictures.length > 0) {
            formData.append('total_images', pictures[0].length)
            // formData.append('images',pictures[0])
            console.log('pictures', pictures[0])
            for (let index = 0; index < pictures[0].length; index++) {
                console.log('picture'.concat(index), pictures[0][index])
                formData.append('image' + (index + 1), pictures[0][index])
            }
        }
        const storage_specs = {
            drive_capacity: selectedDriveCapacity.value
        }
        const performance_specs = {
            interface: selectedInterface.value,
            write_speed: selectedWriteSpeed.value,
            read_speed: selectedReadSpeed.value
        }
        const physical_specs = {
            drive_type: selectedDriveType.value,
            form_factor: selectedFormFactor.value
        }
        const reliability_specs = {
            encryption: selectedEncryption.value
        }
        formData.append('price', price)
        formData.append('brand', selectedBrand.value)
        formData.append('model', selectedModel.value)
        formData.append('storage_specs', JSON.stringify(storage_specs))
        formData.append('performance_specs', JSON.stringify(performance_specs))
        formData.append('physical_specs', JSON.stringify(physical_specs))
        formData.append('reliability_specs', JSON.stringify(reliability_specs))
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        FILE_API.post('storages/create', formData).then((res) => {
            setSubmitted(false)
            console.log(res)
            if (res.status == 201) {
                dispatch(fetchStoragesList())
                history.push('/dashboard/storages')
                swal('Created!', 'A new storage Created', 'success')
            }
        }).catch(err=>{
            setSubmitted(false)
        })
    }
    const validateForm = (values) => {
        const errors = {}
        if (!values.name) errors.name = "Name is required"
        return errors
    }
    
    const [interfaces,setInterfaces] = useState([])
    const [selectedInterface, setSelectedInterface] = useState()
    const handleInterfaceChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedInterface(option)
    }
    const handleInterfaceCreate = (value) => {
        console.log('create', value)
        setSelectedInterface({ value: value, label: value })
        setInterfaces([...interfaces, { value: value, label: value }])
    }
    const [pcies, setPCIes] = useState([])
    const [selectedPCIe, setSelectedPCIe] = useState('')
    const handlePCIeChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedPCIe(option)
    }
    const handlePCIeCreate = (value) => {
        console.log('create', value)
        setSelectedPCIe({ value: value, label: value })
        setPCIes([...pcies, { value: value, label: value }])
    }
    const [brands, setBrands] = useState([])
    const [selectedBrand, setSelectedBrand] = useState()
    const handleBrandChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedBrand(option)
    }
    const handleBrandCreate = (value) => {
        console.log('create', value)
        setSelectedBrand({ value: value, label: value })
        setBrands([...brands, { value: value, label: value }])
    }
    const [drive_capacities, setDriveCapacities] = useState([])
    const [selectedDriveCapacity, setSelectedDriveCapacity] = useState('')
    const handleDriveCapacityChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedDriveCapacity(option)
    }
    const handleDriveCapacityCreate = (value) => {
        console.log('create', value)
        setSelectedDriveCapacity({ value: value, label: value })
        setDriveCapacities([...drive_capacities, { value: value, label: value }])
    }

    //write speed
    const [write_speeds, setWriteSpeeds] = useState([])
    const [selectedWriteSpeed, setSelectedWriteSpeed] = useState('')
    const handleWriteSpeedChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedWriteSpeed(option)
    }
    const handleWiteSpeedCreate = (value) => {
        console.log('create', value)
        setSelectedWriteSpeed({ value: value, label: value })
        setWriteSpeeds([...write_speeds, { value: value, label: value }])
    }
    //read
    const [read_speeds, setReadSpeeds] = useState([])
    const [selectedReadSpeed, setSelectedReadSpeed] = useState('')
    const handleReadSpeedChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedReadSpeed(option)
    }
    const handleReadSpeedCreate = (value) => {
        console.log('create', value)
        setSelectedReadSpeed({ value: value, label: value })
        setReadSpeeds([...read_speeds, { value: value, label: value }])
    }
    //drive type
    const [drive_types, setDriveTypes] = useState([])
    const [selectedDriveType, setSelectedDriveType] = useState('')
    const handleDriveTypeChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedDriveType(option)
    }
    const handleDriveTypeCreate = (value) => {
        console.log('create', value)
        setSelectedDriveType({ value: value, label: value })
        setDriveTypes([...drive_types, { value: value, label: value }])
    }
    //form-factor
    const [form_factors, setFormFactors] = useState([])
    const [selectedFormFactor, setSelectedFormFactor] = useState('')
    const handleFormFactorChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedFormFactor(option)
    }
    const handleFormFactorCreate = (value) => {
        console.log('create', value)
        setSelectedFormFactor({ value: value, label: value })
        setFormFactors([...form_factors, { value: value, label: value }])
    }
    //encryption
    const [encryptions, setEncryptions] = useState([])
    const [selectedEncryption, setSelectedEncryption] = useState('')
    const handleEncryptionChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedEncryption(option)
    }
    const handleEncryptionCreate = (value) => {
        console.log('create', value)
        setSelectedEncryption({ value: value, label: value })
        setEncryptions([...encryptions, { value: value, label: value }])
    }
    //model
    const [models, setModels] = useState([])
    const [selectedModel, setSelectedModel] = useState('')
    const handleModelChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedModel(option)
    }
    const handleModelCreate = (value) => {
        console.log('create', value)
        setSelectedModel({ value: value, label: value })
        setModels([...models, { value: value, label: value }])
    }
    const [price, setPrice] = useState()
    const [graphics, setGraphics] = useState([])
    const [selectedGraphic, setSelectedGraphic] = useState('')
    const handleGraphicChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedGraphic(option)
    }
    const handleGraphicCreate = (value) => {
        console.log('create', value)
        setSelectedGraphic({ value: value, label: value })
        setGraphics([...graphics, { value: value, label: value }])
    }
    const reset_form = () => {
        setSelectedGraphic(null)
        setSelectedBrand(null)
        setSelectedDriveCapacity(null)
        setSelectedPCIe(null)
        setSelectedInterface(null)
        setSelectedWriteSpeed(null)
        setSelectedReadSpeed(null)
        formCreateStorage.handleReset()
        setPictures([])
    }
    const formCreateStorage = useFormik({
        initialValues: {
            name: ''
        },
        validate: validateForm,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: createStorage
    })
    function initialize() {
        API.get('storages/specification/list/model/none').then(res => {
            console.log('models', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setModels(temp)
        })
        API.get('storages/specification/list/brand/none').then(res => {
            console.log('brands', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setBrands(temp)
        })
        API.get('storages/specification/list/storage/drive_capacity').then(res => {
            console.log('drive_capacities', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setDriveCapacities(temp)
        })
        API.get('storages/specification/list/performance/interface').then(res => {
            console.log('interfaces', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setInterfaces(temp)
        })
        API.get('storages/specification/list/performance/write_speed').then(res => {
            console.log('write_speed', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setWriteSpeeds(temp)
        })
        API.get('storages/specification/list/performance/read_speed').then(res => {
            console.log('read_speed', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setReadSpeeds(temp)
        })
        API.get('storages/specification/list/physical/form_factor').then(res => {
            console.log('form_factor', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setFormFactors(temp)
        })
        API.get('storages/specification/list/physical/drive_type').then(res => {
            console.log('drive_type', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setDriveTypes(temp)
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
                            <CCardHeader className="project-wbs-1"> <h4 className="section-name-wbscreate">Add Storage</h4>
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
                                                <CInput className="custom-forminput-6" id="name" name="name" type="text" values={formCreateStorage.values.name} onChange={formCreateStorage.handleChange} />
                                                {formCreateStorage.errors.name && formCreateStorage.touched.name && <small class="error">{formCreateStorage.errors.name}</small>}
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
                                                {/* {formCreateStorage.errors.name && formCreateStorage.touched.name && <small>{formCreateStorage.errors.name}</small>} */}
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
                                                {/* {formCreateStorage.errors.name && formCreateStorage.touched.name && <small>{formCreateStorage.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Drive Capacity
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleDriveCapacityChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleDriveCapacityCreate}
                                                    options={drive_capacities}
                                                    value={selectedDriveCapacity}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateStorage.errors.name && formCreateStorage.touched.name && <small>{formCreateStorage.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Interface
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleInterfaceChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleInterfaceCreate}
                                                    options={interfaces}
                                                    value={selectedInterface}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateStorage.errors.name && formCreateStorage.touched.name && <small>{formCreateStorage.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                Write Speed
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleWriteSpeedChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleWiteSpeedCreate}
                                                    options={write_speeds}
                                                    value={selectedWriteSpeed}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateStorage.errors.name && formCreateStorage.touched.name && <small>{formCreateStorage.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                Read Speed
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleReadSpeedChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleReadSpeedCreate}
                                                    options={read_speeds}
                                                    value={selectedReadSpeed}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateStorage.errors.name && formCreateStorage.touched.name && <small>{formCreateStorage.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Drive Type
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Storages"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleDriveTypeChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleDriveTypeCreate}
                                                    options={drive_types}
                                                    value={selectedDriveType}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateStorage.errors.name && formCreateStorage.touched.name && <small>{formCreateStorage.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Form Factor
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Memories"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleFormFactorChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleFormFactorCreate}
                                                    options={form_factors}
                                                    value={selectedFormFactor}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateStorage.errors.name && formCreateStorage.touched.name && <small>{formCreateStorage.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Encryption
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Memories"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleEncryptionChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleEncryptionCreate}
                                                    options={encryptions}
                                                    value={selectedEncryption}
                                                    isClearable={true}
                                                />
                                                {/* {formCreateStorage.errors.name && formCreateStorage.touched.name && <small>{formCreateStorage.errors.name}</small>} */}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Price (BDT)
                                                </CLabel>
                                                <CInput type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                                                {formCreateStorage.errors.name && formCreateStorage.touched.name && <small>{formCreateStorage.errors.name}</small>}
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
                                        <CButton type="button" onClick={formCreateStorage.handleSubmit} className="create-btn-prjctwbs create-wbs">Add</CButton>
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