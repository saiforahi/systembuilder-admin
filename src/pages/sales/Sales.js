import React, { useState } from 'react'
import { CContainer, CRow,CCol,CCard,CCardHeader,CModalBody,CModal,CModalHeader,CForm,CModalTitle,CCardBody, CLabel, CInput, CButton, CDataTable,CBadge } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useFormik } from 'formik'
import './Sales.css'
import GradeIcon from '@material-ui/icons/Grade';
import IconButton from '@material-ui/core/IconButton';
import { LinearProgress } from '@material-ui/core'

import { API } from '../../Config'
import swal from 'sweetalert'
const Sales = () => {
    const [found_sales,setFoundSales]=useState([])
    const [found_total,setFoundTotal]=useState(0)
    const [selectedOrder,setSelectedOrder]=useState()
    const [showModal,setShowModal]=useState()
    // const [searching,setSearching] = useState(false)
    const searchSales=(values,{setSubmitting})=>{
        console.log(values)
        API.get('orders/sales/'+values.from+'/'+values.to).then((res)=>{
            setSubmitting(false)
            console.log(res.data)
            let temp=[]
            for (const [key, value] of Object.entries(res.data.data)) {
                console.log(`${key}: ${value}`);
                let sale_total=0
                value.forEach((item,idx)=>{
                    sale_total+=parseInt(item.product.price)
                })
                temp.push({'#':temp.length+1,id:value[0].id,'Tracking Code':key,'Customer':value[0].customer_name,'Total':sale_total,'Payment Type':value[0].payment_type.name,'Payment Status':value[0].payment_status,"Placed At":value[0].created_at,deleted_at:value[0].deleted_at,data:value})
            }
            setFoundSales(temp)
            setFoundTotal(res.data.total_sale)
            if(res.data.total_sale ==0 && temp.length==0){
                swal('No Sale!','There are no sale history between given dates','warning')
            }
        })
    }
    const show_details=(item)=>{
        setSelectedOrder(item)
        setShowModal(true)
        
    }
    const validateSearchForm=(values)=>{
        const errors = {}
        if (!values.from) errors.from = "From date is required"
        if (!values.to) errors.to = "To date is required"
        // if (!values.price) errors.price = "Price is required"
        // if (!values.memory) errors.memory = "Memory is required"
        // if (!values.ram_size) errors.ram_size = "RAM Size is required"
        // if (!values.latency) errors.latency = "Latency is required"
        // if (!values.dimm_type) errors.dimm_type = "DIMM is required"
        // if (!values.part_number) errors.part_number = "Part Number is required"
       
        return errors
    }
    const is_trashed=(deleted_at)=>{
        return deleted_at==null?false:true
    }
    const searchForm=useFormik({
        initialValues:{
            from:'',
            to:''
        },
        validate: validateSearchForm,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: searchSales
    })
    return (
        <>
            {selectedOrder!=undefined && <CModal size="lg" alignment="center" show={showModal} onClose={() => { setShowModal(false) }}>
                <CModalHeader onClose={() => {setShowModal(false)}} closeButton>
                    <CModalTitle className="modal-title-projects">
                        <span className="edit-profile-form-header">Order Details</span>
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CContainer>
                        <CForm>
                            <CRow>
                                {/* <div className="card-header-portion-ongoing">
                                    <h4 className="ongoing-card-header-1">
                                        <IconButton aria-label="favourite" disabled size="medium" color="primary">
                                            <GradeIcon fontSize="inherit" className="fav-button" />
                                        </IconButton>
                                        
                                    </h4>

                                </div> */}
                                <div className="justify-content-center">
                                    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 mt-1 mb-2">
                                        <CCard className="card-ongoing-project">
                                            <CCardBody className="details-project-body">
                                                <div className="ongoing-initial-info row">
                                                    <div className="tasks-done-2 col-lg-4">
                                                        <h6 className="">Reciepient Name</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].customer_name}</h6>
                                                        </div>
                                                    <div className="tasks-done-2 col-lg-4">
                                                        <h6 className="">Reciepient Phone</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].customer_phone}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="">Reciepient Email</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].customer_email}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="">Reciepient Address</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].shipping_address}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="">Order Date</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].created_at}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="">Payment Status</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].payment_status}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="">Payment Type</h6>
                                                        <h6 className="project-point-details">{selectedOrder.data[0].payment_type.name}</h6>
                                                    </div>
                                                    <div className="tasks-done-2 col-lg-4"><h6 className="">Remaining Hours</h6>
                                                        <h6 className="project-point-details"></h6>
                                                    </div>
                                                </div>

                                                <div className="col-md-12 mt-4 mb-2">
                                                    <h5 className="projectName mb-3">Product(s)-({selectedOrder.data.length})</h5>
                                                    <div className="file-show-ongoing-details row">
                                                        {selectedOrder.data != undefined && Array.from(selectedOrder.data).map((item, idx) => (
                                                            <div key={idx} className="col-md-4 col-sm-6 col-lg-4">
                                                                <div className="file-attached-ongoing rounded-pill">
                                                                    {item.product.name}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-12 mt-2 mb-2">
                                                    <div className="project-actions">
                                                        <CButton className="edit-project-ongoing-task" onClick={() => editInfoForm(subtask)} ><CIcon name="cil-pencil" className="mr-1" /> Edit </CButton>
                                                        <CButton type="button" onClick={() => delete_subtask(subtask.work_package_index)} className="delete-project-2"><CIcon name="cil-trash" className="mr-1" /> Delete</CButton>
                                                    </div>
                                                </div> */}
                                            </CCardBody>
                                        </CCard>
                                    </div>
                                </div>
                            </CRow>
                            {/**forward to wbs button  */}
                            {/* <CRow className="justify-content-center">
                                <CButton type='button' disabled className="create-wbs-from-modal" onClick={() => {}}>Make Paid</CButton>
                            </CRow> */}
                        </CForm>
                    </CContainer>
                </CModalBody>
            </CModal>}
            <CContainer>
                <CRow>
                    <CCol lg="10" className={"offset-lg-1"}>
                        <CCard className="mb-4">
                            <CCardHeader>Sales</CCardHeader>
                            <CCardBody>
                                <CRow>
                                    <CCol xs={12} md={6} xl={6}>
                                        <CRow>
                                            <CCol sm={6}>
                                                <div className="border-start border-start-4 border-start-info py-1 px-3">
                                                    <div className="text-medium-emphasis small">Total Sales</div>
                                                    <div className="fs-5 fw-semibold">N/A</div>
                                                </div>
                                            </CCol>
                                            <CCol sm={6}>
                                                <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                                                    <div className="text-medium-emphasis small">Last Year Total</div>
                                                    <div className="fs-5 fw-semibold">N/A</div>
                                                </div>
                                            </CCol>
                                        </CRow>
                                    </CCol>

                                    <CCol xs={12} md={6} xl={6}>
                                        <CRow>
                                            <CCol sm={6}>
                                                <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                                                    <div className="text-medium-emphasis small">Last Month Total</div>
                                                    <div className="fs-5 fw-semibold">N/A</div>
                                                </div>
                                            </CCol>
                                            <CCol sm={6}>
                                                <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                                                    <div className="text-medium-emphasis small">Last Week Total</div>
                                                    <div className="fs-5 fw-semibold">N/A</div>
                                                </div>
                                            </CCol>
                                        </CRow>
                                    </CCol>
                                </CRow>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
                <CRow>
                    < CCol xl="3" lg="3" md="6" >
                        <CLabel className="custom-label-5" htmlFor="from">
                            From Date
                        </CLabel>
                        <CInput className="custom-forminput-6  w-100" type="date" name="from" id="from" value={searchForm.values.from} onChange={searchForm.handleChange} />
                        {/**Error show */}
                        {searchForm.errors.from && <p className="error mt-1">{searchForm.errors.from}</p>}
                    </CCol >
                    < CCol xl="3" lg="3" md="6" >
                        <CLabel className="custom-label-5" htmlFor="from">
                            To Date
                        </CLabel>
                        <CInput className="custom-forminput-6  w-100" type="date" name="to" id="to" value={searchForm.values.to} onChange={searchForm.handleChange} />
                        {/**Error show */}
                        {searchForm.errors.to && <p className="error mt-1">{searchForm.errors.to}</p>}
                    </CCol >
                    <CCol xl="3" lg="3" md="6">
                        <div className="button-holder--3">
                            <CButton className="generate-card-button" onClick={searchForm.handleSubmit}>Find Sales</CButton>
                        </div>
                    </CCol>
                </CRow>
                <hr/>
                {searchForm.isSubmitting && <LinearProgress/>}
                {found_sales.length>0 && <CRow>
                    <CCol>
                    <CCard>
                        <CCardHeader>
                            <CRow>
                                <CCol lg="1">
                                <h5>Total:</h5>
                                </CCol>
                                <CCol lg="11">
                                <h6>{found_total}</h6>
                                </CCol>
                            </CRow>
                            
                        </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={found_sales}
                                fields={[
                                    {
                                        key: "#",
                                        _style: { width: "5%" },
                                        _classes: "font-weight-bold",
                                    },
                                    "Customer",
                                    "Total",
                                    "Placed At",
                                    {
                                        key: "Action",
                                        label: "Actions",
                                        _style: { maxWidth: "5%" },
                                        sorter: true,
                                        filter: false,
                                    },
                                ]}
                                light
                                hover
                                striped
                                bordered
                                sorter
                                columnFilter
                                size="sm"
                                itemsPerPage={10}
                                pagination
                                scopedSlots={{
                                    'Action':
                                        (item) => (
                                            <td>
                                                <CBadge> 
                                                    <CButton disabled={is_trashed(item.deleted_at)} onClick={() => {}} type="button" size="sm" color="danger">Delete</CButton> {is_trashed(item.deleted_at)==false &&<CButton onClick={() => {show_details(item)}} size="sm" type="button" color="primary">Details</CButton>} {/*onClick={() => { history.push('/dashboard/orders/details/'+item.id)}} */}
                                                </CBadge>
                                            </td>
                                        )
                                }}
                            />
                        </CCardBody>
                    </CCard>
                    </CCol>
                </CRow>}
            </CContainer>
        </>
    )
}

export default Sales