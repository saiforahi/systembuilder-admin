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
import { fetchProcessorsList } from '../../store/slices/processorsSlice';
const Create = (props) => {
    const dispatch = useDispatch()
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
    const [submitted,setSubmitted]=useState(false)
    const createlaptop = (values) => {
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
        const general_specs = {
            socket: selectedSocket.value,
            pcie:selectedPCIe.value,
            manufacturing_process : selectedManufacturingProcess.value,
        }
        formData.append('price', price)
        formData.append('brand', selectedBrand.value)
        formData.append('model', selectedModel.value)
        formData.append('general_specs', JSON.stringify(general_specs))
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        FILE_API.post('processors/create', formData).then((res) => {
            setSubmitted(false)
            console.log(res)
            if (res.status == 201) {
                dispatch(fetchProcessorsList())
                history.push('/dashboard/processors')
                swal('Created!', 'A new processor Created', 'success')
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
    
    const [manufacturing_processes,setManufacturingProcesses] = useState([])
    const [selectedManufacturingProcess, setSelectedManufacturingProcess] = useState()
    const handleManufacturingProcessChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedManufacturingProcess(option)
    }
    const handleManufacturingProcessCreate = (value) => {
        console.log('create', value)
        setSelectedManufacturingProcess({ value: value, label: value })
        setManufacturingProcesses([...manufacturing_processes, { value: value, label: value }])
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
    const [sockets, setSockets] = useState([])
    const [selectedSocket, setSelectedSocket] = useState('')
    const handleSocketChange = (option, value, actionMeta) => {
        console.log(option, value)
        setSelectedSocket(option)
    }
    const handleSocketCreate = (value) => {
        console.log('create', value)
        setSelectedSocket({ value: value, label: value })
        setSockets([...sockets, { value: value, label: value }])
    }
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
        setSelectedSocket(null)
        setSelectedPCIe(null)
        setSelectedManufacturingProcess(null)
        formCreateProcessor.handleReset()
        setPictures([])
    }
    const formCreateProcessor = useFormik({
        initialValues: {
            name: '',
            brand: ''
        },
        validate: validateForm,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: createlaptop
    })
    function initialize() {
        API.get('processors/specification/list/general/pcie').then(res => {
            console.log('pcies', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setPCIes(temp)
        })
        API.get('processors/specification/list/brand/none').then(res => {
            console.log('memories', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setBrands(temp)
        })
        API.get('processors/specification/list/general/socket').then(res => {
            console.log('sockets', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setSockets(temp)
        })
        API.get('processors/specification/list/general/manufacturing_process').then(res => {
            console.log('manufacturing_process', res.data)
            let temp = []
            Array.from(res.data.data).forEach((item, idx) => {
                temp.push({ value: item, label: item })
            })
            setManufacturingProcesses(temp)
        })
        API.get('processors/specification/list/model/none').then(res => {
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
                            <CCardHeader className="project-wbs-1"> <h4 className="section-name-wbscreate">Add Processor</h4>
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
                                                {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>}
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
                                                    Socket
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleSocketChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleSocketCreate}
                                                    options={sockets}
                                                    value={selectedSocket}
                                                    isClearable={true}
                                                />
                                                {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Manufacturing Process
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleManufacturingProcessChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleManufacturingProcessCreate}
                                                    options={manufacturing_processes}
                                                    value={selectedManufacturingProcess}
                                                    isClearable={true}
                                                />
                                                {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>}
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                Maximum Number of PCIe Lanes
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Operating Systems"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handlePCIeChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handlePCIeCreate}
                                                    options={pcies}
                                                    value={selectedPCIe}
                                                    isClearable={true}
                                                />
                                                {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>}
                                            </div>
                                            {/* <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
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
                                                {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>}
                                            </div> */}
                                            {/* <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Memory
                                                </CLabel>
                                                <CreatableSelect
                                                    aria-labelledby="Memories"
                                                    closeMenuOnSelect={true}
                                                    classNamePrefix="custom-forminput-6"
                                                    onChange={handleBrandChange}
                                                    // onInputChange={handleOSInputChange}
                                                    onCreateOption={handleMemoryCreate}
                                                    options={memories}
                                                    value={selectedBrand}
                                                    isClearable={true}
                                                />
                                                {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>}
                                            </div> */}
                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <CLabel className="custom-label-wbs5">
                                                    Price (BDT)
                                                </CLabel>
                                                <CInput type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                                                {formCreateProcessor.errors.name && formCreateProcessor.touched.name && <small>{formCreateProcessor.errors.name}</small>}
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