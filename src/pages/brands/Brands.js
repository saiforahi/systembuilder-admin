import React, { useState } from 'react'
import swal from 'sweetalert'
import './brands-styles.css'
import { CCard, CCardBody, CCol, CContainer, CDataTable, CRow, CButton, CBadge, CCardHeader } from '@coreui/react'
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
const Brands = () => {
    let history = useHistory()
    const brands = useSelector(state=>{
        let temp=[]
        Array.from(state.brands.data).forEach((element,idx) => {
            temp.push({'#':idx+1,'Name':element.name})
        });
        return temp
    })
    return (
        <>
            <CContainer>
                <CRow className="align-items-center">
                    <CCol md="8" className="mb-3 mb-xl-0 text-left offset-md-2">
                        <Link to="/dashboard/brands/create"><CButton shape="round" color="primary">Add</CButton></Link>
                    </CCol>
                </CRow>
                <hr></hr>
                <CRow>
                    <CCol md="8" className="offset-md-2">
                        <CCard className="custom-wbs-card-1">
                            <CCardHeader>
                                <h3>Brands</h3>
                            </CCardHeader>
                            <CCardBody>
                                <CDataTable
                                    items={brands}
                                    fields={[
                                        {
                                            key: "#",
                                            _style: { width: "5%" },
                                            _classes: "font-weight-bold",
                                        },
                                        "Name",
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
                                                        <CButton onClick={() => { swal('Warning', 'This service is not available right now', 'warning') }} type="button" size="sm" color="danger">Delete</CButton> <CButton onClick={() => { history.push({ pathname: '/dashboard/brands/details', state: { brand: item } }) }} size="sm" type="button" color="primary">Edit</CButton>
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

export default Brands