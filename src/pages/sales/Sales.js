import React, { useState } from 'react'
import { CContainer, CRow,CCol,CCard,CCardHeader,CCardBody, CLabel, CInput, CButton, CDataTable,CBadge } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useFormik } from 'formik'
import './Sales.css'
import { API } from '../../Config'
const Sales = () => {
    const [found_sales,setFoundSales]=useState([])
    const searchSales=(values,{setSubmitting})=>{
        console.log(values)
        API.get('orders/sales/'+values.from+'/'+values.to).then((res)=>{
            console.log(res.data)
        })
    }
    const validateSearchForm=(values)=>{
        const errors = {}
        if (!values.from) errors.from = "Name is required"
        if (!values.to) errors.to = "Brand is required"
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
            <CContainer>
                <CRow>
                    <CCol xs>
                        <CCard className="mb-4">
                            <CCardHeader>Sales</CCardHeader>
                            <CCardBody>
                                <CRow>
                                    <CCol xs={12} md={6} xl={6}>
                                        <CRow>
                                            <CCol sm={6}>
                                                <div className="border-start border-start-4 border-start-info py-1 px-3">
                                                    <div className="text-medium-emphasis small">Total Sales</div>
                                                    <div className="fs-5 fw-semibold">9,123</div>
                                                </div>
                                            </CCol>
                                            <CCol sm={6}>
                                                <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                                                    <div className="text-medium-emphasis small">Last Year Total</div>
                                                    <div className="fs-5 fw-semibold">22,643</div>
                                                </div>
                                            </CCol>
                                        </CRow>
                                    </CCol>

                                    <CCol xs={12} md={6} xl={6}>
                                        <CRow>
                                            <CCol sm={6}>
                                                <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                                                    <div className="text-medium-emphasis small">Last Month Total</div>
                                                    <div className="fs-5 fw-semibold">78,623</div>
                                                </div>
                                            </CCol>
                                            <CCol sm={6}>
                                                <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                                                    <div className="text-medium-emphasis small">Last Week Total</div>
                                                    <div className="fs-5 fw-semibold">49,123</div>
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
                <CRow>
                    <CCol>
                    <CCard>
                        <CCardBody>
                            <CDataTable
                                items={found_sales}
                                fields={[
                                    {
                                        key: "#",
                                        _style: { width: "5%" },
                                        _classes: "font-weight-bold",
                                    },
                                    "Name",
                                    "Stock",
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
                                                    <CButton disabled={is_trashed(item.deleted_at)} onClick={() => {}} type="button" size="sm" color="danger">Delete</CButton> {is_trashed(item.deleted_at)==false &&<CButton onClick={() => {}} size="sm" type="button" color="primary">Details</CButton>} {/*onClick={() => { history.push('/dashboard/orders/details/'+item.id)}} */}
                                                </CBadge>
                                            </td>
                                        )
                                }}
                            />
                        </CCardBody>
                    </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </>
    )
}

export default Sales